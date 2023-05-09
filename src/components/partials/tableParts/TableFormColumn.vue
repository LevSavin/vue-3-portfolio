<template>
  <el-form
    @submit.prevent="onSubmitForm"
    class="form table-form-column"
    ref="formRef"
    :model="form.data"
    :rules="rules"
    label-width="120px"
    label-position="top"
    size="large"
  >
    <div
      v-if="!isFiledEditable && columnName === 'and_or'"
      @click="editField"
      class="form__text-wrapper"
    >
      {{ data[columnName] ? $t(`labels.${data[columnName]}`) : "" }}
    </div>

    <div
      v-else-if="!isFiledEditable"
      @click="editField"
      class="form__text-wrapper"
    >
      {{ data[columnName] }}
    </div>

    <div v-else-if="isFiledEditable">
      <el-form-item
        ref="columnFieldRef"
        prop="columnField"
        v-show="isShowTextarea"
      >
        <el-radio-group
          v-if="columnName === 'and_or'"
          ref="inputRef"
          class="form__radio"
          v-model="form.data.columnField"
          @change="sendData"
          @input="handleInput"
          @focusout="hideInput"
          @keyup.enter.prevent
        >
          <el-radio label="and">{{ $t("labels.and") }}</el-radio>
          <el-radio label="or">{{ $t("labels.or") }}</el-radio>
        </el-radio-group>
        <el-input
          v-else
          ref="inputRef"
          v-model="form.data.columnField"
          @change="sendData"
          @input="handleInput"
          @focusout="hideInput"
          @keyup.enter.prevent
          class="input__transparent form__input"
        />
        <span v-if="errorMessage" class="form__error">
          {{ errorMessage }}
        </span>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  reactive,
  watch,
  onMounted,
  PropType,
  nextTick,
} from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useForm } from "@/composables/useDynamicForm";
import { errorsObjectType } from "@/types/common";
import { validationSchemaType } from "@/types/common";
import { errorsConst } from "@/constants/common";
import { useI18n } from "vue-i18n";

type formType = {
  data: any;
  defaultData: any;
  errors: errorsObjectType;
};

const dataConst = () => ({
  columnField: null,
});

export default defineComponent({
  name: "TableFormColumn",
  emits: ["sendFormData"],
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    columnName: {
      type: String,
      default: "",
    },
    // правила валидации ячеек-форм
    formValidationSchema: {
      type: Object as PropType<validationSchemaType>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n({});
    const formRef = ref<FormInstance>();
    const isFiledEditable = ref<boolean>(false);
    const errorMessage = ref<string | null>(null);

    const form: formType = reactive({
      data: dataConst(),
      defaultData: dataConst(),
      errors: errorsConst,
    });

    const currentSchema = computed(() => {
      if (props.formValidationSchema[props.columnName]) {
        return {
          columnField: props.formValidationSchema[props.columnName],
        };
      }
      return {};
    });

    const {
      onPrepareRules,
      onClearErrorField,
      onSubmitForm,
      onPrepareTypesData,
    } = useForm(form, formRef, sendData, currentSchema);

    let rules = reactive<FormRules>({});

    const setRules = () => {
      const newRules = onPrepareRules(currentSchema.value);
      for (const key in newRules) {
        rules[key] = newRules[key];
      }
    };
    onMounted(() => {
      setRules();
    });

    const editField = () => {
      if (!form.data.columnField) {
        form.data.columnField = props.data[props.columnName];
      }
      isFiledEditable.value = true;
      nextTick(() => {
        if (props.columnName !== "and_or") {
          inputRef.value.focus();
        }
      });
    };

    const handleInput = async () => {
      onClearErrorField("columnField");
      if (!formRef.value) return;
      await formRef.value.validate((valid) => {
        if (!valid) {
          errorMessage.value = t("labels.error_data");
        } else {
          errorMessage.value = null;
        }
        if (!inputRef.value) {
          errorMessage.value = null;
        }
      });
    };

    async function sendData() {
      if (!formRef.value) return;
      await formRef.value.validate((valid) => {
        if (valid) {
          const val = onPrepareTypesData(form.data, currentSchema.value);
          const data = {
            value: val.columnField,
            columnName: props.columnName,
            rowData: props.data,
          };
          emit("sendFormData", Object.assign({}, data));
          form.defaultData = Object.assign({}, form.data);
          isFiledEditable.value = false;
        } else {
          resetForm();
        }
      });
    }

    const hideInput = () => {
      isFiledEditable.value = false;
      errorMessage.value = null;
    };

    const resetForm = () => {
      form.data = Object.assign({}, form.defaultData);
    };

    watch(
      () => currentSchema.value,
      () => {
        setRules();
      }
    );

    const isShowTextarea = computed(() => {
      if (isFiledEditable.value === false) {
        return false;
      }
      return true;
    });

    const columnFieldRef: any = ref(null);
    const inputRef: any = ref(null);

    return {
      formRef,
      onSubmitForm,
      onClearErrorField,
      isFiledEditable,
      isShowTextarea,
      editField,
      form,
      currentSchema,
      rules,
      columnFieldRef,
      sendData,
      inputRef,
      errorMessage,
      handleInput,
      hideInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  height: 100%;
  min-height: 46px;
  &__text-wrapper {
    cursor: text;
    display: flex;
    align-items: center;
    min-height: 46px;
  }
  &__icon-wrap {
    display: flex;
  }
  &__icon {
    margin-right: 8px;
    margin-bottom: 0px !important;
    margin-top: 3px;
  }
  &__input {
    font-size: 13px;
    min-height: 45px;
    margin-top: 1px;
  }
  &__error {
    color: $el-color-red;
    font-size: 12px;
    line-height: 12px;
    padding-top: 4px;
  }
}
.table-form-column {
  box-shadow: inset 0px -1px 2px 0px rgba(0, 0, 0, 0.1);
  padding-left: 12px;
  border-radius: 5px;
  height: 100%;
  & .el-form-item--large {
    margin-bottom: 0px !important;
  }
  & .el-form-item__error {
    display: none;
  }
}
</style>
