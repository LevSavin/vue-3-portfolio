<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Checklist" transform="translate(0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-15922.985-14282.413a1.994,1.994,0,0,1-1.994-1.991v-3.237a2,2,0,0,1,1.994-1.994h3.237a2,2,0,0,1,1.994,1.994v3.237a1.994,1.994,0,0,1-1.994,1.991Zm0-5.376a.145.145,0,0,0-.148.147v3.237a.148.148,0,0,0,.148.148h3.237a.15.15,0,0,0,.147-.148v-3.237a.15.15,0,0,0-.147-.151h-3.142Zm8.484,4.28a.8.8,0,0,1-.8-.8.8.8,0,0,1,.8-.8h4.081a.8.8,0,0,1,.8.8.8.8,0,0,1-.8.8Zm.021-3.425a.8.8,0,0,1-.8-.8.805.805,0,0,1,.8-.8h6.658a.806.806,0,0,1,.8.8.8.8,0,0,1-.8.8Zm-8.186-5.1-2.034-2.038a.988.988,0,0,1-.3-.716,1,1,0,0,1,.3-.72,1,1,0,0,1,.716-.3.994.994,0,0,1,.715.3l1.319,1.323,2.521-2.521a1,1,0,0,1,.72-.3.978.978,0,0,1,.715.3,1.007,1.007,0,0,1,.3.715,1,1,0,0,1-.3.716l-3.237,3.241a1.01,1.01,0,0,1-.719.3A1.009,1.009,0,0,1-15922.666-14292.029Zm8.186.18a.8.8,0,0,1-.8-.8.8.8,0,0,1,.8-.8h4.08a.8.8,0,0,1,.8.8.8.8,0,0,1-.8.8Zm.02-3.429a.8.8,0,0,1-.8-.8.8.8,0,0,1,.8-.8h6.658a.8.8,0,0,1,.8.8.8.8,0,0,1-.8.8Z"
        transform="translate(15925 14299)"
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
  name: "iconCalc",
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
