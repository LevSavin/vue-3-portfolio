<template>
  <div class="form-page">
    <h1 class="form-page__hero">Динамическая валидация форм</h1>

    <el-form
      ref="formRef"
      :model="form.data"
      :rules="rules"
      label-width="120px"
      label-position="top"
      size="large"
    >
      <div class="form-page__wrapper">
        <div class="form-page__section">
          <div
            class="form-page__block"
            v-for="(field, index) in formFields"
            :key="index"
          >
            <el-form-item
              :ref="field + 'Ref'"
              :prop="field"
              :label="$t(`labels.table.${field}`)"
            >
              <el-input
                v-model="form.data[field]"
                :placeholder="$t(`labels.table.${field}`)"
                @input="onClearErrorField(field)"
              />
            </el-form-item>
          </div>
        </div>
      </div>

      <el-form-item prop="submit">
        <el-divider class="errors__divider"></el-divider>
      </el-form-item>
      <div class="form-page__submit">
        <el-form-item>
          <div>
            <el-button class="btn-plain" size="large" @click="resetForm">
              {{ $t("btns.cancel_changes") }}
            </el-button>
          </div>
          <div class="form-page__submit-btn">
            <el-button
              :disabled="isSubmitDisabled"
              class="btn-primary"
              size="large"
              @click="onSubmitForm"
            >
              {{ $t("btns.save_changes") }}
            </el-button>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, inject, watch } from "vue";
import { useStore } from "vuex";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useForm } from "@/composables/useForm";
import { errorsObjectType } from "@/types/common";
import { errorsInterceptorObject } from "@/utils/errorsInterceptorObject";
import { errorsConst } from "@/constants/common";

type formType = {
  data: any;
  defaultData: any;
  apiUrl: string;
  redirectOnSuccess: string;
  schema: string;
  errors: errorsObjectType;
};

const dataConst = () => ({
  name: null,
  description: null,
});

export default defineComponent({
  name: "TransportationTypeCreate",
  components: {},
  setup() {
    const axios: any = inject("axios");
    const formRef = ref<FormInstance>();
    const { t } = useI18n({});
    const router = useRouter();
    const store = useStore();
    const schemas = computed((): string => store.getters["docs/schemas"]);

    const form: formType = reactive({
      data: dataConst(),
      defaultData: dataConst(),
      apiUrl: "/api/transportation_types",
      schema: "TransportationType",
      redirectOnSuccess: "TransportationType",
      errors: errorsConst,
    });

    const currentSchema = computed(() => {
      return schemas.value[form.schema]?.properties;
    });

    const requiredFields = computed(() => {
      if (schemas.value[form.schema]?.required) {
        return schemas.value[form.schema].required;
      }
      return [];
    });

    const {
      onPrepareRules,
      onClearErrorField,
      onValidate,
      onSubmitForm,
      onGetDirtyData,
      onPrepareTypesData,
    } = useForm(form, formRef, sendData, currentSchema);

    function sendData() {
      if (isSubmitDisabled.value) {
        return;
      }
      const url = `${form.apiUrl}`;
      const params = onPrepareTypesData(onGetDirtyData(), currentSchema.value);
      axios
        .post(url, params)
        .then(() => {
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
          router.push({ name: `${form.redirectOnSuccess}` });
        })
        .catch((error) => {
          form.errors = errorsInterceptorObject(error);
          onValidate();
        });
    }

    let rules = reactive<FormRules>({});

    const setRules = () => {
      const newRules = onPrepareRules(currentSchema.value);
      for (const key in newRules) {
        rules[key] = newRules[key];
      }
    };
    setRules();

    const formFields = computed(() => {
      const fields = Object.keys(form.data);
      const excludeFields = ["id"];
      excludeFields.forEach((item) => {
        const index = fields.indexOf(item);
        if (index !== -1) {
          fields.splice(index, 1);
        }
      });
      return fields;
    });

    const resetForm = () => {
      form.data = JSON.parse(JSON.stringify(form.defaultData));
    };

    watch(
      () => currentSchema.value,
      () => {
        setRules();
      }
    );

    const isFieldValid = (value, field): boolean => {
      if (requiredFields.value.includes(field)) {
        return value === "success";
      }
      return value !== "error";
    };

    const nameRef: any = ref(null);
    const descriptionRef: any = ref(null);

    const isSubmitDisabled = computed(() => {
      if (
        isFieldValid(nameRef.value?.[0]?.validateState, "name") &&
        isFieldValid(descriptionRef.value?.[0]?.validateState, "description")
      ) {
        return false;
      }
      return true;
    });

    return {
      onSubmitForm,
      onClearErrorField,
      formRef,
      form,
      rules,
      isSubmitDisabled,
      formFields,
      resetForm,
      nameRef,
      descriptionRef,
      currentSchema,
      requiredFields,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/dict.scss";
</style>
