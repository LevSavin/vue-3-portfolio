<template>
  <component class="content" :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

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
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "Default");
    const isMobile = computed((): string => store.getters["settings/isMobile"]);
    const tablesSettings = computed(
      (): string => store.getters["settings/tablesSettings"]
    );

    // отслеживание ширины экрана мобильника и выставление флага
    const media = window.matchMedia("(max-width:992px)");
    const listener = (e) => {
      store.dispatch("settings/setIsMobile", e.matches);
      store.dispatch("settings/setShowAside", !e.matches);
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
