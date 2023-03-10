<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g id="New_Order" data-name="New Order" transform="translate(0.5 0.5)">
      <rect
        id="bounds"
        width="18"
        height="18"
        transform="translate(0 0.002)"
        fill="none"
      />
      <path
        id="Icon_"
        data-name="Icon "
        d="M-15923.247-14282a2.829,2.829,0,0,1-2.753-2.75v-7.106a2.719,2.719,0,0,1,1.555-2.43v-.752a2.309,2.309,0,0,1,2.074-2.242v-.455a2.331,2.331,0,0,1,2.39-2.263h5.964a2.334,2.334,0,0,1,2.39,2.263v.455a2.313,2.313,0,0,1,2.075,2.242v.752a2.728,2.728,0,0,1,1.555,2.43v7.106a2.83,2.83,0,0,1-2.757,2.75Zm-1.078-9.856v7.106a1.2,1.2,0,0,0,1.234,1.171h12.179a1.207,1.207,0,0,0,1.239-1.171v-7.106a1.206,1.206,0,0,0-1.239-1.167h-12.179A1.2,1.2,0,0,0-15924.325-14291.86Zm1.555-3.182v.432h11.543v-.432a.7.7,0,0,0-.72-.679h-10.1A.7.7,0,0,0-15922.771-14295.042Zm2.074-2.7v.436h7.395v-.436a.7.7,0,0,0-.716-.68h-5.964A.7.7,0,0,0-15920.7-14297.739Zm2.905,11.763v-1.535h-1.538a.793.793,0,0,1-.792-.791.791.791,0,0,1,.792-.792h1.538v-1.538a.794.794,0,0,1,.792-.792.794.794,0,0,1,.791.792v1.538h1.535a.791.791,0,0,1,.791.792.793.793,0,0,1-.791.791h-1.535v1.535a.793.793,0,0,1-.791.791A.794.794,0,0,1-15917.791-14285.977Z"
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
  name: "iconNewOrder",
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
      default: 14,
    },
    //высота обёртки картинки
    height: {
      type: [Number, String],
      default: 14,
    },
    viewBox: {
      type: String,
      default: "0 0 19.002 18.998",
    },
  },
};
</script>
