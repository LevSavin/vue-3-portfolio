<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g
      id="Special_User"
      data-name="Special User"
      transform="translate(0.499 0.5)"
    >
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-11691.7-13145.15v-7.838a.838.838,0,0,1,.248-.6,3.115,3.115,0,0,1,2.25-.661,5.153,5.153,0,0,1,1.969.473,3.578,3.578,0,0,0,1.334.354,2.035,2.035,0,0,0,1.1-.208.8.8,0,0,1,.9-.162.859.859,0,0,1,.5.807v4.951a.861.861,0,0,1-.247.6,3.117,3.117,0,0,1-2.25.66,5.112,5.112,0,0,1-1.969-.473,3.621,3.621,0,0,0-1.334-.354,3.089,3.089,0,0,0-.8.093v2.358a.849.849,0,0,1-.849.85A.849.849,0,0,1-11691.7-13145.15Zm4.467-3.676a3.594,3.594,0,0,0,1.334.353,3.13,3.13,0,0,0,.8-.089v-3.221a5.25,5.25,0,0,1-.8.057,5.112,5.112,0,0,1-1.969-.473,3.6,3.6,0,0,0-1.334-.354,3.169,3.169,0,0,0-.8.089v3.221a5.259,5.259,0,0,1,.8-.056A5.135,5.135,0,0,1-11687.234-13148.826Zm-13.088,4.5a.88.88,0,0,1-.677-.815v-.1a.85.85,0,0,1,.02-.146l.889-3.891a4.817,4.817,0,0,1,3.092-3.492l.489-.168-.281-.437a4.554,4.554,0,0,1-.743-2.478v-1.546a4.611,4.611,0,0,1,4.6-4.6,4.612,4.612,0,0,1,4.608,4.6v1.546c0,.165-.021.337-.036.5-.033,0-.063,0-.1,0a6.082,6.082,0,0,0-1.81.277,2.765,2.765,0,0,0,.136-.815v-1.543a2.839,2.839,0,0,0-2.838-2.837,2.839,2.839,0,0,0-2.838,2.837v1.543a2.832,2.832,0,0,0,2.649,2.817,6.038,6.038,0,0,0-.991,1.827h-1.252a3.032,3.032,0,0,0-2.979,2.361l-.888,3.9a.861.861,0,0,1-.387.546.911.911,0,0,1-.474.133A.974.974,0,0,1-11700.322-13144.327Z"
        transform="translate(11701 13162)"
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
  name: "iconSpecialUser",
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
