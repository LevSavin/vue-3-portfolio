export default {
  // Установить ключ регистрации
  setLang: ({ commit }, lang) => {
    commit("SET_LANG", lang);
  },

  // флаг - ширина экрана меньше 576px
  setIsMobile: ({ commit }, isMobile) => {
    commit("SET_IS_MOBILE", isMobile);
  },

  // Сбросить все значения модуля авторизации
  reset: ({ commit }) => {
    commit("RESET");
  },
};
