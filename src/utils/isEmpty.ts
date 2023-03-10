// проверка объекта на наличие ключей
export default function (obj: any): boolean {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}
