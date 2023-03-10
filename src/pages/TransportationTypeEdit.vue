<template>
  <div class="form-page">
    <h1 class="form-page__hero">Редактировать тип транспортировки</h1>

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
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import type { FormInstance, FormRules } from "element-plus";
import { useI18n } from "vue-i18n";
import { useForm } from "@/composables/useForm";
import { errorsObjectType } from "@/types/common";
import { errorsInterceptorObject } from "@/utils/errorsInterceptorObject";
import { errorsConst } from "@/constants/common";
import { showError } from "@/utils/errorsInterceptor";

type formType = {
  data: any;
  defaultData: any;
  apiUrl: string;
  schema: string;
  errors: errorsObjectType;
};

const dataConst = () => ({
  name: null,
  description: null,
});

export default defineComponent({
  name: "TransportationTypeEdit",
  components: {},
  setup() {
    const axios: any = inject("axios");
    const { t } = useI18n({});
    const formRef = ref<FormInstance>();
    const route = useRoute();
    const id = route.params.id;
    const store = useStore();
    const schemas = computed(() => store.getters["docs/schemas"]);

    const form: formType = reactive({
      data: dataConst(),
      defaultData: dataConst(),
      apiUrl: "/api/transportation_types/",
      schema: "TransportationType",
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

    const getData = () => {
      const url = `${form.apiUrl}${id}`;
      axios
        .get(url)
        .then(({ data }) => {
          for (const key in data) {
            form.data[key] = JSON.parse(JSON.stringify(data[key]));
            form.defaultData[key] = JSON.parse(JSON.stringify(data[key]));
          }
          onValidate();
        })
        .catch((error) => {
          showError(error);
        });
    };
    getData();

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

    function sendData() {
      if (isSubmitDisabled.value) {
        return;
      }
      const url = `${form.apiUrl}${id}`;
      const params = onPrepareTypesData(onGetDirtyData(), currentSchema.value);
      axios
        .patch(url, params)
        .then(() => {
          form.defaultData = JSON.parse(JSON.stringify(form.data));
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
        })
        .catch((error) => {
          form.errors = errorsInterceptorObject(error);
          onValidate();
        });
    }

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
      resetForm,
      isSubmitDisabled,
      formFields,
      nameRef,
      descriptionRef,
      id,
      schemas,
      currentSchema,
      requiredFields,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/dict.scss";
</style>
