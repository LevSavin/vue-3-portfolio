<template>
  <iconsWrapper class="icon" :width="width" :height="height" :viewBox="viewBox">
    <path
      :fill="iconColor"
      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    ></path>
    <path
      :fill="iconColor"
      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    ></path>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconArrowLeft",
  components: {
    iconsWrapper,
  },
  props: {
    iconColor: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: "0 0 1024 1024",
    },
  },
};
</script>

<style scoped>
.icon {
  margin-bottom: 3px;
}
</style>
