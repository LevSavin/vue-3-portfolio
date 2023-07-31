<template>
  <div class="section">
    <ul class="masonry">
      <li
        class="masonry__item"
        v-for="(row, index) in masonryRows"
        :key="index"
      >
        <MasonryRow :data="row" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import type { Ref } from "vue";
import { imagesConst } from "@/constants/common";
import MasonryRow from "@/components/partials/MasonryRow.vue";

type rowType = string[];

export default defineComponent({
  name: "Gallery",
  components: { MasonryRow },
  setup() {
    const imagesSource: Ref<string[]> = ref(imagesConst);
    const masonryRows: Ref<rowType[]> = ref([]);

    const setRows = (src: string[] = [], count = 6) => {
      let last = count;
      for (let first = 0; first < src.length; first += count, last += count) {
        const imagesArray = src.slice(first, last);
        masonryRows.value.push(imagesArray);
      }
    };

    onBeforeMount(() => {
      setRows(imagesSource.value, 6);
    });

    return { imagesSource, masonryRows };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/masonry.scss";
</style>
