<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g
      id="Card_View_Toggle"
      data-name="Card View Toggle"
      transform="translate(9 9)"
    >
      <path
        id="Card_View_Toggle-2"
        data-name="Card View Toggle"
        d="M2.113,18H5.924a2.114,2.114,0,0,0,2.113-2.111V12.081A2.114,2.114,0,0,0,5.924,9.97H2.113A2.114,2.114,0,0,0,0,12.081V15.89A2.114,2.114,0,0,0,2.113,18Zm-.4-5.918a.407.407,0,0,1,.4-.408H5.924a.408.408,0,0,1,.407.408V15.89a.407.407,0,0,1-.407.406H2.113a.406.406,0,0,1-.4-.406ZM12.076,18h3.811A2.114,2.114,0,0,0,18,15.889V12.081A2.114,2.114,0,0,0,15.887,9.97H12.076a2.114,2.114,0,0,0-2.113,2.111V15.89A2.114,2.114,0,0,0,12.076,18Zm-.406-5.918a.408.408,0,0,1,.406-.408h3.811a.407.407,0,0,1,.406.408V15.89a.406.406,0,0,1-.406.406H12.076a.407.407,0,0,1-.406-.406ZM18,2.069A2.073,2.073,0,0,0,15.928,0H12.184a2.073,2.073,0,0,0-2.072,2.069V5.811A2.073,2.073,0,0,0,12.184,7.88h3.744A2.074,2.074,0,0,0,18,5.809ZM16.332,5.811a.4.4,0,0,1-.4.4H12.184a.4.4,0,0,1-.4-.4V2.07a.4.4,0,0,1,.4-.4h3.744a.405.405,0,0,1,.4.4ZM0,5.92A2.114,2.114,0,0,0,2.113,8.031h3.81A2.115,2.115,0,0,0,8.036,5.919V2.112A2.115,2.115,0,0,0,5.923,0H2.113A2.115,2.115,0,0,0,0,2.112ZM1.707,2.113A.408.408,0,0,1,2.113,1.7h3.81a.409.409,0,0,1,.407.409V5.92a.408.408,0,0,1-.407.407H2.113a.407.407,0,0,1-.406-.407Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconCardViewToggle",
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
