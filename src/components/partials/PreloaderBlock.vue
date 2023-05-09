<template>
  <div class="preloader-wrapper">
    <preloader class="preloader" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import preloader from "@/components/Partials/Preloader.vue";

export default defineComponent({
  name: "PreloaderBlock",
  components: { preloader },
});
</script>

<style lang="scss" scoped>
.preloader-wrapper {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: -50px;
}
.preloader {
  position: absolute;
  top: 20px;
  right: 50%;
  transform: translate(-50%, 0);
}
</style>
