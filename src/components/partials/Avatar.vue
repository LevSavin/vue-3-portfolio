<template>
  <div class="avatar">
    <img class="avatar__image" src="/images/logo.png" alt="photo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  width: 48px;
  height: 48px;
  position: relative;
  overflow: hidden;
  &__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
  }
}
</style>
