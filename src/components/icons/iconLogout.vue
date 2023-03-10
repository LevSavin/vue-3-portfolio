<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Logout" transform="translate(9 9)">
      <path
        id="Icon_Logout"
        data-name="Icon / Logout"
        d="M16.085,16.935V1.065a1.122,1.122,0,0,1,.26-.73.919.919,0,0,1,.7-.335A1.017,1.017,0,0,1,18,1.065v15.87a.963.963,0,1,1-1.915,0ZM13.429,7.743H3.287L6.17,4.906A.933.933,0,0,0,6.147,3.58a.972.972,0,0,0-1.345,0L.282,8.021a.932.932,0,0,0,0,1.336L4.8,13.8a.985.985,0,0,0,.381.24,1.028,1.028,0,0,0,.318.052.963.963,0,0,0,.673-.27.94.94,0,0,0,.289-.682.92.92,0,0,0-.075-.361.934.934,0,0,0-.218-.312L3.286,9.635H13.429a.946.946,0,1,0,0-1.892Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconLogout",
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
