<template>
  <iconsWrapper
    :width="width"
    :height="height"
    :viewBox="viewBox"
    style="margin-bottom: 3px"
  >
    <defs>
      <clipPath id="clip-path-pin">
        <rect id="bounds" width="18" height="18" :fill="iconColor" />
      </clipPath>
    </defs>
    <g id="Pin" transform="translate(9 9)">
      <g id="Icon_Pin" data-name="Icon / Pin" transform="translate(-9 -9)">
        <g
          id="Group_2027"
          data-name="Group 2027"
          clip-path="url(#clip-path-pin)"
        >
          <path
            id="Icon_Pin-2"
            data-name="Icon / Pin"
            d="M16.992,6.624,11.42,1.033a1.006,1.006,0,0,0-.863-.27.854.854,0,0,0-.642.455L6.749,5.983a6.472,6.472,0,0,0-5.7,1.778.977.977,0,0,0,0,1.408l3.177,3.187L1.048,15.544a.975.975,0,0,0,0,1.407.974.974,0,0,0,1.4,0l3.176-3.187L8.8,16.95a.988.988,0,0,0,.7.3h0a.988.988,0,0,0,.7-.3,6.689,6.689,0,0,0,1.849-5.636l4.736-3.169a.941.941,0,0,0,.441-.647A1.083,1.083,0,0,0,16.992,6.624ZM10.048,11.2a4.391,4.391,0,0,1-.491,3.615L3.264,8.574a4.359,4.359,0,0,1,3.612-.489.953.953,0,0,0,1.091-.4l2.861-4.27L14.7,7.3l-4.227,2.778A.966.966,0,0,0,10.048,11.2Z"
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
  name: "iconPin",
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
