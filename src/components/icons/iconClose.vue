<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconClose">
        <rect
          id="bounds"
          width="14"
          height="14"
          transform="translate(1590 1041)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Close"
      data-name="Icon / Close"
      transform="translate(-1590 -1041)"
      clip-path="url(#clip-pathiconClose)"
    >
      <path
        id="Icon"
        d="M.3,11.7a1.018,1.018,0,0,1-.3-.728,1.029,1.029,0,0,1,.3-.736L4.536,6,.3,1.768A1.032,1.032,0,0,1,.3.3,1.033,1.033,0,0,1,1.769.3L6,4.535,10.232.3a1.088,1.088,0,0,1,1.466,0,1.033,1.033,0,0,1,0,1.463L7.465,6,11.7,10.232a1.034,1.034,0,0,1,0,1.466,1.09,1.09,0,0,1-1.463,0L6,7.465,1.769,11.7A1.035,1.035,0,0,1,.3,11.7Z"
        transform="translate(1591 1042)"
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
  name: "iconClose",
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
      default: "0 0 14 14",
    },
  },
};
</script>
