<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <path
      id="Icon"
      d="M-21612.475-12545a1.5,1.5,0,0,1-1.525-1.481v-7.7a1.508,1.508,0,0,1,1.525-1.486h.293v-.287h.006a5.118,5.118,0,0,1,5.186-5.045,5.093,5.093,0,0,1,5.164,5.045c0,.1.006.2.006.287h.3a1.508,1.508,0,0,1,1.523,1.486v7.7a1.5,1.5,0,0,1-1.523,1.481Zm.293-8.284v5.919a.6.6,0,0,0,.613.591h9.141a.6.6,0,0,0,.607-.591v-5.919a.6.6,0,0,0-.607-.6h-9.141A.606.606,0,0,0-21612.182-12553.286Zm1.844-2.382h6.7v-.021a2.378,2.378,0,0,0,.016-.271,3.307,3.307,0,0,0-3.352-3.26,3.3,3.3,0,0,0-3.348,3.26h-.012Zm3.18,7.106a.745.745,0,0,1-.754-.737v-2.045a.742.742,0,0,1,.754-.738h.309a.742.742,0,0,1,.754.738v2.045a.745.745,0,0,1-.754.737Z"
      transform="translate(21616 12562)"
      :fill="iconColor"
      stroke="rgba(0,0,0,0)"
      stroke-width="1"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconLock",
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
