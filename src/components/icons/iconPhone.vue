<template>
  <iconsWrapper :width="width" :height="height" :viewBox="viewBox">
    <g id="Phone" transform="translate(9 9)">
      <path
        id="Icon_Phone"
        data-name="Icon / Phone"
        d="M12.167,18c-2.314,0-5.364-1.613-7.96-4.208A16.157,16.157,0,0,1,.493,8.311C-.587,5.378.35,3.843,1,3.189A6.752,6.752,0,0,1,2.842,1.981a2.43,2.43,0,0,1,2.868.707L7.34,4.744a2.415,2.415,0,0,1-.323,3.333l-.242.214c-.12.107-.213.189-.286.252a4.162,4.162,0,0,0,1.169,1.816,4.413,4.413,0,0,0,1.821,1.167l.062-.069c.1-.108.232-.255.4-.453a2.411,2.411,0,0,1,1.84-.852,2.377,2.377,0,0,1,1.5.527l2.054,1.628a2.342,2.342,0,0,1,.689,2.853A6.755,6.755,0,0,1,14.81,17,3.636,3.636,0,0,1,12.167,18ZM3.83,3.346a.815.815,0,0,0-.329.076,5.587,5.587,0,0,0-1.345.884c-1.409,1.41.029,5.156,3.205,8.351,2.272,2.271,4.951,3.738,6.825,3.738a1.989,1.989,0,0,0,1.5-.53,4.988,4.988,0,0,0,.888-1.35v0a.755.755,0,0,0-.247-.92l-2.065-1.638a.817.817,0,0,0-1.113.1c-.368.444-.628.722-.7.791a1.148,1.148,0,0,1-.846.3,5.079,5.079,0,0,1-3.068-1.67A6.385,6.385,0,0,1,5.069,9.311a1.621,1.621,0,0,1,.12-1.75c.079-.078.34-.3.773-.68a.815.815,0,0,0,.119-1.129l-1.612-2.1A.814.814,0,0,0,3.83,3.346Zm8.129,5.578-.068,0a.923.923,0,0,1-.77-.666,1.739,1.739,0,0,0-.485-.873A1.893,1.893,0,0,0,9.764,6.9.822.822,0,0,1,9.1,6.121a.835.835,0,0,1,.3-.714.855.855,0,0,1,.766-.177h0a3.831,3.831,0,0,1,1.683.939,3.815,3.815,0,0,1,.943,1.687.858.858,0,0,1-.827,1.068Zm2.618.2c-.025,0-.051,0-.076,0H14.5a.916.916,0,0,1-.806-.789,4.378,4.378,0,0,0-1.276-2.752A4.431,4.431,0,0,0,9.667,4.308a.836.836,0,0,1-.774-.8.831.831,0,0,1,.244-.664.88.88,0,0,1,.7-.251,6.161,6.161,0,0,1,3.81,1.781,6.041,6.041,0,0,1,1.78,3.811.871.871,0,0,1-.251.695A.839.839,0,0,1,14.577,9.128Zm2.551.165h-.043a.857.857,0,0,1-.8-.818,6.932,6.932,0,0,0-2.036-4.7,7.047,7.047,0,0,0-4.7-2.054h0a.847.847,0,0,1-.82-.8A.837.837,0,0,1,8.955.259.884.884,0,0,1,9.6,0a8.72,8.72,0,0,1,5.875,2.541h0A8.605,8.605,0,0,1,18,8.42a.81.81,0,0,1-.24.616A.892.892,0,0,1,17.128,9.293Z"
        transform="translate(-9 -9)"
        :fill="iconColor"
      />
    </g>
  </iconsWrapper>
</template>

<script>
import iconsWrapper from "@/components/icons/iconsWrapper.vue";
export default {
  name: "iconPhone",
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
