<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <defs>
      <clipPath id="clip-path-unpin">
        <rect id="bounds" width="18" height="18" :fill="iconColor" />
      </clipPath>
    </defs>
    <g id="Unpin" transform="translate(9 9)">
      <g id="Icon_Unpin" data-name="Icon / Unpin" transform="translate(-9 -9)">
        <g
          id="Group_2033"
          data-name="Group 2033"
          clip-path="url(#clip-path-unpin)"
        >
          <path
            id="Icon_Unpin-2"
            data-name="Icon / Unpin"
            d="M9.011,18a.721.721,0,0,0,.739-.739l-.008-4.726,4.725.008a.721.721,0,0,0,.739-.739,6.4,6.4,0,0,0-2.661-5.14l-.03-.021.007-.036L13.651.915a.684.684,0,0,0-.107-.562.822.822,0,0,0-.582-.34L5.108,0a.757.757,0,0,0-.594.314.626.626,0,0,0-.09.578l1.158,5.74-.032.021a6.191,6.191,0,0,0-2.756,5.13.727.727,0,0,0,.742.742l4.725.008.008,4.726A.727.727,0,0,0,9.011,18Z"
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
  name: "iconUnpin",
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
