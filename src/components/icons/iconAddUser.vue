<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    class="icon-class"
  >
    <g id="Add_User" data-name="Add User" transform="translate(0.499 0.5)">
      <rect id="bounds" width="18" height="18" fill="none" />
      <path
        id="Icon"
        d="M-11689.353-13145.2v-3.251h-3.25a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-.9h3.25v-3.251a.9.9,0,0,1,.9-.9.9.9,0,0,1,.9.9v3.251h3.25a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9h-3.25v3.251a.9.9,0,0,1-.9.9A.9.9,0,0,1-11689.353-13145.2Zm-10.97.872a.88.88,0,0,1-.677-.815v-.1a.85.85,0,0,1,.02-.146l.889-3.891a4.817,4.817,0,0,1,3.092-3.492l.489-.168-.281-.437a4.554,4.554,0,0,1-.743-2.478v-1.546a4.611,4.611,0,0,1,4.6-4.6,4.612,4.612,0,0,1,4.608,4.6v1.546c0,.165-.021.337-.036.5-.033,0-.063,0-.1,0a6.082,6.082,0,0,0-1.81.277,2.765,2.765,0,0,0,.136-.815v-1.543a2.839,2.839,0,0,0-2.838-2.837,2.839,2.839,0,0,0-2.838,2.837v1.543a2.832,2.832,0,0,0,2.649,2.817,6.038,6.038,0,0,0-.991,1.827h-1.252a3.032,3.032,0,0,0-2.979,2.361l-.888,3.9a.861.861,0,0,1-.387.546.911.911,0,0,1-.474.133A.974.974,0,0,1-11700.322-13144.327Z"
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
  name: "iconAddUser",
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
      default: "0 0 18.596 18.699",
    },
  },
};
</script>

<style scoped>
.icon-class {
  margin-bottom: 2px;
}
</style>
