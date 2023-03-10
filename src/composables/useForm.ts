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

  // поле без дополнительных проверок
  const onSkipValidate = (rule: any, value: any, callback: any) => {
    callback();
  };

  // проверка на наличие ошибок серверной валидации
  const onValidateInternalErrors = (rule: any, value: any, callback: any) => {
    if (form.errors?.[rule.field]) {
      callback(new Error(form.errors[rule.field].join(", ")));
      return;
    }
    callback();
  };

  // проверка на наличие значения
  const onValidateRequired = (rule: any, value: any, callback: any) => {
    if (value === "" || value === null || value === undefined) {
      callback(new Error("Поле не может быть пустым"));
      return;
    }
    callback();
  };

  const onValidateForbiddenChars = (rule: any, value: any, callback: any) => {
    if (isForbiddenChars(String(value))) {
      callback(new Error("Введены недопустимые символы"));
      return;
    }
    callback();
  };

  // проверка на числа с плавающей точкой
  const onValidateNumber = (rule: any, value: any, callback: any) => {
    // если поле пустое, то пропускаем проверки
    if (value === "" || value === null) {
      callback();
      return;
    }
    // проверка на корректность данных
    const integerValid = isNumber(String(value));
    if (!integerValid) {
      callback(new Error("Введите число"));
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
      callback(new Error("Введите целое число"));
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
      callback(new Error("Некорректный e-mail"));
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
      callback(new Error("Пароль не соответствует требованиям"));
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
      callback(new Error("Некорректный номер телефона"));
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
      callback(new Error(t("Некорректный url")));
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
    if (String(value).length > schema.value[rule.field].maxLength) {
      callback(
        new Error(
          `Максимальная длина ${schema.value[rule.field].maxLength} символов`
        )
      );
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
    if (value < schema.value[rule.field].minimum) {
      callback(
        new Error(`Минимальное значение ${schema.value[rule.field].minimum}`)
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
    if (value > Math.ceil(schema.value[rule.field].maximum)) {
      callback(
        new Error(`Максимальное значение ${schema.value[rule.field].maximum}`)
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
      if (typeof newData[key] !== schema[key].type) {
        if (schema[key].type === "number" || schema[key].type === "integer") {
          newData[key] = +newData[key];
        }
        if (schema[key].type === "string") {
          newData[key] = newData[key].toString();
        }
      }
    }
    return newData;
  };

  const typesValidationMap = {
    string: onSkipValidate,
    number: onValidateNumber,
    integer: onValidateInteger,
  };

  const validationMap = {
    email: onValidateEmail,
    password: onValidatePass,
    phone: onValidatePhone,
    url: onValidateUrl,
    maxLength: onValidateMaxLength,
    minimum: onValidateMinimum,
    maximum: onValidateMaximum,
    type: typesValidationMap,
  };

  const onPrepareRules = (schema): FormRules => {
    // формируем схему без лищних полей
    const filteredSchema = {};
    for (const key in schema) {
      if (!schema[key].readOnly) {
        filteredSchema[key] = schema[key];
      }
    }

    const result = {
      submit: [
        {
          validator: onValidateSubmit,
          trigger: "change",
        },
      ],
    };
    for (const key in filteredSchema) {
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
      if (filteredSchema[key].required) {
        result[key].push({
          required: true,
          validator: onValidateRequired,
          trigger: "change",
        });
      }
      // формирование дополнительных проверок
      for (const schemaKey in filteredSchema[key]) {
        // проверка типа поля, если задано
        if (schemaKey === "type") {
          result[key].push({
            validator: validationMap.type[filteredSchema[key].type],
            trigger: "change",
          });
        } else if (validationMap[schemaKey]) {
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
    onSkipValidate,
    onValidateRequired,
    onValidateNumber,
    onValidateInteger,
    onValidateEmail,
    onValidatePass,
    onValidatePhone,
    onValidateUrl,
    onValidateMaxLength,
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
