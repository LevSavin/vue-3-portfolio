<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-path">
        <rect
          id="bounds"
          width="14"
          height="14"
          transform="translate(1546 988)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Refresh"
      data-name="Icon / Refresh"
      transform="translate(-1546 -988)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M2734.364-47.636a.636.636,0,0,1,.636-.636A5.735,5.735,0,0,0,2740.728-54a5.755,5.755,0,0,0-2.228-4.533v.715a.637.637,0,0,1-.636.636.636.636,0,0,1-.636-.636v-2.228a.636.636,0,0,1,.636-.636h2.227a.637.637,0,0,1,.637.636.637.637,0,0,1-.637.636h-.654A7.023,7.023,0,0,1,2742-54a7.008,7.008,0,0,1-7,7A.636.636,0,0,1,2734.364-47.636Zm-4.454.318a.636.636,0,0,1-.637-.636.636.636,0,0,1,.637-.636h.654A7.022,7.022,0,0,1,2728-54a7.008,7.008,0,0,1,7-7,.637.637,0,0,1,.636.636.636.636,0,0,1-.636.636A5.734,5.734,0,0,0,2729.272-54a5.752,5.752,0,0,0,2.228,4.533v-.715a.636.636,0,0,1,.636-.636.637.637,0,0,1,.636.636v2.228a.636.636,0,0,1-.636.636Z"
        transform="translate(-1182 1049)"
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
  name: "iconRefresh",
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
