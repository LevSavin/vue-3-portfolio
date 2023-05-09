<template>
  <el-upload
    ref="uploadRef"
    class="column"
    :class="!uploadPictureColumnData.isEditable ? 'upload-hidden' : ''"
    drag
    :multiple="true"
    action="#"
    :auto-upload="false"
    :limit="photoLimit"
    :show-file-list="false"
    disabled
  >
    <div class="column__wrapper">
      <div v-if="data.photo && data.photo.length !== 0" class="column__wraper">
        <div v-if="data.photo.length === 1" class="column__wrap">
          <pictureForColumn
            @pictureOperation="pictureOperation"
            :isEditable="uploadPictureColumnData.isEditable"
            v-for="(photo, index) in data.photo"
            :key="index"
            v-bind="photo"
          ></pictureForColumn>
          <div class="column__blank"></div>
        </div>

        <div v-else-if="data.photo.length === 2" class="column__wrap">
          <pictureForColumn
            @pictureOperation="pictureOperation"
            :isEditable="uploadPictureColumnData.isEditable"
            v-for="(photo, index) in data.photo"
            :key="index"
            v-bind="photo"
          ></pictureForColumn>
        </div>

        <div v-else-if="data.photo.length > 2" class="column__wrap">
          <pictureForColumn
            @pictureOperation="pictureOperation"
            :isEditable="uploadPictureColumnData.isEditable"
            v-bind="data.photo[0]"
          ></pictureForColumn>
          <button class="link column__icon-wrap" @click.stop="showPreviewMore">
            <span>
              {{ $t("common.more") + " " + (data.photo.length - 1) }}
            </span>
            <div class="column__icon">
              <iconEye v-show="false"></iconEye>
              <iconEye></iconEye>
            </div>
          </button>
        </div>
      </div>
    </div>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import pictureForColumn from "@/components/partials/tableParts/PictureForColumn.vue";
import {
  uploadPictureColumnDataType,
  showPreviewPictureType,
} from "@/types/common";

export default defineComponent({
  name: "TableUploadPictureColumn",
  emits: ["pictureOperation", "reload"],
  components: {
    pictureForColumn,
  },
  props: {
    data: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
    column: {
      type: String,
      default: "",
    },
    uploadPictureColumnData: {
      type: Object as PropType<uploadPictureColumnDataType>,
      default: () => ({
        isEditable: false,
      }),
    },
  },
  setup(props, { emit }) {
    const pictureOperation = (handleData: showPreviewPictureType) => {
      const params = {
        column: props.column,
        ...handleData,
        ...props.data,
        photo: props.data.photo,
      };
      emit("pictureOperation", params);
    };

    const showPreviewMore = () => {
      // показать больше картинок начиная со второй
      const params: showPreviewPictureType = {
        operation: "showPreviewModal",
        pictureId: props.data.photo[1].id,
      };
      pictureOperation(params);
    };

    const photoLimit = computed(() => {
      if (
        Object.prototype.hasOwnProperty.call(props.data, "photo") &&
        props.data.photo
      ) {
        return 3 - props.data?.photo.length;
      }
      return 3;
    });

    const uploadModalRef: any = ref(null);

    return {
      uploadModalRef,
      pictureOperation,
      showPreviewMore,
      photoLimit,
    };
  },
});
</script>

<style lang="scss" scoped>
.column {
  &__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    height: 40px;
  }
  &__text {
    margin-right: 10px;
  }
  &__button {
    margin-bottom: 6px;
    margin-right: 6px;
  }
  &__divider {
    height: 30px !important;
    margin-right: 11px;
  }
  &__wraper {
    display: flex;
  }
  &__wrap {
    display: flex;
    &--compensator {
      margin-right: -4px;
    }
  }
  &__icon {
    margin-left: 8px;
    &-wrap {
      background-color: transparent;
      width: 80px;
      height: 30px;
    }
  }
  &__upload-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__blank {
    width: 80px;
    height: 30px;
  }
}
</style>
