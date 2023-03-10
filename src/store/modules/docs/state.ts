import { TMP_STATE } from "@/store/modules/docs/constants";
import type { docsStateType } from "@/store/modules/docs/types";

export default (): docsStateType => ({ ...TMP_STATE });
