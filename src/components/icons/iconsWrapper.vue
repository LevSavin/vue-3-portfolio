<template>
  <div class="wrapper" :style="iconWrapperStyle">
    <svg
      v-if="src === ''"
      class="image"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      :id="id"
    >
      <slot />
    </svg>
    <img v-else class="image" :src="src" alt="icon" />
  </div>
</template>

<script>
import { toRefs, computed } from "vue";

export default {
  name: "iconsWrapper",
  props: {
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
    id: {
      type: String,
      default: "icon",
    },
    src: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const { width, height } = toRefs(props);

    const iconWrapperStyle = computed(() => {
      return `width: ${+width.value}px; height:${+height.value}px;`;
    });

    return {
      iconWrapperStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  overflow: hidden;
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
}
</style>
