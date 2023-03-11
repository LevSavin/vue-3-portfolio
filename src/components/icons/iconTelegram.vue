<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Send_Message" data-name="Send Message" transform="translate(9 9)">
      <path
        id="Icon_Send_Message"
        data-name="Icon / Send Message"
        d="M.322,5.6a3.392,3.392,0,0,0,1.805,4.593l2.436.973a4.111,4.111,0,0,1,2.276,2.276l.973,2.435a3.39,3.39,0,0,0,6.37-.211l3.65-11.2A3.4,3.4,0,0,0,13.543.168L2.337,3.817A3.409,3.409,0,0,0,.322,5.6Zm2.67.18L14.2,2.127a1.327,1.327,0,0,1,.376-.055H14.6a1.332,1.332,0,0,1,1.262,1.742l-3.636,11.2a1.319,1.319,0,0,1-1.254.923h-.011A1.316,1.316,0,0,1,9.736,15.1L8.76,12.669a6.249,6.249,0,0,0-.649-1.2l-.055-.078.117-.093,2.979-2.98A1.036,1.036,0,0,0,9.687,6.848L6.7,9.834l-.025.033-.059.08L6.534,9.89a6.165,6.165,0,0,0-1.2-.649L2.9,8.268a1.321,1.321,0,0,1,.1-2.492Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconTelegram",
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
