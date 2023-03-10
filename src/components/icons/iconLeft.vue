<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <rect id="bounds" width="14" height="14" fill="none" />
    <path
      id="Icon"
      d="M-15921.756-14287.256a.858.858,0,0,1,.013-1.211l4.536-4.536-4.536-4.537a.863.863,0,0,1,0-1.207.858.858,0,0,1,1.211-.008l5.14,5.145a.853.853,0,0,1,0,1.211l-5.14,5.144-.013.008a.85.85,0,0,1-.6.247A.855.855,0,0,1-15921.756-14287.256Z"
      transform="translate(15925.57 14300)"
      :fill="iconColor"
      stroke="rgba(0,0,0,0)"
      stroke-width="1"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconLeft",
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
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    viewBox: {
      type: String,
      default: "0 0 14 14",
    },
  },
};
</script>
