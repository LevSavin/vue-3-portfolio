<template>
  <el-table
    ref="tableRef"
    :data="data"
    border
    :size="size"
    :max-height="maxHeight"
    header-row-class-name="table__head"
    header-cell-class-name="table__head-cell"
    row-class-name="table__row"
    row-key="id"
  >
    <!-- основные столбцы -->
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      :prop="column"
      :label="getLabel(column)"
      sortable
      resizable
      :min-width="getWidth(column)"
      class="default-column"
    >
      <template #default="scope">
        <!-- столбец c формой -->
        <div v-if="hasColumns('formColumns', column)">
          <tableFormColumn
            @sendFormData="sendFormData"
            :formValidationSchema="formValidationSchema"
            :data="scope.row"
            :columnName="column"
          ></tableFormColumn>
        </div>
        <!-- столбец с булевыми значениями -->
        <div v-else-if="hasColumns('booleanColumns', column)">
          <span v-if="Object.prototype.hasOwnProperty.call(scope.row, column)">
            {{ `${$t(`labels.${scope.row[column] ? "yes" : "no"}`)}` }}
          </span>
          <span v-else>""</span>
        </div>
        <!-- столбцы для загрузки и отображения картинок -->
        <div v-else-if="isUploadPictureColumn(column)">
          <tableUploadPictureColumn
            @pictureOperation="pictureOperation"
            :data="scope.row"
            :column="column"
            :uploadPictureColumnData="uploadPictureColumns[column]"
          ></tableUploadPictureColumn>
        </div>
        <!-- основные столбцы -->
        <span v-else v-text="getText(scope.row[column])"></span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import {
  defineAsyncComponent,
  defineComponent,
  computed,
  ref,
  toRaw,
  PropType,
} from "vue";
import { ElTable } from "element-plus";
import {
  uploadPictureColumnType,
  validationSchemaType,
  tableFormDataType,
} from "@/types/common";
import isEmpty from "@/utils/isEmpty";
import { useI18n } from "vue-i18n";
const tableFormColumn = defineAsyncComponent(
  () => import("@/components/partials/tableParts/TableFormColumn.vue")
);
const tableUploadPictureColumn = defineAsyncComponent(
  () => import("@/components/partials/tableParts/TableUploadPictureColumn.vue")
);

export default defineComponent({
  name: "TableComponent",
  emits: ["sendFormData", "pictureOperation"],
  components: {
    tableUploadPictureColumn,
    tableFormColumn,
  },
  props: {
    // данные таблицы
    data: {
      type: Object,
      default: () => ({}),
    },
    // отфильтрованные столбы, если используются фильтры
    filteredColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // ширина столбцов
    width: {
      type: String,
      default: "",
    },
    //кастомная минимальная ширина столбцов
    columnsMinWidth: {
      type: Object,
      default: () => ({}),
    },
    // исключить столбцы
    excludeColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // столбцы редактируемых ячеек
    formColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // максимальная высота таблицы
    maxHeight: {
      type: String,
      default: "auto",
    },
    // размер элементов таблицы
    size: {
      type: String,
      default: "small",
    },
    // перевод заголовков столбцов
    hasColumnTranslate: {
      type: Boolean,
      default: false,
    },
    // столбы загрузки и отображения картинок
    uploadPictureColumns: {
      type: Object as PropType<uploadPictureColumnType>,
      default: () => ({}),
    },
    // столбцы с булевыми значениями
    booleanColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // правила валидации ячеек-форм
    formValidationSchema: {
      type: Object as PropType<validationSchemaType>,
      default: () => ({}),
    },
  },

  setup(props, { emit }) {
    const { t } = useI18n({});
    const tableRef = ref<InstanceType<typeof ElTable>>();

    const isEmptyObj = (obj) => {
      return isEmpty(obj);
    };

    const columns = computed(() => {
      if (props.data.length === 0) {
        return [];
      }
      // использование внешней фильтрации колонок
      if (props.filteredColumns.length > 0) {
        return props.filteredColumns;
      }
      // формируем столбцы
      const columnsArray: string[] = Object.keys(props.data[0]);
      // исключаем лишние столбцы
      const excludeColumnsRaw = toRaw(props.excludeColumns);
      excludeColumnsRaw.forEach((item: string) => {
        let index = columnsArray.indexOf(item);
        if (index !== -1) {
          columnsArray.splice(index, 1);
        }
      });
      return columnsArray;
    });

    const sendFormData = (data: tableFormDataType) => {
      emit("sendFormData", data);
    };

    const pictureOperation = (data) => {
      emit("pictureOperation", data);
    };

    const isUploadPictureColumn = (column: string) => {
      return Object.prototype.hasOwnProperty.call(
        props.uploadPictureColumns,
        column
      );
    };

    const hasColumns = (propsName: string, column: string) => {
      return toRaw(props[propsName]).includes(column);
    };

    const getWidth = (key) => {
      if (isEmpty(props.columnsMinWidth)) {
        return props.width;
      }
      if (Object.prototype.hasOwnProperty.call(props.columnsMinWidth, key)) {
        return props.columnsMinWidth[key];
      }
      return props.width;
    };

    const getText = (text: string | number | object) => {
      if (typeof text === "object" && text !== null) {
        if (Object.values(text).length === 0) {
          return "";
        }
        return text;
      }
      return text;
    };

    const getLabel = (column) => {
      if (!props.hasColumnTranslate) {
        return column;
      }
      return t(`labels.table.${column}`);
    };

    return {
      tableRef,
      isEmptyObj,
      columns,
      getWidth,
      getText,
      getLabel,
      hasColumns,
      isUploadPictureColumn,
      pictureOperation,
      sendFormData,
    };
  },
});
</script>

<style lang="scss" scoped>
.table {
  &__compare {
    display: flex;
    flex-direction: column;
    &-checkbox {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
