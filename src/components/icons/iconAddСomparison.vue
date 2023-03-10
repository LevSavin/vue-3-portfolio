<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathAdd_Сomparison">
        <rect
          id="bounds"
          width="18"
          height="18"
          transform="translate(0 0)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Add_Сomparison_Orders"
      data-name="Add Сomparison Orders"
      transform="translate(9 9)"
    >
      <g
        id="Icon_Add_Сomparison_Orders"
        data-name="Icon / Add Сomparison Orders"
        transform="translate(-9 -9)"
      >
        <g
          id="Group_9681"
          data-name="Group 9681"
          transform="translate(0 0)"
          clip-path="url(#clip-pathAdd_Сomparison)"
        >
          <path
            id="Icon_Add_Сomparison_Orders-2"
            data-name="Icon / Add Сomparison Orders"
            d="M1.35,6.539a2.008,2.008,0,0,0-.774,1.59v7.85a2.035,2.035,0,0,0,.592,1.429A2.014,2.014,0,0,0,2.6,18H15.4a2.014,2.014,0,0,0,1.431-.592,2.035,2.035,0,0,0,.592-1.429V2.023A2.022,2.022,0,0,0,15.524,0c-.05,0-.1,0-.145,0a1.987,1.987,0,0,0-1.273.47l-4.3,3.577-.056-.023-2.3-.961a2.034,2.034,0,0,0-.775-.155,2.088,2.088,0,0,0-.273.019,2.011,2.011,0,0,0-.975.412ZM6.625,4.582l.165.069,3.32,1.383L15.7,1.377v14.9H2.3v-8.3l.057-.047Zm6.344,6.773a.825.825,0,0,1-.824.824H9.825V14.5a.825.825,0,1,1-1.65,0v-2.32H5.856a.824.824,0,1,1,0-1.648H8.175V8.211a.825.825,0,1,1,1.65,0v2.32h2.32a.825.825,0,0,1,.824.824"
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
  name: "iconAddСomparison",
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
