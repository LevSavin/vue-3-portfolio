export default {
  // Установить ключ регистрации
  setLang: ({ commit }, lang) => {
    commit("SET_LANG", lang);
  },

  // свернуть / развернуть боковое меню
  setIsAsideCollapsed: ({ commit }, isAsideCollapsed) => {
    commit("SET_IS_ASIDE_COLLAPSED", isAsideCollapsed);
  },

  // флаг - ширина экрана меньше 576px
  setIsMobile: ({ commit }, isMobile) => {
    commit("SET_IS_MOBILE", isMobile);
  },

  // отображать боковое меню
  setShowAside: ({ commit }, showAside) => {
    commit("SET_SHOW_ASIDE", showAside);
  },

  // Сбросить все значения модуля авторизации
  reset: ({ commit }) => {
    commit("RESET");
  },
};
