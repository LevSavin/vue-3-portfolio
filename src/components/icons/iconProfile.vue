<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <rect id="bounds" width="18" height="18" fill="none" />
    <path
      id="Icon"
      d="M13.025,15.38l-.8-3.53A2.8,2.8,0,0,0,9.528,9.726H5.063a2.737,2.737,0,0,0-2.691,2.134l-.8,3.524a.768.768,0,0,1-.349.49.827.827,0,0,1-.606.1.8.8,0,0,1-.593-.955L.82,11.5a4.361,4.361,0,0,1,2.8-3.155l.441-.154L3.8,7.8A4.1,4.1,0,0,1,3.132,5.56V4.166a4.165,4.165,0,1,1,8.329,0V5.56A4.155,4.155,0,0,1,10.789,7.8l-.257.393.445.154a4.365,4.365,0,0,1,2.8,3.155l.84,3.534a.716.716,0,0,1-.079.566.846.846,0,0,1-.554.382.715.715,0,0,1-.164.013A.785.785,0,0,1,13.025,15.38ZM4.7,4.13v1.4a2.566,2.566,0,0,0,5.132,0V4.13a2.566,2.566,0,0,0-5.132,0Z"
      transform="translate(2.001 0.999)"
      :fill="iconColor"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconProfile",
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
    // viewBox svg
    viewBox: {
      type: String,
      default: "0 0 18 18",
    },
  },
};
</script>
