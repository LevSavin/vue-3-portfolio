<template>
  <div>
    <slot :data="filteredData" :filteredColumns="filteredColumns"></slot>

    <tableFilterColumnsModal
      @setFilteredColumns="setFilteredColumns"
      :columns="columns"
      :filterColumnsPreset="filterColumnsСomputedPreset"
      ref="filterColumnsModalRef"
      apiUrl="/tech-task/manager/task/"
    ></tableFilterColumnsModal>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watch,
  computed,
  toRaw,
  PropType,
  inject,
} from "vue";
import { useStore } from "vuex";
import tableFilterColumnsModal from "@/components/Partials/tableParts/TableColumnsFilterModal.vue";
import { showError } from "@/utils/errorsInterceptor";
import { tablesSettingsType, tablesSettingsItemType } from "@/types/common";

export default defineComponent({
  // Компонент для фильтрации данных в таблице
  name: "TableFilter",
  emits: [],
  components: { tableFilterColumnsModal },
  props: {
    // данные таблицы
    tableName: {
      type: String,
      default: null,
    },
    // данные таблицы
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    // пресет колонок
    filterColumnsPreset: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // искусственная пагинация, когда все данные получены заранее. Для скорости отрисовки таблиц
    useVirtualPagination: {
      type: Boolean,
      default: false,
    },
    // количество элементов на 1 страницу
    page_size: {
      type: Number,
      default: 100,
    },
    // текущая страница
    page: {
      type: Number,
      default: 1,
    },
    // исключить столбцы
    excludeColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    useColumnsSortingPreset: {
      type: Boolean,
      default: false,
    },
    // эти столбцы всегда в начале (если таблица Reverse, то это строки)
    sortingColumnsPreset: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // столбцы, закреплённые пользователем (если таблица Reverse, то это строки)
    pinnedColumns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // строки, закреплённые пользователем (если таблица Reverse, то это столбцы)
    pinnedData: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },

  setup(props) {
    const axios: any = inject("axios");
    const store = useStore();
    const filteredData = ref<any[]>([]);
    let filteredColumns = ref<string[]>([]);
    const tablesSettings = computed(
      (): tablesSettingsType => store.getters["Settings/tablesSettings"]
    );

    // колонки по данным, которые приходят с сервера
    const columns = computed(() => {
      if (props.data.length === 0) {
        return [];
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

    const showColumnsFilter = () => {
      filterColumnsModalRef.value.showModal();
    };

    // выставление колонок пользователем из модального окна
    const setFilteredColumns = (data: string[]) => {
      // меняем колонки непосредственно в таблице
      filteredColumns.value = sortColumns(data);
      // сохраняем настройки в БД
      if (props.tableName) {
        saveFilteredColumns(prepareDataFilterdColumns(data));
      }
    };

    const prepareDataFilterdColumns = (data): tablesSettingsType => {
      const newTablesSettings: tablesSettingsType = JSON.parse(
        JSON.stringify(tablesSettings.value)
      );
      // проверяем, есть ли настройки для данной таблицы
      const currentTableSettings: tablesSettingsItemType =
        newTablesSettings[props.tableName];
      if (!currentTableSettings) {
        // если таких настрек нет, то создаём их
        newTablesSettings[props.tableName] = { columns: [] };
      }
      if (!newTablesSettings[props.tableName]["columns"]) {
        newTablesSettings[props.tableName]["columns"] = [];
      }
      newTablesSettings[props.tableName]["columns"] = data;
      return newTablesSettings;
    };

    const saveFilteredColumns = (data) => {
      const url = `/settings/front/tables-settings/`;
      axios
        .patch(url, { payload: data })
        .then(({ data }) => {
          store.dispatch("Settings/setTablesSettings", data.payload);
        })
        .catch((error) => {
          showError(error);
        });
    };

    const setFilteredData = () => {
      let result = props.data;
      // применение виртуальной пагинации
      if (props.useVirtualPagination) {
        result = setDataByPagination(result);
      }
      // если есть закреплённые колонки, то убираем их из данных, чтобы не задублировались
      if (props.pinnedData.length > 0) {
        props.pinnedData.forEach((pinnedData) => {
          const index = result.indexOf(pinnedData);
          if (index !== -1) {
            result.splice(index, 1);
          }
        });
      }
      // сначала закреплённые колонки, затем колонки, отфильтрованные пагинацией, если она применялась
      filteredData.value = [...props.pinnedData, ...result];
    };

    const setDataByPagination = (result) => {
      const firstIndex = props.page * props.page_size - props.page_size;
      let lastIndex = props.page * props.page_size;
      if (lastIndex > count.value) {
        lastIndex = count.value;
      }
      return result.slice(firstIndex, lastIndex);
    };

    const filterColumnsСomputedPreset = computed(() => {
      if (
        props.tableName &&
        Object.prototype.hasOwnProperty.call(
          tablesSettings.value,
          props.tableName
        )
      ) {
        return tablesSettings.value[props.tableName].columns;
      }
      return props.filterColumnsPreset;
    });

    const count = computed(() => {
      return props.data.length;
    });

    const setColumns = () => {
      let result = columns.value;
      // включение/отключение колонок в зависимости от пресета фильтра
      if (filterColumnsСomputedPreset.value.length > 0) {
        result = [];
        columns.value.forEach((column) => {
          if (filterColumnsСomputedPreset.value.includes(column)) {
            result.push(column);
          }
        });
      }
      if (props.useColumnsSortingPreset) {
        result = sortColumns(result);
      }
      filteredColumns.value = result;
    };

    const sortColumns = (filter) => {
      // определяем, какие из пресета сортировки есть после фильтрации
      const sortingColumnsByPreset: string[] = [];
      props.sortingColumnsPreset.forEach((sortColumnName) => {
        if (filter.includes(sortColumnName)) {
          sortingColumnsByPreset.push(sortColumnName);
        }
      });
      // выставляем колонки, закреплённые пользователем из тех, которые остались после фильтрации
      const pinnedColumns: string[] = [];
      props.pinnedColumns.forEach((pinnedColumnName) => {
        if (filter.includes(pinnedColumnName)) {
          pinnedColumns.push(pinnedColumnName);
        }
      });
      // определяем, какие колонки из отфильтрованных остались
      const otherColumns = [...filter];
      const excludeFields = [...sortingColumnsByPreset, ...pinnedColumns];
      excludeFields.forEach((item) => {
        const index = otherColumns.indexOf(item);
        if (index !== -1) {
          otherColumns.splice(index, 1);
        }
      });
      // сначала столбцы жёстко заданного пресета, потом выбранные пользователем, потом все остальные
      return [...sortingColumnsByPreset, ...pinnedColumns, ...otherColumns];
    };

    onMounted(() => {
      setFilteredData();
      setColumns();
    });

    watch(
      () => props.data,
      () => {
        setFilteredData();
        setColumns();
      }
    );

    // выставление сохранённых настроек колонок
    watch(
      () => filterColumnsСomputedPreset.value,
      () => {
        setColumns();
      }
    );

    // изменение закреплённых колонок (Reverse - строк)
    watch(props.pinnedColumns, () => {
      setFilteredData();
      filteredColumns.value = sortColumns(filteredColumns.value);
    });

    // изменение закреплённых строк (Reverse - колонок)
    watch(props.pinnedData, () => {
      setFilteredData();
    });

    watch(
      () => props.page_size,
      () => {
        setFilteredData();
      }
    );

    watch(
      () => props.page,
      () => {
        setFilteredData();
      }
    );

    const filterColumnsModalRef: any = ref(null);

    return {
      filteredData,
      count,
      filterColumnsModalRef,
      showColumnsFilter,
      columns,
      filteredColumns,
      setFilteredColumns,
      tablesSettings,
      filterColumnsСomputedPreset,
    };
  },
});
</script>

<style lang="scss" scoped></style>
