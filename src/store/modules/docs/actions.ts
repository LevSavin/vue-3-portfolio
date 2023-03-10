export default {
  // данные для форм
  setSchemas: ({ commit }, schemas) => {
    commit("SET_SCHEMAS", schemas);
  },

  // данные для фильтров
  paths: ({ commit }, paths) => {
    commit("SET_PATHS", paths);
  },
};
