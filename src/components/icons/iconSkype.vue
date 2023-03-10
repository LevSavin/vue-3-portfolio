<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconSkype">
        <rect
          id="color"
          width="16"
          height="15.997"
          rx="4"
          transform="translate(843 2779)"
          fill="#37474f"
          stroke="rgba(0,0,0,0)"
          stroke-width="1"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Logo_Logo_Skype"
      data-name="Icon / Logo / Logo Skype"
      transform="translate(-843 -2779)"
      clip-path="url(#clip-pathiconSkype)"
    >
      <g
        id="Logo_Skype-2"
        data-name="Logo Skype"
        transform="translate(851 2787)"
      >
        <g
          id="Icon_Logo_Logo_Skype-2"
          data-name="Icon / Logo / Logo Skype"
          transform="translate(-9 -9)"
        >
          <rect
            id="color-2"
            data-name="color"
            width="18"
            height="18"
            fill="#fff"
          />
          <path
            id="symbol"
            d="M16.854,12.564c0,.02-.006.039-.01.06l-.019-.114c.011.017.019.036.029.054a5.383,5.383,0,0,0,.088-.966,5.321,5.321,0,0,0-5.325-5.325,5.393,5.393,0,0,0-1.009.1h0l.055.029-.112-.017.057-.011a3.151,3.151,0,0,0-4.235,4.312c0-.019.006-.039.01-.058l.019.111c-.01-.017-.019-.035-.029-.053a5.379,5.379,0,0,0-.08.917,5.323,5.323,0,0,0,5.326,5.326,5.388,5.388,0,0,0,.933-.083l-.055-.03.114.02-.059.01a3.151,3.151,0,0,0,4.3-4.277Zm-5.215,2.3c-1.892,0-2.738-.93-2.738-1.627a.6.6,0,0,1,.628-.609c.81,0,.6,1.163,2.11,1.163.773,0,1.2-.42,1.2-.849,0-.259-.127-.545-.637-.67l-1.682-.42c-1.355-.34-1.6-1.072-1.6-1.761,0-1.43,1.346-1.967,2.61-1.967,1.165,0,2.537.643,2.537,1.5a.615.615,0,0,1-.682.582c-.691,0-.564-.957-1.955-.957-.691,0-1.073.313-1.073.76s.545.589,1.019.7l1.246.276c1.364.3,1.71,1.1,1.71,1.851C14.331,13.993,13.439,14.86,11.639,14.86Zm.857,1.952.055.03.059-.01Zm4.348-4.188c0-.02.006-.04.01-.06s-.019-.037-.029-.054Zm-10.462-2c0,.019-.006.039-.01.058s.019.036.029.053ZM10.662,6.4l-.055-.029-.057.011Z"
            transform="translate(-2.615 -2.625)"
            fill="#00aff0"
          />
        </g>
      </g>
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconSkype",
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
