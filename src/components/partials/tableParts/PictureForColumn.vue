<template>
  <div class="column__image-wrapper">
    <img
      class="column__image"
      :src="pictureUrl"
      alt="photo"
      width="80"
      height="30"
    />
    <div
      class="column__buttons-wrap"
      @mouseover="isMouseover = true"
      @mouseleave="isMouseover = false"
    >
      <div
        :class="{
          'column__button-full': isEditable === false,
        }"
        class="column__button"
        v-show="isMouseover"
        @click.stop="pictureOperation('showPreviewModal')"
      >
        <iconSearch></iconSearch>
      </div>
      <div
        class="column__button"
        v-if="isEditable"
        v-show="isMouseover"
        @click.stop="pictureOperation('deletePictureModal')"
      >
        <iconDelete></iconDelete>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import iconSearch from "@/components/icons/iconSearch.vue";
import iconDelete from "@/components/icons/iconDelete.vue";
import { showPreviewPictureType } from "@/types/common";

export default defineComponent({
  name: "PictureForColumn",
  components: { iconSearch, iconDelete },
  emits: ["pictureOperation"],
  props: {
    id: {
      type: Number,
      default: null,
    },
    big: {
      type: String,
      default: "",
    },
    small: {
      type: String,
      default: "",
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isMouseover = ref(false);

    const pictureOperation = (operation: string) => {
      const params: showPreviewPictureType = {
        operation,
        pictureId: props.id,
      };
      emit("pictureOperation", params);
    };

    const pictureUrl = computed(() => {
      return props.small;
    });

    return { pictureOperation, isMouseover, pictureUrl };
  },
});
</script>

<style lang="scss" scoped>
.column {
  &__image-wrapper {
    position: relative;
    overflow: hidden;
    width: 80px;
    height: 30px;
    border-radius: 6px;
    margin-right: 4px;
  }
  &__image {
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  &__buttons-wrap {
    position: relative;
    display: flex;
    height: 100%;
  }
  &__button {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    background-color: $gray-transparent;
    &:hover {
      background-color: $gray-transparent-hover;
    }
  }
  &__button-full {
    width: 100%;
  }
}
</style>
