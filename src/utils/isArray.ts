export default function (obj: any): boolean {
  if (typeof obj !== "object") {
    return false;
  }
  return Array.isArray(obj);
}
