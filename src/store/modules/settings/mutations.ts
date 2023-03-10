import type { SettingsStateType } from "@/store/modules/settings/types";
import { TMP_STATE } from "@/store/modules/settings/constants";

export default {
  SET_LANG(state: SettingsStateType, lang: string) {
    state.lang = lang;
  },

  SET_IS_MOBILE(state: SettingsStateType, isMobile: boolean) {
    state.isMobile = isMobile;
  },

  RESET(state: SettingsStateType) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};
