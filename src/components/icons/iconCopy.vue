<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <g
      id="Duplicate_Item"
      data-name="Duplicate Item"
      transform="translate(0.5 0.5)"
    >
      <rect
        id="bounds"
        width="18"
        height="18"
        transform="translate(0 0.002)"
        fill="none"
      />
      <path
        id="Icon"
        d="M-15922.8-14282a3.383,3.383,0,0,1-2.188-.955v-.024l-.027-.031a3.3,3.3,0,0,1-.987-2.351v-6.327a3.429,3.429,0,0,1,.987-2.374,3.438,3.438,0,0,1,2.378-.987h1.583v-1.583a3.368,3.368,0,0,1,.959-2.346h.02l.032-.032a3.311,3.311,0,0,1,2.351-.987h6.327a3.31,3.31,0,0,1,2.35.987l.032.032h.023a3.427,3.427,0,0,1,.96,2.346v6.3a3.341,3.341,0,0,1-.987,2.378l-.028.027a3.322,3.322,0,0,1-2.35.983h-1.583v1.583a3.313,3.313,0,0,1-.987,2.354l-.024.023a3.342,3.342,0,0,1-2.213.983Zm-1.425-9.688v6.327a1.609,1.609,0,0,0,1.587,1.587h6.3a1.6,1.6,0,0,0,1.611-1.587v-6.327a1.6,1.6,0,0,0-1.611-1.583h-6.3A1.608,1.608,0,0,0-15924.222-14291.692Zm4.948-4.944v1.583h2.938a3.345,3.345,0,0,1,2.378.987l.028.028a3.3,3.3,0,0,1,.983,2.346v2.966h1.583a1.6,1.6,0,0,0,1.582-1.61v-6.3a1.6,1.6,0,0,0-1.582-1.582h-6.327A1.6,1.6,0,0,0-15919.273-14296.637Z"
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
  name: "iconCopy",
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
