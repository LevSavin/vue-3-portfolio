import { TMP_STATE } from "@/store/modules/docs/constants";
import type { docsStateType } from "@/store/modules/docs/types";
import type { objectType } from "@/types/common";

export default {
  SET_SCHEMAS(state: docsStateType, schemas: objectType) {
    state.schemas = schemas;
  },

  SET_PATHS(state: docsStateType, paths: objectType) {
    state.paths = paths;
  },

  RESET(state: docsStateType) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};
