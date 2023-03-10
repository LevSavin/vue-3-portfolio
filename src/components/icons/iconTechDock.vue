<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox" :id="id">
    <defs>
      <clipPath id="clip-pathiconTechDock">
        <rect
          id="bounds"
          width="18"
          height="18"
          transform="translate(1796 1122)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Tech_Documentation"
      data-name="Icon  /Tech Documentation"
      transform="translate(-1796 -1122)"
      clip-path="url(#clip-pathiconTechDock)"
    >
      <path
        id="Icon_"
        data-name="Icon "
        d="M-11795.271-9995a.728.728,0,0,1-.729-.729v-10.907a2.181,2.181,0,0,1,2.182-2.182h.729a2.181,2.181,0,0,1,2.182-2.182h10.182a.726.726,0,0,1,.726.728v10.182a2.18,2.18,0,0,1-2.182,2.18h-.726v.729a2.182,2.182,0,0,1-2.182,2.182Zm.725-11.636v10.182h9.457a.727.727,0,0,0,.728-.728v-.729h-8a.725.725,0,0,1-.726-.726v-8.729h-.729A.729.729,0,0,0-11794.547-10006.636Zm2.91-2.182v9.453h9.454a.727.727,0,0,0,.729-.726v-9.456h-9.454A.729.729,0,0,0-11791.637-10008.817Zm2.183,5.089a.727.727,0,0,1-.729-.725.728.728,0,0,1,.729-.729h5.817a.728.728,0,0,1,.729.729.727.727,0,0,1-.729.725Zm0-2.907a.728.728,0,0,1-.729-.729.728.728,0,0,1,.729-.728h2.182a.726.726,0,0,1,.726.728.727.727,0,0,1-.726.729Z"
        transform="translate(13593 11134)"
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
  name: "iconTechDock",
  components: {
    iconsWrapper,
  },
  props: {
    id: {
      type: String,
      default: "Report_Document",
    },
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
