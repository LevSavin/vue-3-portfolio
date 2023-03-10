<template>
  <div class="preloader-wrapper">
    <div class="preloader">
      <iconPreloader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconPreloader from "@/components/icons/iconPreloader.vue";

export default defineComponent({
  name: "Preloader",
  components: { iconPreloader },
});
</script>

<style lang="scss" scoped>
.preloader-wrapper {
  position: relative;
}
.preloader {
  height: 86px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & svg {
    height: 30px;
  }
}
</style>
