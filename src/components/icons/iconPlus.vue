<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox" class="icon">
    <rect id="bounds" width="16" height="16" fill="none" />
    <path
      id="Icon"
      d="M-11694-13148v-5h-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h5v-5a1,1,0,0,1,1-1,1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1,1,1,0,0,1-1,1h-5v5a1,1,0,0,1-1,1A1,1,0,0,1-11694-13148Z"
      transform="translate(11701 13162)"
      :fill="iconColor"
      stroke="rgba(0,0,0,0)"
      stroke-width="1"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconPlus",
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
      default: 14,
    },
    height: {
      type: [Number, String],
      default: 14,
    },
    viewBox: {
      type: String,
      default: "0 0 16 16",
    },
  },
};
</script>
