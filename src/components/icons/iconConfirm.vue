<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    class="icon-class"
  >
    <defs>
      <clipPath id="clip-pathiconCheck">
        <rect
          id="bounds"
          width="14"
          height="14"
          transform="translate(1670 1028)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Confirm"
      data-name="Icon / Confirm"
      transform="translate(-1670 -1028)"
      clip-path="url(#clip-path)iconCheck"
    >
      <path
        id="Icon"
        d="M2728-54a7,7,0,0,1,7-7,7,7,0,0,1,7,7,7,7,0,0,1-7,7A7,7,0,0,1,2728-54Zm1.114,0A5.886,5.886,0,0,0,2735-48.115,5.891,5.891,0,0,0,2740.885-54,5.886,5.886,0,0,0,2735-59.885,5.886,5.886,0,0,0,2729.114-54Zm4.4,2.562-1.883-1.867a.633.633,0,0,1-.186-.449.637.637,0,0,1,.186-.45.63.63,0,0,1,.448-.185.631.631,0,0,1,.45.185l1.433,1.433,3.5-3.513a.629.629,0,0,1,.448-.184.628.628,0,0,1,.448.184.629.629,0,0,1,.186.448.633.633,0,0,1-.186.45l-3.947,3.947a.628.628,0,0,1-.209.139.633.633,0,0,1-.24.048A.629.629,0,0,1,2733.516-51.438Z"
        transform="translate(-1058 1089)"
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
  name: "iconCheck",
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

<style scoped>
.icon-class {
  margin-bottom: 2px;
}
</style>
