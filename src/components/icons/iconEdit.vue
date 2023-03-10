<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="Edit" transform="translate(0.5 0.626)">
      <rect
        id="bounds"
        width="18"
        height="18"
        transform="translate(0 0.001)"
        fill="none"
      />
      <path
        id="Icon"
        d="M2.523,18A2.661,2.661,0,0,1,0,15.345V4.38A2.66,2.66,0,0,1,2.655,1.723H7.4a.829.829,0,0,1,0,1.658H2.655a1,1,0,0,0-1,1V15.345a1,1,0,0,0,1,1H13.609a1,1,0,0,0,.994-1v-4.75a.829.829,0,1,1,1.658,0v4.75A2.659,2.659,0,0,1,13.74,18Zm4.143-5.844a.825.825,0,0,1-.807-1L6.59,7.5a.815.815,0,0,1,.222-.423L13.341.547a1.972,1.972,0,0,1,2.725,0l1.4,1.42a1.941,1.941,0,0,1-.026,2.7L10.909,11.2a.839.839,0,0,1-.423.225l-3.648.73-.165,0Zm1.5-4.077L7.726,10.27l2.189-.439,4.348-4.355L12.512,3.725ZM14.52,1.723l-.839.829,1.751,1.755.846-.853a.25.25,0,0,0-.014-.354L14.89,1.723a.287.287,0,0,0-.191-.078A.242.242,0,0,0,14.52,1.723Z"
        transform="translate(0 0.001)"
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
  name: "iconEdit",
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
