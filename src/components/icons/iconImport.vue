<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconImport">
        <rect
          id="bounds"
          width="18"
          height="18"
          transform="translate(1728 1122)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Report_Document_Import"
      data-name="Icon / Report Document Import"
      transform="translate(-1728 -1122)"
      clip-path="url(#clip-pathiconImport)"
    >
      <path
        id="Icon_"
        data-name="Icon "
        d="M-11787.637-9995h-3.419a2.95,2.95,0,0,1-2.943-2.943v-10.113a2.946,2.946,0,0,1,2.943-2.942h5.255a2.941,2.941,0,0,1,2.072.861l1.492,1.492a2.937,2.937,0,0,1,.861,2.081v2.484l0,2.848a.662.662,0,0,1-.21.471.673.673,0,0,1-.494.2.677.677,0,0,1-.488-.213.689.689,0,0,1-.2-.479v-4.979h-1.551a1.824,1.824,0,0,1-1.818-1.818v-1.552h-4.92a1.558,1.558,0,0,0-1.555,1.552v10.113a1.559,1.559,0,0,0,1.555,1.552h3.458a.684.684,0,0,1,.474.213.688.688,0,0,1,.2.5.691.691,0,0,1-.213.488.688.688,0,0,1-.48.2Zm2.893-13.057a.428.428,0,0,0,.427.427h1.131l-.032-.033-1.5-1.492c-.009-.012-.021-.021-.03-.032Zm2.168,12.85-1.964-1.963v1.113a.7.7,0,0,1-.7.7.7.7,0,0,1-.7-.7v-2.108a1.407,1.407,0,0,1,1.406-1.409h2.111a.7.7,0,0,1,.7.7.7.7,0,0,1-.7.705h-1.116l1.963,1.963a.7.7,0,0,1,0,1,.693.693,0,0,1-.5.206A.7.7,0,0,1-11782.576-9995.207Zm-7.908-2.6a.7.7,0,0,1-.7-.7.7.7,0,0,1,.7-.7h3.372a.7.7,0,0,1,.684.684v.012a.7.7,0,0,1-.681.7Zm5.6-2.247h-5.616a.7.7,0,0,1-.685-.682.7.7,0,0,1,.682-.71h5.643a.7.7,0,0,1,.684.71.687.687,0,0,1-.213.486.694.694,0,0,1-.482.2Zm-1.256-2.943v-1.685a.7.7,0,0,1,.7-.707h.012a.7.7,0,0,1,.684.71v1.682a.7.7,0,0,1-.7.7A.7.7,0,0,1-11786.136-10003Zm-2.247,0v-3.372a.692.692,0,0,1,.682-.684h.015a.7.7,0,0,1,.7.681v3.375a.7.7,0,0,1-.7.7A.7.7,0,0,1-11788.383-10003Zm-2.247,0v-2.247a.7.7,0,0,1,.682-.687h.015a.7.7,0,0,1,.482.2.7.7,0,0,1,.213.488v2.25a.7.7,0,0,1-.7.7A.7.7,0,0,1-11790.63-10003Z"
        transform="translate(13525 11134)"
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
  name: "iconImport",
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
