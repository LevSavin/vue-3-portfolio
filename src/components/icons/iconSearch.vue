<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="Search" transform="translate(0.498 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-15908.928-14282a.9.9,0,0,1-.663-.264l-3.47-3.469a7.894,7.894,0,0,1-4.944,1.727,8,8,0,0,1-7.993-7.748v-.5a7.983,7.983,0,0,1,7.974-7.744,8,8,0,0,1,8,7.994,7.974,7.974,0,0,1-1.727,4.948l3.489,3.466a.919.919,0,0,1,.264.551v.21a.977.977,0,0,1-.264.565A.985.985,0,0,1-15908.928-14282Zm-15.216-10a6.148,6.148,0,0,0,6.139,6.123,6.118,6.118,0,0,0,6.12-6.123,6.12,6.12,0,0,0-6.12-6.135A6.147,6.147,0,0,0-15924.144-14292.006Z"
        transform="translate(15926 14300)"
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
  name: "iconSearch",
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
