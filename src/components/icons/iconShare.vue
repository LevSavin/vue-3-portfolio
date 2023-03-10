<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-path-share">
        <rect id="bounds" width="14" height="14" :fill="iconColor" />
      </clipPath>
    </defs>
    <g id="Share" transform="translate(7 7)">
      <g id="Icon_Share" data-name="Icon / Share" transform="translate(-7 -7)">
        <g
          id="Group_2574"
          data-name="Group 2574"
          clip-path="url(#clip-path-share)"
        >
          <path
            id="Icon_Share-2"
            data-name="Icon / Share"
            d="M11.455,0A2.556,2.556,0,0,0,8.909,2.546a2.5,2.5,0,0,0,.082.605L5.61,4.97A3.161,3.161,0,0,0,3.185,3.818a3.182,3.182,0,1,0,0,6.364A3.158,3.158,0,0,0,5.61,9.027l3.381,1.822a2.5,2.5,0,0,0-.082.605A2.571,2.571,0,1,0,9.6,9.729L6.215,7.906A3.106,3.106,0,0,0,6.363,7a3.122,3.122,0,0,0-.148-.91L9.6,4.267A2.541,2.541,0,1,0,11.455,0Zm0,1.272a1.273,1.273,0,1,1-1.273,1.273A1.264,1.264,0,0,1,11.455,1.272ZM3.185,5.091A1.909,1.909,0,1,1,1.272,7,1.9,1.9,0,0,1,3.185,5.091Zm8.27,5.091a1.273,1.273,0,1,1-1.273,1.272A1.263,1.263,0,0,1,11.455,10.182Z"
            transform="translate(0 0)"
            :fill="iconColor"
            fill-rule="evenodd"
          />
        </g>
      </g>
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconShare",
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
