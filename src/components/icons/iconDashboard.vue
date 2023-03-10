<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconDashboard">
        <rect id="bounds" width="18" height="18" fill="none" />
      </clipPath>
    </defs>
    <g
      id="Icon_Dashboard"
      data-name="Icon / Dashboard"
      clip-path="url(#clip-pathiconDashboard)"
    >
      <path
        id="icon"
        d="M3.611,16A3.615,3.615,0,0,1,0,12.389V3.611A3.616,3.616,0,0,1,3.611,0h8.777A3.615,3.615,0,0,1,16,3.611v8.779A3.614,3.614,0,0,1,12.388,16Zm1.913-1.8h6.864A1.814,1.814,0,0,0,14.2,12.389V6.875H5.523ZM1.8,3.611v8.779A1.816,1.816,0,0,0,3.611,14.2h.116V1.8H3.611A1.818,1.818,0,0,0,1.8,3.611ZM5.523,5.08H14.2V3.611A1.816,1.816,0,0,0,12.388,1.8H5.523Z"
        transform="translate(1 1)"
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
  name: "iconDashboard",
  components: {
    iconsWrapper,
  },
  props: {
    id: {
      type: String,
      default: "iconDashboard",
    },
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
      default: "0 0 18 18",
    },
  },
};
</script>
