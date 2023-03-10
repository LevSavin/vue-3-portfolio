<template>
  <div>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blank-layout",
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
