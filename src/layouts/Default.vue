<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapper">
        <HeaderComponent></HeaderComponent>
      </el-header>

      <el-container>
        <div class="aside-wrapper">
          <AsideComponent
            :class="{ 'aside-fullscreen': !isShowContent }"
          ></AsideComponent>
        </div>
        <el-main class="main-wrapper" v-show="isShowContent">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import HeaderComponent from "@/components/HeaderComponent.vue";
import AsideComponent from "@/components/AsideComponent.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    HeaderComponent,
    AsideComponent,
  },
  setup() {
    const store = useStore();
    const isMobile = computed(
      (): boolean => store.getters["settings/isMobile"]
    );
    const showAside = computed(
      (): boolean => store.getters["settings/showAside"]
    );
    const isAsideCollapsed = computed(
      (): boolean => store.getters["settings/isAsideCollapsed"]
    );

    const isShowContent = computed(() => {
      if (
        isMobile.value === true &&
        showAside.value === true &&
        !isAsideCollapsed.value
      ) {
        return false;
      }
      return true;
    });

    return {
      isMobile,
      showAside,
      isAsideCollapsed,
      isShowContent,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 14%);
}
.aside-wrapper {
  box-shadow: 3px 1px 18px 0px rgb(48 50 50 / 15%);
  margin-top: 3px;
}
.aside-fullscreen {
  width: 100vw;
  height: calc(100vh - 64px);
}
.main-wrapper {
  padding: 20px;
  display: block;
  flex: 1;
  box-sizing: border-box;
}
</style>
