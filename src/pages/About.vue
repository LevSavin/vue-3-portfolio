<template>
  <div>
    <section class="section">
      <div class="desk">
        <p class="desk__title">{{ $t("common.abbout.title") }}</p>
        <p class="desk__text">{{ $t("common.abbout.text_1") }}</p>
        <p class="desk__text">{{ $t("common.abbout.text_2") }}</p>
        <p class="desk__text">{{ $t("common.abbout.text_3") }}</p>
        <p class="desk__text">
          {{ $t("common.abbout.text_4") }}
          <a target="_blank" href="https://github.com/LevSavin/vue-3-portfolio">
            {{ $t("common.abbout.link") }}
          </a>
        </p>
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
  max-width: 992px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 24px;
  &__title {
    font-weight: 700;
    text-align: center;
  }
  &__text-bold {
    font-weight: 700;
  }
}
</style>
