<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="Delete" transform="translate(0 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-11695.744-13144a2.177,2.177,0,0,1-1.479-.571,2.191,2.191,0,0,1-.7-1.424l-.767-9.394h-.531a.792.792,0,0,1-.779-.8v-1.609a2.174,2.174,0,0,1,2.173-2.173h2.19v-.2a1.829,1.829,0,0,1,1.826-1.827h3.118a1.835,1.835,0,0,1,1.837,1.827v.2h2.362a2.165,2.165,0,0,1,2.18,2.177v1.608a.793.793,0,0,1-.783.8h-.717l-.766,9.391a2.16,2.16,0,0,1-.7,1.421,2.157,2.157,0,0,1-1.479.574Zm-.6-2.13a.593.593,0,0,0,.6.548h6.99a.6.6,0,0,0,.6-.548l.753-9.259h-9.7Zm-2.075-11.671v.833h12.526v-.833a.585.585,0,0,0-.595-.591h-11.337A.586.586,0,0,0-11698.42-13157.8Zm4.364-2.371v.2h3.62v-.2a.247.247,0,0,0-.255-.245h-3.118A.241.241,0,0,0-11694.056-13160.173Zm3.468,13.219a.8.8,0,0,1-.739-.835l.37-5.8a.774.774,0,0,1,.267-.545.785.785,0,0,1,.572-.194.79.79,0,0,1,.545.268.79.79,0,0,1,.194.574l-.369,5.794a.786.786,0,0,1-.787.736Zm-3.322,0h-.043a.787.787,0,0,1-.786-.736l-.377-5.794a.8.8,0,0,1,.74-.842.8.8,0,0,1,.574.194.783.783,0,0,1,.268.545l.37,5.794a.791.791,0,0,1-.74.839Z"
        transform="translate(11701 13162)"
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
  name: "iconCopy",
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
      default: "0 0 19.137 19.127",
    },
  },
};
</script>
