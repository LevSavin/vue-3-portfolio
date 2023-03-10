import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18nConfig from "./locale/config";
import { createI18n } from "vue-i18n";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";

import "element-plus/es/components/message/style/css";
import { ElMessage, ElMessageBox } from "element-plus";
window.ElMessage = ElMessage;
window.ElMessageBox = ElMessageBox;

const Vue = createApp(App);

Vue.use(router as any);
Vue.use(store as any);

const i18n = createI18n(i18nConfig);
Vue.use(i18n as any);

Vue.use(VueAxios as any, axios);
Vue.provide("axios", Vue.config.globalProperties.axios);

Vue.mount("#app");
