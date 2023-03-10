<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="File_Upload" data-name="File Upload" transform="translate(0 0.498)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-15921.84-14282a3.132,3.132,0,0,1-2.234-.923,3.2,3.2,0,0,1-.923-2.238l.02-11.719a3.148,3.148,0,0,1,.92-2.215,3.1,3.1,0,0,1,2.039-.9h2.955l2.8,0,.039,0h.108a.835.835,0,0,1,.52.244l5.636,5.668a.806.806,0,0,1,.236.579l.008.048v8.3a3.137,3.137,0,0,1-.928,2.234,3.182,3.182,0,0,1-2.234.923Zm-1.031-15.9a1.426,1.426,0,0,0-.428,1.016l-.016,11.723a1.484,1.484,0,0,0,.432,1.043,1.484,1.484,0,0,0,1.043.432h8.957a1.481,1.481,0,0,0,1.044-.432,1.471,1.471,0,0,0,.436-1.043v-7.49h-3.334a2.32,2.32,0,0,1-1.646-.684,2.315,2.315,0,0,1-.676-1.654l.017-3.33h-4.816A1.425,1.425,0,0,0-15922.871-14297.9Zm7.494,2.922a.655.655,0,0,0,.188.455.634.634,0,0,0,.451.188h2.15l-2.777-2.8Zm-2.825,8.205v-2.054l-.456.415a.822.822,0,0,1-.567.225h-.036a.842.842,0,0,1-.583-.276.817.817,0,0,1-.22-.6.833.833,0,0,1,.271-.583l1.654-1.52a1.138,1.138,0,0,1,1.539,0l1.671,1.519a.841.841,0,0,1,.056,1.188.815.815,0,0,1-.583.275.843.843,0,0,1-.6-.216l-.46-.415v2.05a.84.84,0,0,1-.84.84A.843.843,0,0,1-15918.2-14286.772Z"
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
  name: "iconUpload",
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
