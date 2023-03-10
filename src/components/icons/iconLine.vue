<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <defs>
      <clipPath id="clip-pathiconLine">
        <rect
          id="color"
          width="16"
          height="15.997"
          rx="4"
          transform="translate(907 2958)"
          fill="#37474f"
          stroke="rgba(0,0,0,0)"
          stroke-width="1"
        />
      </clipPath>
    </defs>
    <g
      id="Icon_Logo_Logo_Line"
      data-name="Icon / Logo / Logo Line"
      transform="translate(-907 -2958)"
      clip-path="url(#clip-pathiconLine)"
    >
      <g id="Logo_Line-2" data-name="Logo Line" transform="translate(915 2966)">
        <g
          id="Icon_Logo_Logo_Line-2"
          data-name="Icon / Logo / Logo Line"
          transform="translate(-8 -8)"
        >
          <rect
            id="color-2"
            data-name="color"
            width="16"
            height="16"
            fill="#06c755"
          />
          <path
            id="symbol"
            d="M11.278,7c-2.6,0-4.723,1.719-4.723,3.833,0,1.894,1.682,3.481,3.949,3.781.155.034.364.1.417.233a.98.98,0,0,1,.016.427l-.068.4c-.021.119-.1.467.409.255a15.232,15.232,0,0,0,3.71-2.742A3.412,3.412,0,0,0,16,10.833C16,8.719,13.882,7,11.278,7ZM9.609,11.965a.088.088,0,0,1-.089.089l0,0H8.194a.088.088,0,0,1-.089-.089V9.9a.088.088,0,0,1,.089-.088h.337A.089.089,0,0,1,8.62,9.9v1.638h.9a.089.089,0,0,1,.089.089Zm.8,0a.09.09,0,0,1-.09.091H9.985a.09.09,0,0,1-.09-.091V9.9a.09.09,0,0,1,.09-.09h.335a.09.09,0,0,1,.09.09Zm2.279,0a.089.089,0,0,1-.089.088h-.333l-.024,0h-.014l0,0h0l-.005,0a.084.084,0,0,1-.023-.023l-.944-1.275v1.236a.088.088,0,0,1-.089.089h-.335a.088.088,0,0,1-.089-.089V9.915a.088.088,0,0,1,.089-.089H11.2l.005,0h0l.005,0h0l.005,0,.005.005a.042.042,0,0,1,.007.009l.943,1.274V9.9a.088.088,0,0,1,.089-.088H12.6a.089.089,0,0,1,.087.09Zm1.829-1.719a.089.089,0,0,1-.089.088h-.9v.348h.9a.089.089,0,0,1,.089.089V11.1a.089.089,0,0,1-.089.089h-.9v.348h.9a.089.089,0,0,1,.089.089v.335a.089.089,0,0,1-.085.092H13.1a.088.088,0,0,1-.089-.089V9.9a.088.088,0,0,1,.089-.088h1.328a.089.089,0,0,1,.089.088Z"
            transform="translate(-3.277 -3.5)"
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
  name: "iconLine",
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
