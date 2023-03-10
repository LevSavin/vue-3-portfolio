import type { errorsObjectType } from "@/types/common";
import isEmpty from "@/utils/isEmpty";
import { toRaw } from "vue";

export function errorsInterceptorObject(error: any): errorsObjectType {
  const answer: errorsObjectType = {
    non_field_errors: [],
  };
  //истёк таймаут или нет такого роута
  if (!error.response?.data) {
    answer.non_field_errors.push("Something went wrong. Please try again.");
    return answer;
  }
  // есть тело ошибки
  if (typeof error.response.data === "object") {
    // если тело ошибки - массив ошибок
    if (error.response.data?.length > 0) {
      return { non_field_errors: [error.response.data] };
    }
    // если тело ошибки - объект (значения которого могут быть массивами ошибок)
    const tmp = toRaw(error.response.data);
    for (const key in tmp) {
      if (tmp[key] === undefined) {
        answer["non_field_errors"] = [tmp[key]];
      }
      answer[key] = tmp[key];
    }
    if (Object.prototype.hasOwnProperty.call(error.response.data, "error")) {
      if (typeof error.response.data.error === "string") {
        answer["non_field_errors"] = [error.response.data.error];
      }
    }
    return answer;
  } else {
    answer.non_field_errors.push("Something went wrong. Please try again.");
    return answer;
  }
}

export function hasErrors(errorsProxy): boolean {
  const errors = toRaw(errorsProxy);
  if (errors.non_field_errors.length > 0) {
    return true;
  }
  const answer = {};
  for (const key in errors) {
    if (key !== "non_field_errors") {
      answer[key] = errors[key];
    }
  }
  return !isEmpty(answer);
}
