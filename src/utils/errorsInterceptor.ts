import errorsInterceptor from "@/utils/errorsInterceptor";

export default function (error: any): string[] {
  if (!error.response?.data) {
    return ["Something went wrong. Please try again."];
  }
  if (typeof error.response.data === "object") {
    if (error.response.data?.title) {
      return [error.response.data.title];
    }
    const result: string[] = [];
    return result;
  } else {
    return ["Something went wrong. Please try again."];
  }
  return [];
}

export function showError(error): void {
  const message = errorsInterceptor(error).join(", ");
  window.ElMessage({
    showClose: true,
    message: message,
    type: "error",
  });
}
