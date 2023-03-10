<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="Comment" transform="translate(0.5 0.5)">
      <rect
        id="bounds"
        width="18"
        height="18"
        transform="translate(0 0.002)"
        fill="none"
      />
      <path
        id="Icon"
        d="M-15922.038-14282a1.286,1.286,0,0,1-.265-.076.793.793,0,0,1-.472-.747v-3.809h-2.431a.818.818,0,0,1-.795-.828v-11.711a.817.817,0,0,1,.795-.827h16.428a.789.789,0,0,1,.775.827v11.711a.818.818,0,0,1-.8.828h-7.87l-4.78,4.42a.82.82,0,0,1-.457.212Zm-2.367-6.283h2.446a.814.814,0,0,1,.795.823v2.79l3.661-3.4a.787.787,0,0,1,.531-.216h7.379v-10.06h-14.812Zm3.109-2.262a.8.8,0,0,1-.8-.823.818.818,0,0,1,.8-.828h8.613a.82.82,0,0,1,.795.828.817.817,0,0,1-.795.823Zm0-3.89a.8.8,0,0,1-.8-.827.815.815,0,0,1,.8-.823h8.613a.817.817,0,0,1,.795.823.817.817,0,0,1-.795.827Z"
        transform="translate(15926 14300.002)"
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
  name: "iconComment",
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
