<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Filter" transform="translate(0 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon_"
        data-name="Icon "
        d="M-15844.891-9366a1.227,1.227,0,0,1-.486-.107l-4.222-1.818a1.281,1.281,0,0,1-.78-1.2v-6.7a.3.3,0,0,0-.063-.2l-4.242-5.516a1.558,1.558,0,0,1-.167-1.6,1.472,1.472,0,0,1,1.329-.855h13.04a1.474,1.474,0,0,1,1.329.855,1.515,1.515,0,0,1-.171,1.6l-4.242,5.516a.388.388,0,0,0-.06.2v8.516a1.309,1.309,0,0,1-.572,1.095A1.129,1.129,0,0,1-15844.891-9366Zm-4.223-11.122a2.2,2.2,0,0,1,.422,1.293v6.391l3.375,1.449v-7.84a2.139,2.139,0,0,1,.426-1.293l3.943-5.125h-12.109Z"
        transform="translate(15856 9384)"
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
  name: "iconFilter",
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
      default: "0 0 18 19",
    },
  },
};
</script>
