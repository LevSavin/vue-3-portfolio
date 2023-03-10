<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Form" transform="translate(0 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-15842.738-9366a.9.9,0,0,1-.637-.263l-1.891-1.906a.909.909,0,0,1,0-1.277.9.9,0,0,1,.633-.263.894.894,0,0,1,.633.263l1.226,1.234.036.035,2.2-2.221a.9.9,0,0,1,.637-.267.9.9,0,0,1,.637.267.914.914,0,0,1,0,1.277l-2.841,2.857A.894.894,0,0,1-15842.738-9366Zm-9.471-.951a2.8,2.8,0,0,1-2.79-2.81v-11.429a2.8,2.8,0,0,1,2.79-2.809h9.471a2.8,2.8,0,0,1,2.789,2.809v7.621a.9.9,0,0,1-.895.9.9.9,0,0,1-.9-.9v-7.621a1,1,0,0,0-1-1h-9.471a1,1,0,0,0-1,1v11.429a1,1,0,0,0,1,1h3.788a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9Zm1.895-3.808a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-.9h3.788a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9Zm0-3.812a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-.9h5.682a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9Zm0-3.812a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-.9h5.682a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9Z"
        transform="translate(15856 9384)"
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
  name: "iconForm",
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
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    viewBox: {
      type: String,
      default: "0 0 18 18.998",
    },
  },
};
</script>
