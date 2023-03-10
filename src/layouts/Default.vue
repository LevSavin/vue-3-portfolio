<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapper">
        <HeaderComponent></HeaderComponent>
      </el-header>

      <el-container>
        <el-main class="main-wrapper">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    HeaderComponent,
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  margin-left: -8px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 14%);
}
.main-wrapper {
  padding: 20px;
  display: block;
  flex: 1;
  box-sizing: border-box;
}
</style>
