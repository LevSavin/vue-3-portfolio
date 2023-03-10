<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <rect id="bounds" width="12" height="12" fill="none" />
    <path
      id="Icon"
      d="M-15919.413-14290.535l-3.4-3.393a.618.618,0,0,1-.188-.443.638.638,0,0,1,.185-.444.625.625,0,0,1,.447-.184h6.742a.616.616,0,0,1,.443.184.629.629,0,0,1,0,.888l-3.369,3.369a.628.628,0,0,1-.444.185A.607.607,0,0,1-15919.413-14290.535Z"
      transform="translate(15925 14299)"
      :fill="iconColor"
      stroke="rgba(0,0,0,0)"
      stroke-width="1"
    />
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconTreeOpen",
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
      default: 12,
    },
    height: {
      type: [Number, String],
      default: 12,
    },
    viewBox: {
      type: String,
      default: "0 0 12 12",
    },
  },
};
</script>
