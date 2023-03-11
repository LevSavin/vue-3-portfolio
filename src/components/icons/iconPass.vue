<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconPass">
        <rect
          id="Rectangle_5664"
          data-name="Rectangle 5664"
          width="18"
          height="18"
          fill="none"
        />
      </clipPath>
    </defs>
    <g id="Pass" transform="translate(9 9)">
      <g id="Icon_Pass" data-name="Icon / Pass" transform="translate(-9 -9)">
        <g
          id="Group_9674"
          data-name="Group 9674"
          clip-path="url(#clip-pathiconPass)"
        >
          <path
            id="Icon_Pass-2"
            data-name="Icon / Pass"
            d="M6.909,10.133A1.893,1.893,0,1,0,4.2,10.119,3.016,3.016,0,0,0,2.573,12.8v.569a.736.736,0,0,0,.735.736H7.774a.737.737,0,0,0,.736-.736V12.8A3.018,3.018,0,0,0,6.909,10.133ZM5.561,8.383a.422.422,0,1,1-.421.422A.422.422,0,0,1,5.561,8.383ZM4.052,12.637a1.494,1.494,0,0,1,2.978,0ZM18,14.108V6.067A2.372,2.372,0,0,0,15.63,3.7H11.667V2.258a.737.737,0,0,0-.736-.736H7.069a.737.737,0,0,0-.736.736V3.7H2.37A2.372,2.372,0,0,0,0,6.067v8.041a2.373,2.373,0,0,0,2.37,2.37H15.63A2.373,2.373,0,0,0,18,14.108ZM7.8,2.993H10.2v1.44a1.2,1.2,0,0,1-2.392,0Zm8.725,11.115a.9.9,0,0,1-.9.9H2.37a.9.9,0,0,1-.9-.9V6.067a.9.9,0,0,1,.9-.9H6.437a2.666,2.666,0,0,0,5.126,0H15.63a.9.9,0,0,1,.9.9Zm-1.9-2.8H10.305a.736.736,0,1,0,0,1.471h4.323a.736.736,0,1,0,0-1.471Zm-4.323-1.138h2.28a.736.736,0,1,0,0-1.471h-2.28a.736.736,0,1,0,0,1.471Z"
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
  name: "iconPass",
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
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    viewBox: {
      type: String,
      default: "0 0 18 18",
    },
  },
};
</script>
