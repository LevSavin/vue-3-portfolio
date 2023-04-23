import { difference } from "lodash";
import { toRaw } from "vue";
import { useI18n } from "vue-i18n";
import { hasErrors } from "@/utils/errorsInterceptorObject";
import { errorsConst } from "@/constants/common";
import {
  isForbiddenChars,
  isEmail,
  isPhoneCorrect,
  isUrlCorrect,
  isPasswordCorrect,
  isInteger,
  isNumber,
} from "@/utils/validators";
import type { FormRules } from "element-plus";

export function useForm(form, formRef, sendData, schema) {
  const { t } = useI18n({});

  // заглушка валидации
  const onSkipValidatation = (rule: any, value: any, callback: any) => {
    callback();
  };

  // проверка на наличие ошибок серверной валидации
  const onValidateInternalErrors = (rule: any, value: any, callback: any) => {
    // здесь происходит распределение ошибок по полям
    if (form.errors?.[rule.field]) {
      callback(new Error(form.errors[rule.field]));
      return;
    }
    callback();
  };

  // проверка на наличие значения
  const onValidateRequired = (rule: any, value: any, callback: any) => {
    if (value === "" || value === null || value === undefined) {
      callback(new Error(t("validation.onValidateRequired")));
      return;
    }
    callback();
  };

  const onValidateForbiddenChars = (rule: any, value: any, callback: any) => {
    if (isForbiddenChars(String(value))) {
      callback(new Error(t("validation.onValidateForbiddenChars")));
      return;
    }
    callback();
  };

  // проверка на числа с плавающей точкой
  const onValidateFloat = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const integerValid = isNumber(String(value));
    if (!integerValid) {
      callback(new Error(t("validation.onValidateNumber")));
      return;
    }
    callback();
  };

  // проверка на целые числа
  const onValidateInteger = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const integerValid = isInteger(String(value));
    if (!integerValid) {
      callback(new Error(t("validation.onValidateInteger")));
      return;
    }
    callback();
  };

  const onValidateEmail = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const emailIsValid = isEmail(String(value).toLowerCase());
    if (!emailIsValid) {
      callback(new Error(t("validation.onValidateEmail")));
      return;
    }
    callback();
  };

  const onValidatePass = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const passValid = isPasswordCorrect(String(value));
    if (!passValid) {
      callback(new Error(t("validation.onValidatePass")));
      return;
    }
    callback();
  };

  const onValidatePhone = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const phoneValid = isPhoneCorrect(String(value));
    if (!phoneValid) {
      callback(new Error(t("validation.onValidatePhone")));
      return;
    }
    callback();
  };

  const onValidateUrl = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const urlIsValid = isUrlCorrect(String(value).toLowerCase());
    if (!urlIsValid) {
      callback(new Error(t("validation.onValidateUrl")));
      return;
    }
    callback();
  };

  const onValidateMaxLength = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    if (String(value).length > schema.value[rule.field].attr.max_length) {
      callback(
        new Error(
          `${t("validation.onValidateMaxLength_1")}
        ${schema.value[rule.field].attr.max_length}
        ${t("validation.onValidateMaxLength_2")}`
        )
      );
      return;
    }
    callback();
  };

  const onValidateMinLength = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    if (String(value).length < schema.value[rule.field].attr.min_length) {
      callback(new Error(t("labels.error_data")));
      return;
    }
    callback();
  };

  const onValidateMaxDigits = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const onlyDigits = value.replace(/[^0-9]/g, "");
    if (String(onlyDigits).length > schema.value[rule.field].attr.max_digits) {
      callback(new Error(t("labels.error_data")));
      return;
    }
    callback();
  };

  const onValidateDecimalPlaces = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const splitedDigit = value.split(".");
    if (
      splitedDigit[1] &&
      String(splitedDigit[1]).length >
        schema.value[rule.field].attr.decimal_places
    ) {
      callback(new Error(t("labels.error_data")));
      return;
    }
    callback();
  };

  const onValidateMinimum = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    if (value < schema.value[rule.field].attr.minimum) {
      callback(
        new Error(`${t("validation.onValidateMinimum")}
        ${schema.value[rule.field].attr.minimum}`)
      );
      return;
    }
    callback();
  };

  const onValidateMaximum = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    if (value > Math.ceil(schema.value[rule.field].attr.maximum)) {
      callback(
        new Error(`${t("validation.onValidateMaximum")}
      ${schema.value[rule.field].attr.maximum}`)
      );
      return;
    }
    callback();
  };

  const onValidateSubmit = (rule: any, value: any, callback: any) => {
    if (hasErrors(form.errors)) {
      const errorsArray = [...form.errors.non_field_errors];
      if (Object.prototype.hasOwnProperty.call(form.errors, "detail")) {
        errorsArray.push(form.errors.detail);
      }
      callback(new Error(toRaw(errorsArray).join(", ")));
      return;
    }
    callback();
  };

  const onClearErrorField = (field: string) => {
    if (form.errors?.[field]) {
      delete form.errors[field];
    }
  };

  const onValidate = () => {
    if (!formRef.value) return;
    formRef.value.validate(() => {
      //
    });
  };

  const onClearErrors = () => {
    form.errors = errorsConst;
    if (!formRef.value) return;
    formRef.value.clearValidate(() => {
      //
    });
  };

  const onSubmitForm = async () => {
    onClearErrors();
    if (!formRef.value) return;
    await formRef.value.validate((valid, fields) => {
      if (valid) {
        sendData();
      } else {
        console.log("error submit!", fields);
      }
    });
  };

  const onResetForm = () => {
    if (!formRef.value) return;
    formRef.value.resetFields();
  };

  // получение полей формы, которые были изменены - сравнение form.data и form.defaultData
  const onGetDirtyData = (): any => {
    if (!Object.prototype.hasOwnProperty.call(form, "defaultData")) {
      return {};
    }
    const result = {};
    for (const key in form.data) {
      const formRaw = toRaw(form.data[key]);
      const defuultFormRaw = toRaw(form.defaultData[key]);
      //сравнение массивов
      if (
        typeof formRaw === "object" &&
        formRaw !== null &&
        !(formRaw instanceof Date) // проверка на дату
      ) {
        if (formRaw?.length !== defuultFormRaw?.length) {
          result[key] = formRaw;
        } else if (difference(formRaw, defuultFormRaw).length > 0) {
          result[key] = formRaw;
        }
        //сравнение примитивов
      } else if (defuultFormRaw !== formRaw) {
        result[key] = formRaw;
      }
    }
    return result;
  };

  const onPrepareTypesData = (data, schema): any => {
    const newData = JSON.parse(JSON.stringify(data));
    for (const key in newData) {
      if (schema[key] && typeof newData[key] !== schema[key].type) {
        if (
          schema[key].type === "DecimalField" ||
          schema[key].type === "IntegerField"
        ) {
          newData[key] = +newData[key];
        }

        if (schema[key].type === "CharField") {
          newData[key] = newData[key].toString();
        }
      }
    }
    return newData;
  };

  const typesValidationMap = {
    CharField: onSkipValidatation,
    DecimalField: onValidateFloat,
    IntegerField: onValidateInteger,
  };

  const validationMap = {
    email: onValidateEmail,
    password: onValidatePass,
    phone: onValidatePhone,
    url: onValidateUrl,
    min_length: onValidateMinLength,
    max_length: onValidateMaxLength,
    max_digits: onValidateMaxDigits,
    decimal_places: onValidateDecimalPlaces,
    minimum: onValidateMinimum,
    maximum: onValidateMaximum,
  };

  const onPrepareRules = (schema): FormRules => {
    const result = {
      submit: [
        {
          validator: onValidateSubmit,
          trigger: "change",
        },
      ],
    };
    for (const key in schema) {
      // набор проверок по умолчанию
      result[key] = [
        {
          validator: onValidateInternalErrors,
          trigger: "change",
        },
        {
          validator: onValidateForbiddenChars,
          trigger: "change",
        },
      ];
      // доп. проверка если поле обязательное
      if (schema[key].attr.required) {
        result[key].push({
          required: true,
          validator: onValidateRequired,
          trigger: "change",
        });
      }
      // формирование дополнительных проверок

      // проверка типа поля, если задано
      if (typesValidationMap[schema[key].type]) {
        result[key].push({
          validator: typesValidationMap[schema[key].type],
          trigger: "change",
        });
      }
      for (const schemaKey in schema[key].attr) {
        if (validationMap[schemaKey]) {
          // прочие проверки, если есть
          result[key].push({
            validator: validationMap[schemaKey],
            trigger: "change",
          });
        }
      }
    }
    return result;
  };

  return {
    onSkipValidatation,
    onValidateRequired,
    onValidateFloat,
    onValidateInteger,
    onValidateEmail,
    onValidatePass,
    onValidatePhone,
    onValidateUrl,
    onValidateMaxLength,
    onValidateMaxDigits,
    onValidateMinimum,
    onValidateMaximum,
    onValidateSubmit,
    onClearErrorField,
    onValidate,
    onClearErrors,
    onSubmitForm,
    onResetForm,
    onGetDirtyData,
    onPrepareTypesData,
    onPrepareRules,
  };
}
