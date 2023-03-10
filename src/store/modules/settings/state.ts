import { TMP_STATE } from "@/store/modules/settings/constants";
import type { SettingsStateType } from "@/store/modules/settings/types";

export default (): SettingsStateType => ({ ...TMP_STATE });
