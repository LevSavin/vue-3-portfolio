<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Pedia" transform="translate(9 9)">
      <path
        id="Icon_Pedia"
        data-name="Icon / Pedia"
        d="M8.25,8.23V1.48h1.5V6.83l1.084-.724a.75.75,0,0,1,.832,0l1.084.724V1.48h1.5V8.23a.748.748,0,0,1-.75.75.742.742,0,0,1-.416-.125L11.25,7.632,9.416,8.855A.75.75,0,0,1,8.25,8.23ZM18,1.92V16.08A1.922,1.922,0,0,1,16.08,18H3.69a1.922,1.922,0,0,1-1.92-1.92V14.454a1.92,1.92,0,0,1,0-3.828V7.965a1.92,1.92,0,0,1,0-3.829V1.92A1.922,1.922,0,0,1,3.69,0H16.08A1.922,1.922,0,0,1,18,1.92ZM1.48,12.54a.44.44,0,0,0,.44.439H3.1a.439.439,0,1,0,0-.878H1.92A.44.44,0,0,0,1.48,12.54ZM3.1,5.61H1.92a.44.44,0,1,0,0,.879H3.1a.44.44,0,1,0,0-.879Zm.15,10.47a.441.441,0,0,0,.44.44H16.08a.441.441,0,0,0,.44-.44V1.92a.441.441,0,0,0-.44-.44H3.69a.441.441,0,0,0-.44.44V4.136a1.92,1.92,0,0,1,0,3.829v2.661a1.92,1.92,0,0,1,0,3.828Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconPedia",
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
