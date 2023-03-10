import docsState from "./modules/docs/state";
import docsActions from "./modules/docs/actions";
import docsMuations from "./modules/docs/mutations";
import docsGetters from "./modules/docs/getters";

import settingsState from "./modules/settings/state";
import settingsActions from "./modules/settings/actions";
import settingsMuations from "./modules/settings/mutations";
import settingsGetters from "./modules/settings/getters";

export default {
  docs: {
    namespaced: true,
    state: docsState,
    actions: docsActions,
    mutations: docsMuations,
    getters: docsGetters,
  },
  settings: {
    namespaced: true,
    state: settingsState,
    actions: settingsActions,
    mutations: settingsMuations,
    getters: settingsGetters,
  },
};
