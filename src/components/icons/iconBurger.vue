<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Collapse_Menu" data-name="Collapse Menu" transform="translate(9 9)">
      <path
        id="Icon_Collapse_Menu"
        data-name="Icon / Collapse Menu"
        d="M13.993,0H4.008A4.013,4.013,0,0,0,0,4.008v9.986A4.011,4.011,0,0,0,4.008,18h9.985A4.011,4.011,0,0,0,18,13.994V4.008A4.012,4.012,0,0,0,13.993,0ZM4.241,16.156H4.008a2.165,2.165,0,0,1-2.164-2.162V4.008A2.167,2.167,0,0,1,4.008,1.843h.233ZM16.156,5.011v8.983a2.164,2.164,0,0,1-2.163,2.162H6.085V1.843h7.908a2.166,2.166,0,0,1,2.163,2.165ZM13.364,14.5a1,1,0,0,1-.715-.292L8.159,9.717a1.012,1.012,0,0,1,0-1.428L12.648,3.8l.185.185h0L12.649,3.8a1.012,1.012,0,0,1,1.438,0,1,1,0,0,1,.29.716,1.009,1.009,0,0,1-.3.712L10.3,9l3.775,3.775a1.011,1.011,0,0,1-.712,1.722Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconBurger",
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
