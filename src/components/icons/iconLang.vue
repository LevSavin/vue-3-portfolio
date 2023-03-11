<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox" class="icon">
    <defs>
      <clipPath id="clip-pathiconLang">
        <rect id="bounds" width="18" height="18" fill="none" />
      </clipPath>
    </defs>
    <g id="Translation" transform="translate(9 9)">
      <g
        id="Icon_Translation"
        data-name="Icon / Translation"
        transform="translate(-9 -9)"
      >
        <g
          id="Group_9689"
          data-name="Group 9689"
          clip-path="url(#clip-pathiconLang)"
        >
          <path
            id="Icon_Translation-2"
            data-name="Icon / Translation"
            d="M1.737,7.956a.838.838,0,0,1-.7-.361.828.828,0,0,1,.224-1.141A12.513,12.513,0,0,0,4.2,3.5H1.46a.821.821,0,1,1,0-1.641H3.321V.821a.82.82,0,1,1,1.64,0V1.863h1.88a.821.821,0,0,1,0,1.641H6.08A8.217,8.217,0,0,1,5.071,5.111L6.59,6.542a.826.826,0,0,1,.021,1.166.817.817,0,0,1-.589.25.8.8,0,0,1-.573-.232L3.956,6.32A13.9,13.9,0,0,1,2.173,7.8a1.048,1.048,0,0,1-.432.152Zm15.569,9.509a.838.838,0,0,1-.443.465.794.794,0,0,1-.321.07.811.811,0,0,1-.753-.5l-.316-.766H12.918L12.6,17.5a.818.818,0,1,1-1.505-.64l2.345-5.587a.793.793,0,0,1,.752-.47h0a.794.794,0,0,1,.754.471l2.345,5.587A.786.786,0,0,1,17.306,17.465Zm-3.111-3.776-.593,1.4h1.187ZM9.913,3.617A3.467,3.467,0,0,1,13.36,6.759l-.4-.4A.822.822,0,0,0,11.8,7.523L13.6,9.329a.808.808,0,0,0,.572.25.75.75,0,0,0,.571-.249l1.806-1.807a.823.823,0,0,0,0-1.163.841.841,0,0,0-1.162,0l-.4.413a5.093,5.093,0,0,0-5.076-4.8.822.822,0,0,0,0,1.643ZM9.094,15.054H8.256a3.449,3.449,0,0,1-3.444-3.446V11.58l.415.415a.811.811,0,0,0,1.143,0,.824.824,0,0,0,0-1.162l-1.8-1.808a.867.867,0,0,0-1.162,0L1.6,10.832a.824.824,0,0,0,0,1.163.843.843,0,0,0,1.161,0l.415-.415v.028A5.091,5.091,0,0,0,8.256,16.7h.856a.821.821,0,0,0,.82-.821A.83.83,0,0,0,9.094,15.054Z"
            :fill="iconColor"
          />
        </g>
      </g>
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconLang",
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
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  margin-top: 3px;
}
</style>
