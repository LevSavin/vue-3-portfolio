<template>
  <defaultModal
    ref="modalRef"
    @confirm="submitForm()"
    @close="close"
    modalClass="modal-default"
    :titleText="$t('labels.table_columns_view')"
    :btnCloseText="$t('btns.close')"
    :btnConfirmText="$t('btns.save_close')"
  >
    <el-form
      class="modal__form"
      :model="form.data"
      label-width="120px"
      label-position="top"
      size="large"
    >
      <div class="modal__section">
        <div class="modal__block">
          <div class="modal__switch-wrapper">
            <span class="modal__switch-text">
              {{ $t("labels.table.all_columns") }}
            </span>
            <el-switch
              @change="setAllColumns"
              class="modal__switch"
              v-model="form.allColumns"
            />
          </div>
        </div>
      </div>

      <el-divider class="modal__divider"></el-divider>

      <div class="modal__section">
        <div
          class="modal__block"
          v-for="(field, index) in columns"
          :key="index"
        >
          <div class="modal__switch-wrapper">
            <span class="modal__switch-text">
              {{ $t(`labels.table.${field}`) }}
            </span>
            <el-switch class="modal__switch" v-model="form.data[field]" />
          </div>
        </div>
      </div>
      <div>
        <el-form-item prop="submit"> </el-form-item>
      </div>
    </el-form>
  </defaultModal>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
  PropType,
} from "vue";
import defaultModal from "@/components/Partials/modals/DefaultModal.vue";

type formType = {
  data: object;
  allColumns: boolean | null;
  isAllColumnsInitiated: boolean;
};

export default defineComponent({
  name: "TableColumnsFilterModal",
  emits: ["setFilteredColumns"],
  components: { defaultModal },
  props: {
    // столбцы с данными файлов
    columns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // пресет колонок
    filterColumnsPreset: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    const form: formType = reactive({
      data: {},
      allColumns: null,
      isAllColumnsInitiated: false,
    });

    const submitForm = async () => {
      const result: string[] = [];
      for (const key in form.data) {
        if (form.data[key]) {
          result.push(key);
        }
      }
      emit("setFilteredColumns", result);
    };

    const close = () => {
      modalRef.value.isShow = false;
    };

    // вызывается через ref из вышестоящего компонента
    const showModal = () => {
      modalRef.value.isShow = true;
    };

    const setColumns = () => {
      // инициализация колонок с пресетом
      if (props.filterColumnsPreset.length > 0) {
        props.columns.forEach((column) => {
          if (props.filterColumnsPreset.includes(column)) {
            form.data[column] = true;
          } else {
            form.data[column] = false;
          }
        });
        return;
      }
      // инициализация колонок без пресета
      props.columns.forEach((column) => {
        form.data[column] = true;
      });
    };

    const setAllColumns = (value) => {
      if (form.isAllColumnsInitiated)
        props.columns.forEach((column) => {
          form.data[column] = value;
        });
      form.isAllColumnsInitiated = true;
    };

    onMounted(() => {
      setColumns();
    });

    watch(
      () => props.columns,
      () => {
        setColumns();
      }
    );

    watch(
      () => props.filterColumnsPreset,
      () => {
        setColumns();
      }
    );

    const modalRef: any = ref(null);

    return {
      form,
      close,
      submitForm,
      modalRef,
      showModal,
      setAllColumns,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &__form {
    margin-bottom: -60px;
  }
  &__text {
    word-break: break-word;
    font-size: 14px;
    line-height: 20px;
    margin-top: 0px;
    margin-bottom: 12px;
  }
  &__block {
    width: 100%;
  }
  &__section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 92px;
  }
  &__switch-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__switch {
    display: flex;
    align-items: flex-start;
    margin-left: 8px;
  }
  &__switch-text {
    line-height: 18px;
    word-break: break-all;
    word-break: break-word;
  }
  &__divider {
    margin-top: 8px;
  }
}
</style>
