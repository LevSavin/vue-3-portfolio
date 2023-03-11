<template>
  <div>
    <section class="section">
      <div class="desk">
        <p class="desk__title">{{ $t("common.desk.title") }}</p>
        <p class="desk__text">{{ $t("common.desk.text_1") }}</p>
        <p class="desk__text">{{ $t("common.desk.text_2") }}</p>
        <p class="desk__text">{{ $t("common.desk.text_3") }}</p>
        <p class="desk__text">
          {{ $t("common.desk.text_4") }}
          <a class="link" href="mailto:komandor@yolka.io">komandor@yolka.io</a>
        </p>
        <p class="desk__text">{{ $t("common.desk.text_5") }}</p>
        <p class="desk__text">
          <span class="desk__text-bold">{{ $t("common.desk.text_6_1") }}</span>
          <span
            >{{ $t("common.desk.text_6_2") }}
            <a class="link" href="mailto:komandor@yolka.io"
              >komandor@yolka.io</a
            ></span
          >
        </p>
        <p class="desk__text">
          <span class="desk__text-bold">{{ $t("common.desk.text_7_1") }}</span>
          <span
            >{{ $t("common.desk.text_7_2")
            }}<a class="link" href="mailto:gasyakpa@sm-komandor.ru"
              >gasyakpa@sm-komandor.ru</a
            ></span
          >
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
