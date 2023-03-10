<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <path
      id="Icon"
      d="M4.5,13.767H1.9A1.9,1.9,0,0,1,1.578,10c0-.257,0-.658,0-1.279V7.146A5.62,5.62,0,0,1,4.989,2.007a2.161,2.161,0,0,1,4.311,0,5.621,5.621,0,0,1,3.413,5.139V10a1.9,1.9,0,0,1-.323,3.766h-2.6a2.685,2.685,0,0,1-5.293,0Zm2.646.539a1,1,0,0,0,.882-.539H6.262A1,1,0,0,0,7.144,14.305ZM6.68,2.158V3.241l-.613.178a3.894,3.894,0,0,0-2.8,3.728v3.148A1.375,1.375,0,0,1,1.9,11.668a.2.2,0,0,0-.2.2.207.207,0,0,0,.207.2H12.391a.2.2,0,0,0,.2-.2.2.2,0,0,0-.2-.2,1.376,1.376,0,0,1-1.374-1.374V7.146a3.9,3.9,0,0,0-2.8-3.728l-.613-.178V2.158a.465.465,0,0,0-.93,0Z"
      transform="translate(2.001 1.001)"
      :fill="iconColor"
      stroke="rgba(0,0,0,0)"
      stroke-width="1"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconNotifications",
  components: {
    iconsWrapper,
  },
  props: {
    iconColor: {
      type: String,
      default: "currentColor",
    },
    //ширина обёртки картинки
    width: {
      type: [Number, String],
      default: 13,
    },
    //высота обёртки картинки
    height: {
      type: [Number, String],
      default: 13,
    },
    viewBox: {
      type: String,
      default: "0 0 18 18",
    },
  },
};
</script>
