import en from "./en";
import ru from "./ru";

export default {
  // @ts-ignore
  legacy: import.meta.env.VITE_I18N_IS_LEGACY === "true" ? true : false,
  locale: "ru",
  fallbackLocale: "en",
  defaultLocale: "ru",
  messages: {
    en,
    ru,
  },
};
