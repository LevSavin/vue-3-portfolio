<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    src="/images/facebook.png"
  >
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconFacebook",
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
      default: "0 0 16 16",
    },
  },
};
</script>
