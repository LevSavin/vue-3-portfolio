<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconComparisonRemove">
        <rect id="bounds" width="14" height="14" fill="#fff" />
      </clipPath>
    </defs>
    <g
      id="Comparison_Remove"
      data-name="Comparison Remove"
      transform="translate(7 7)"
    >
      <g
        id="Icon_Comparison_Remove"
        data-name="Icon / Comparison Remove"
        transform="translate(-7 -7)"
      >
        <g
          id="Group_3373"
          data-name="Group 3373"
          clip-path="url(#clip-pathiconComparisonRemove)"
        >
          <path
            id="Icon_Comparison_Remove-2"
            data-name="Icon / Comparison Remove"
            d="M14,3.087a.641.641,0,0,1-.641.641H8.468a.641.641,0,1,1,0-1.282h4.891A.641.641,0,0,1,14,3.087M14,7.9a.7.7,0,0,1-.7.7H8.85l2.076,2.767A1.644,1.644,0,0,1,9.611,14H4.391a1.644,1.644,0,0,1-1.316-2.63L5.15,8.6H2.5A2.5,2.5,0,0,1,.644,4.438L.763,4.3l-.12-.133A2.5,2.5,0,0,1,2.369,0c.046,0,.09,0,.135,0A2.5,2.5,0,0,1,4.36,4.171L4.239,4.3l.121.134a2.47,2.47,0,0,1,.5,2.5l-.1.268H13.3A.7.7,0,0,1,14,7.9ZM3.6,6.1A1.1,1.1,0,1,0,2.5,7.2,1.1,1.1,0,0,0,3.6,6.1Zm0-3.6a1.1,1.1,0,1,0-1.1,1.1A1.1,1.1,0,0,0,3.6,2.505ZM7,8.469,4.2,12.2l-.054.081v.071a.246.246,0,0,0,.246.245h5.22l.092-.009.053-.038a.241.241,0,0,0,.1-.163l0-.115Z"
            transform="translate(0)"
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
  name: "iconComparisonRemove",
  components: {
    iconsWrapper,
  },
  props: {
    iconColor: {
      type: String,
      default: "currentColor",
    },
    //ширина обёртки картинки
    width: {
      type: [Number, String],
      default: 18,
    },
    //высота обёртки картинки
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
