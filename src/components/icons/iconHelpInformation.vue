<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g
      id="Help_Information"
      data-name="Help Information"
      transform="translate(9 9)"
    >
      <path
        id="Icon_Help_Information"
        data-name="Icon / Help Information"
        d="M9.863,13.137a.863.863,0,0,1-1.726,0V7.986a.863.863,0,0,1,1.726,0ZM9,6.091a1.046,1.046,0,1,1,1.045-1.045A1.046,1.046,0,0,1,9,6.091m6.367,9.268A8.933,8.933,0,0,1,9.012,18,9.005,9.005,0,0,1,2.633,2.63,9,9,0,0,1,15.367,15.359M14.122,3.9a7.227,7.227,0,1,0,0,10.218,7.256,7.256,0,0,0,0-10.218"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconHelpInformation",
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
