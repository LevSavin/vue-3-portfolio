<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox" :id="id">
    <defs>
      <clipPath id="clip-pathIcon_Report_Document">
        <rect
          id="bounds"
          width="18"
          height="18"
          transform="translate(1758 1122)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Report_Document"
      data-name="Icon / Report Document"
      transform="translate(-1758 -1122)"
      clip-path="url(#clip-pathIcon_Report_Document)"
    >
      <path
        id="Icon_"
        data-name="Icon "
        d="M-11791.056-9995a2.95,2.95,0,0,1-2.943-2.943v-10.113a2.946,2.946,0,0,1,2.943-2.942h5.255a2.941,2.941,0,0,1,2.072.861l1.492,1.492a2.937,2.937,0,0,1,.861,2.081v8.621a2.95,2.95,0,0,1-2.942,2.943Zm-1.555-13.057v10.113a1.559,1.559,0,0,0,1.555,1.552h6.738a1.554,1.554,0,0,0,1.551-1.552v-8.295h-1.551a1.824,1.824,0,0,1-1.818-1.818v-1.552h-4.92A1.558,1.558,0,0,0-11792.61-10008.057Zm7.866,0a.428.428,0,0,0,.427.427h1.131l-.032-.033-1.5-1.492c-.009-.012-.021-.021-.03-.032Zm-.136,10.247h-5.616a.7.7,0,0,1-.685-.685.692.692,0,0,1,.2-.494.691.691,0,0,1,.486-.213l5.657,0a.667.667,0,0,1,.474.21.7.7,0,0,1,.2.494.689.689,0,0,1-.213.489.681.681,0,0,1-.482.2Zm0-2.247h-5.616a.7.7,0,0,1-.685-.682.7.7,0,0,1,.682-.71h5.643a.7.7,0,0,1,.684.71.687.687,0,0,1-.213.486.694.694,0,0,1-.482.2Zm-1.256-2.943v-1.685a.7.7,0,0,1,.7-.707h.012a.7.7,0,0,1,.684.71v1.682a.7.7,0,0,1-.7.7A.7.7,0,0,1-11786.136-10003Zm-2.247,0v-3.372a.692.692,0,0,1,.682-.684h.015a.7.7,0,0,1,.7.681v3.375a.7.7,0,0,1-.7.7A.7.7,0,0,1-11788.383-10003Zm-2.247,0v-2.247a.7.7,0,0,1,.682-.687h.015a.7.7,0,0,1,.482.2.7.7,0,0,1,.213.488v2.25a.7.7,0,0,1-.7.7A.7.7,0,0,1-11790.63-10003Z"
        transform="translate(13555 11134)"
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
  name: "iconReport",
  components: {
    iconsWrapper,
  },
  props: {
    id: {
      type: String,
      default: "iconReport",
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
