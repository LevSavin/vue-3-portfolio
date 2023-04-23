<template>
  <div class="form-page">
    <p class="form-page__description">
      {{ $t("pages.validation_1") }}
    </p>
    <p class="form-page__description">
      {{ $t("pages.validation_2") }}
    </p>
    <p class="form-page__description">
      {{ $t("pages.validation_3") }}
    </p>
    <el-divider class="errors__divider"></el-divider>
    <h1 class="form-page__hero">{{ $t("common.form_dynamic_validation") }}</h1>

    <el-form
      ref="formRef"
      :model="form.data"
      :rules="rules"
      label-width="120px"
      label-position="top"
      size="large"
    >
      <div class="form-page__wrapper">
        <div class="form-page__section-wrapper">
          <h2>{{ $t("common.form.transport") }}</h2>
          <div class="form-page__section">
            <div
              class="form-page__block"
              v-for="(field, index) in fieldsMap.transport"
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

        <div class="form-page__section-wrapper">
          <h2>{{ $t("common.form.counterparty") }}</h2>
          <div class="form-page__section">
            <div
              class="form-page__block"
              v-for="(field, index) in fieldsMap.counterparty"
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

            <div class="form__block">
              <el-tooltip
                placement="right"
                effect="dark"
                :content="passwordText"
                raw-content
              >
                <p class="form__password-help link">
                  <iconHelpInformation></iconHelpInformation>
                  <span class="form-page__password-text">
                    {{ $t("common.pass.requirements") }}
                  </span>
                </p>
              </el-tooltip>
            </div>
          </div>
        </div>

        <el-form-item prop="submit">
          <el-divider class="errors__divider"></el-divider>
        </el-form-item>
        <el-form-item>
          <div class="form-page__submit">
            <el-button class="btn-plain" size="large" @click="resetForm">
              {{ $t("btns.cancel_changes") }}
            </el-button>
            <el-button
              :disabled="isSubmitDisabled"
              class="btn-primary form-page__submit-btn"
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
import { defineComponent, reactive, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import type { FormInstance, FormRules } from "element-plus";
import { useI18n } from "vue-i18n";
import { useForm } from "@/composables/useDynamicForm";
import { errorsObjectType } from "@/types/common";
import { errorsConst } from "@/constants/common";
import json from "@/server/form-page-schema.json";

type formType = {
  data: any;
  defaultData: any;
  schema: string;
  errors: errorsObjectType;
};

const dataConst = () => ({
  name: null,
  maxWeights: null,
  maxPallets: null,
  height: null,
  volume: null,
  email: null,
  password: null,
  phone: null,
  website: null,
});

const fieldsMapConst = () => ({
  transport: ["name", "maxWeights", "maxPallets", "height", "volume"],
  counterparty: ["email", "phone", "password", "website"],
});

export default defineComponent({
  name: "FormValidation",
  components: {},
  setup() {
    const formRef = ref<FormInstance>();
    const { t } = useI18n({});
    const store = useStore();
    const schemas = computed((): string => store.getters["docs/schemas"]);
    const fieldsMap = fieldsMapConst();
    const currentSchema = ref({});

    const form: formType = reactive({
      data: dataConst(),
      defaultData: dataConst(),
      schema: "form-validation",
      errors: errorsConst,
    });

    const getSchema = () => {
      currentSchema.value = json;
    };
    getSchema();

    const requiredFields = computed(() => {
      if (schemas.value[form.schema]?.required) {
        return schemas.value[form.schema].required;
      }
      return [];
    });

    const {
      onPrepareRules,
      onClearErrorField,
      onSubmitForm,
      onGetDirtyData,
      onPrepareTypesData,
    } = useForm(form, formRef, sendData, currentSchema);

    function sendData() {
      if (isSubmitDisabled.value) {
        return;
      }
      const params = onPrepareTypesData(onGetDirtyData(), currentSchema.value);
      console.log(params);
      window.ElMessage({
        showClose: true,
        message: t("common.messages.succcess"),
        type: "success",
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

    const passwordText = computed(() => {
      const result = `
        <p class='text-white'>${t("common.pass.title")}<p>
        <p class='text-white'>${t("common.pass.require_1")}</p>
        <p class='text-white'>${t("common.pass.require_2")}</p>
        <p class='text-white'>${t("common.pass.require_3")}</p>
        <p class='text-white'>${t("common.pass.require_4")}</p>
      `;
      return result;
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
    const maxWeightsRef: any = ref(null);
    const maxPalletsRef: any = ref(null);
    const heightRef: any = ref(null);
    const volumeRef: any = ref(null);
    const emailRef: any = ref(null);
    const passwordRef: any = ref(null);
    const phoneRef: any = ref(null);
    const websiteRef: any = ref(null);

    const isSubmitDisabled = computed(() => {
      if (
        isFieldValid(nameRef.value?.[0]?.validateState, "name") &&
        isFieldValid(maxWeightsRef.value?.[0]?.validateState, "maxWeights") &&
        isFieldValid(maxPalletsRef.value?.[0]?.validateState, "maxPallets") &&
        isFieldValid(heightRef.value?.[0]?.validateState, "height") &&
        isFieldValid(volumeRef.value?.[0]?.validateState, "volume") &&
        isFieldValid(emailRef.value?.[0]?.validateState, "email") &&
        isFieldValid(passwordRef.value?.[0]?.validateState, "password") &&
        isFieldValid(phoneRef.value?.[0]?.validateState, "phone") &&
        isFieldValid(websiteRef.value?.[0]?.validateState, "website")
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
      resetForm,
      nameRef,
      maxWeightsRef,
      maxPalletsRef,
      heightRef,
      volumeRef,
      emailRef,
      passwordRef,
      phoneRef,
      websiteRef,
      currentSchema,
      requiredFields,
      schemas,
      fieldsMap,
      passwordText,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/dict.scss";
</style>
