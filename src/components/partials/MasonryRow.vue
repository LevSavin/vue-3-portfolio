<template>
  <ul class="masonry__row">
    <li
      class="masonry__image-wrapper"
      v-for="(image, index) in data"
      :key="image + index"
    >
      <img
        :src="`images/gallery/${image}`"
        class="masonry__image"
        loading="lazy"
        alt="demo image"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MasonryRow",
  props: {
    data: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/masonry.scss";
</style>
