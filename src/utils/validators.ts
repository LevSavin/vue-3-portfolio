const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9А-ЯЁа-яё]+\.)+[a-zA-ZА-ЯЁа-яё]{2,}))$/;

const phoneRegex = /^.?.?.?.?\d{3}.?.?\d{3}.?.?.?\d{2}.?.?.?\d{2}$/;

const urlRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

const integerRegex = /^\d+$/;

// eslint-disable-next-line
const numberRegex = /^\d+(?:[\.]\d+)?$/;

const forbiddenChars = /[<>|!#&]/;

const passwordRegex = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
/* Пароль должен содержать:
6 и более символов
прописные латинские буквы
строчные латинские буквы
цифры */

export const isEmail = (val: string) => {
  return emailRegEx.test(val);
};

export const isPasswordCorrect = (val: string) => {
  return passwordRegex.test(val);
};

//целые числа
export const isInteger = (val: string) => {
  return integerRegex.test(val);
};

//целые числа + с плавающей точкой
export const isNumber = (val: string) => {
  return numberRegex.test(val);
};

export const isPhoneCorrect = (val: string) => {
  return phoneRegex.test(val);
};

export const isUrlCorrect = (val: string) => {
  return urlRegex.test(val);
};

export const isForbiddenChars = (val) => {
  return forbiddenChars.test(val);
};
