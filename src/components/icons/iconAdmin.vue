<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconAdmin">
        <rect
          id="Rectangle_2505"
          data-name="Rectangle 2505"
          width="18"
          height="18"
          :fill="iconColor"
        />
      </clipPath>
    </defs>
    <g id="Admin" transform="translate(9 9)">
      <g id="Icon_Admin" data-name="Icon / Admin" transform="translate(-9 -9)">
        <g
          id="Group_3001"
          data-name="Group 3001"
          clip-path="url(#clip-pathiconAdmin)"
        >
          <path
            id="Icon_Admin-2"
            data-name="Icon / Admin"
            d="M15.509,1.651,9.222.028a.9.9,0,0,0-.444,0L2.491,1.651a.889.889,0,0,0-.666.86V9c0,5.348,6.492,8.758,6.768,8.9a.886.886,0,0,0,.814,0c.276-.143,6.768-3.553,6.768-8.9V2.511A.889.889,0,0,0,15.509,1.651ZM9,16.093a15.54,15.54,0,0,1-3.543-2.874l.4-1.753a1.635,1.635,0,0,1,1.61-1.275H10.5a1.673,1.673,0,0,1,1.608,1.268l.408,1.788A15.57,15.57,0,0,1,9,16.093ZM7.442,7.113V6.166a1.519,1.519,0,0,1,3.037,0v.947a1.519,1.519,0,1,1-3.037,0ZM14.4,9a5.439,5.439,0,0,1-.691,2.571l-.107-.448a3.181,3.181,0,0,0-2.044-2.305l-.03-.01.017-.027a3.054,3.054,0,0,0,.493-1.644V6.19a3.054,3.054,0,1,0-6.108,0v.947a3.009,3.009,0,0,0,.493,1.644l.017.027-.03.011a3.181,3.181,0,0,0-2.044,2.3l-.094.413A5.416,5.416,0,0,1,3.6,9V3.2L9,1.8,14.4,3.2Z"
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
  name: "iconAdmin",
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
