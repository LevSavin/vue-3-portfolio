<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconMail">
        <rect
          id="Rectangle_5602"
          data-name="Rectangle 5602"
          width="18"
          height="18"
          transform="translate(0)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g id="Mail" transform="translate(9 9)">
      <g id="Icon_Mail" data-name="Icon / Mail" transform="translate(-9 -9)">
        <g
          id="Group_9579"
          data-name="Group 9579"
          transform="translate(0)"
          clip-path="url(#clip-pathiconMail)"
        >
          <path
            id="Icon_Mail-2"
            data-name="Icon / Mail"
            d="M1.722,16H16.278A1.727,1.727,0,0,0,18,14.277V3.723A1.727,1.727,0,0,0,16.278,2H1.722A1.727,1.727,0,0,0,0,3.723V14.277A1.727,1.727,0,0,0,1.722,16Zm0-1.723V4.52l6.7,5.923a.832.832,0,0,0,.559.215.794.794,0,0,0,.56-.215l6.7-5.923v9.757Zm1.7-10.554H14.577L9,8.655Z"
            :fill="iconColor"
          />
        </g>
      </g>
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconMail",
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
