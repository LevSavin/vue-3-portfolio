<template>
  <component class="content" :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, inject, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { showError } from "@/utils/errorsInterceptor";

import Default from "@/layouts/Default.vue";
import Blank from "@/layouts/Blank.vue";

export default defineComponent({
  name: "app",
  components: {
    Default,
    Blank,
  },
  setup() {
    const store = useStore();
    const lang = computed((): string => store.getters["auth/lang"]);
    const axios: any = inject("axios");
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "Default");
    const isMobile = computed((): string => store.getters["settings/isMobile"]);
    const schemas = computed((): string => store.getters["docs/schemas"]);
    const tablesSettings = computed(
      (): string => store.getters["settings/tablesSettings"]
    );

    const getSchema = () => {
      const url = `/api/docs.json`;
      axios
        .get(url)
        .then(({ data }) => {
          store.dispatch("docs/setSchemas", data.components.schemas);
        })
        .catch((error) => {
          showError(error);
        });
    };
    getSchema();

    // отслеживание ширины экрана мобильника и выставление флага
    const media = window.matchMedia("(max-width:576px)");
    const listener = (e) => {
      store.dispatch("settings/setIsMobile", e.matches);
    };
    listener(media);
    media.addEventListener("change", listener);

    onBeforeUnmount(() => {
      media.removeEventListener("change", listener);
    });

    return {
      lang,
      layout,
      isMobile,
      tablesSettings,
      schemas,
    };
  },
});
</script>

<style lang="scss">
.content {
  display: flex;
  width: 100%;
}
</style>
