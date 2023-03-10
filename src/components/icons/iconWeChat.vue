<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconWechat">
        <rect
          id="color"
          width="16"
          height="15.997"
          rx="4"
          transform="translate(840 2851)"
          fill="#37474f"
          stroke="rgba(0,0,0,0)"
          stroke-width="1"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Logo_Logo_Wechat"
      data-name="Icon / Logo / Logo Wechat"
      transform="translate(-840 -2851)"
      clip-path="url(#clip-pathiconWechat)"
    >
      <g
        id="Logo_Wechat-2"
        data-name="Logo Wechat"
        transform="translate(848 2859)"
      >
        <g
          id="Icon_Logo_Logo_Wechat-2"
          data-name="Icon / Logo / Logo Wechat"
          transform="translate(-8 -8)"
        >
          <rect
            id="color-2"
            data-name="color"
            width="16"
            height="16"
            transform="translate(0 0)"
            fill="#2dc100"
          />
          <path
            id="symbol"
            d="M12.815,10a3.7,3.7,0,0,0-2.5,1.008,2.961,2.961,0,0,0-.92,2.51c-.379-.047-.723-.1-1.07-.128a.668.668,0,0,0-.363.061c-.336.19-.659.4-1.042.644.07-.318.116-.6.2-.863a.328.328,0,0,0-.149-.434A2.952,2.952,0,0,1,5.683,9.482a3.281,3.281,0,0,1,2.305-2.25A3.865,3.865,0,0,1,12.212,8.47a2.9,2.9,0,0,1,.6,1.529ZM8.355,9.6a.446.446,0,0,0-.429-.447.434.434,0,0,0-.451.419.429.429,0,0,0,.424.445A.441.441,0,0,0,8.355,9.6Zm2.326-.447a.448.448,0,0,0-.437.44.437.437,0,0,0,.448.426.434.434,0,1,0-.011-.867Zm4.31,6.882a3.3,3.3,0,0,0-.888-.373,5.019,5.019,0,0,0-.924.173,3.088,3.088,0,0,1-2.506-.817,2.542,2.542,0,0,1,.4-4.145,3.37,3.37,0,0,1,4.358.649,2.475,2.475,0,0,1-.286,3.452c-.3.265-.406.483-.214.832a.968.968,0,0,1,.06.228ZM11.5,12.658a.361.361,0,1,0,0-.722.361.361,0,1,0,0,.722Zm2.251-.721a.36.36,0,0,0-.358.345.356.356,0,0,0,.353.374.351.351,0,0,0,.357-.342A.358.358,0,0,0,13.75,11.937Z"
            transform="translate(-2.782 -3.517)"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconWeChat",
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
      default: "0 0 16 16",
    },
  },
};
</script>
