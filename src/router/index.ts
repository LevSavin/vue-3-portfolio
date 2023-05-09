import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "About",
      component: () => import("@/pages/About.vue"),
    },
    {
      path: "/dynamic-validation",
      name: "FormValidation",
      component: () => import("@/pages/FormValidation.vue"),
    },
    {
      path: "/editable-dynamic-table",
      name: "EditableDynamicTable",
      component: () => import("@/pages/EditableDynamicTable.vue"),
    },
  ],
});

export default router;
