<template>
  <div>
    <section class="section">
      <div class="desk">
        <p class="desk__title">{{ $t("common.desk.title") }}</p>
        <p class="desk__text">{{ $t("common.desk.text_1") }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
}
.desk {
  max-width: 1352px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  &__title {
    font-weight: 700;
    text-align: center;
  }
  &__text-bold {
    font-weight: 700;
  }
}
</style>
