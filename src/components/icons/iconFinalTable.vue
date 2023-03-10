<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="Final_Table" data-name="Final Table" transform="translate(0.5 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-15923.206-9366a2.793,2.793,0,0,1-2.794-2.79v-12.414a2.794,2.794,0,0,1,2.794-2.794h12.414a2.794,2.794,0,0,1,2.794,2.794v12.414a2.793,2.793,0,0,1-2.794,2.79Zm5.275-1.862h6.755l-6.755-6.751Zm-6.207-.928a.929.929,0,0,0,.932.928h3.413v-8.065h-4.345Zm14.276-.388v-6.75h-6.754Zm-14.276-12.026v3.413h14.276v-3.413a.931.931,0,0,0-.931-.931h-12.414A.929.929,0,0,0-15924.138-9381.206Z"
        transform="translate(15926 9384)"
        :fill="iconColor"
        stroke="rgba(0,0,0,0)"
        stroke-width="1"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconFinalTable",
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
      default: "0 0 18 18.994",
    },
  },
};
</script>
