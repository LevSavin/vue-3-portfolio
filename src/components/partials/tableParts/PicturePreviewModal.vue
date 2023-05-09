<template>
  <el-dialog
    v-model="isShow"
    @open="onModalOpen"
    class="modal-preview"
    :show-close="false"
    top="40px"
    width="auto"
  >
    <template #header>
      <div class="modal__header">
        <span class="modal__title">{{ $t("labels.table.photo") }}</span>
        <div class="modal__icon-btn" @click="close">
          <iconClose width="18" height="18"></iconClose>
        </div>
      </div>
    </template>

    <div class="modal__body">
      <div class="modal__content" v-if="currentPicture">
        <div class="modal__view-box">
          <div class="modal__nav-wrapper modal__nav-wrapper--left">
            <div
              class="modal__icon-btn"
              @click="setPreviousPicture"
              v-if="form.photos.length > 1"
            >
              <iconLeft
                class="modal__icon-left"
                width="18"
                height="18"
              ></iconLeft>
            </div>
          </div>

          <div class="modal__image-wrapper">
            <img class="modal__image" :src="currentPicture.big" alt="photo" />
          </div>

          <div class="modal__nav-wrapper">
            <div
              class="modal__icon-btn"
              @click="setNextPicture"
              v-if="form.photos.length > 1"
            >
              <iconLeft width="16" height="16"></iconLeft>
            </div>
          </div>
        </div>

        <div class="modal__footer-wrap">
          <div class="modal__footer">
            <div class="modal__delete">
              <button
                type="button"
                class="modal__delete-btn"
                @click="deletePicture"
                v-if="isEditable"
              >
                <span class="modal__delete-text">
                  {{ $t("btns.delete_photo") }}
                </span>
                <iconDelete></iconDelete>
              </button>
            </div>
            <div v-if="form.photos">
              <div v-if="form.photos.length > 1" class="modal__pagination">
                <button
                  type="button"
                  class="modal__pagination-wrap"
                  v-for="(photo, index) in form.photos"
                  :key="index"
                  @click="setCurrentPicture(photo)"
                >
                  <div
                    class="modal__pagination-item"
                    :class="{
                      'modal__pagination-item--active':
                        photo.id === form.currentPictureId,
                    }"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { showError } from "@/utils/errorsInterceptor";
import iconClose from "@/components/icons/iconClose.vue";
import iconLeft from "@/components/icons/iconLeft.vue";
import iconDelete from "@/components/icons/iconDelete.vue";

type formType = {
  currentPictureId: number | null;
  photos: any[];
};

export default defineComponent({
  name: "PicturePreviewModal",
  emits: ["reload"],
  components: { iconClose, iconLeft, iconDelete },
  props: {
    dataProps: {
      type: Object,
      default: () => ({
        data: { photo: [], pictureId: null },
      }),
    },
    // id позиции
    item_id: {
      type: String,
      default: null,
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const axios: any = inject("axios");
    const { t } = useI18n({});
    let isShow = ref(false);

    const form: formType = reactive({
      currentPictureId: null,
      photos: [],
    });

    const deletePicture = async () => {
      if (!props.isEditable) {
        return;
      }
      const url = `/image/${props.item_id}/${form.currentPictureId}/`;
      const params = props.dataProps.params;
      params["photo_id"] = form.currentPictureId;
      axios
        .delete(url, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: props.dataProps.params,
        })
        .then(() => {
          emit("reload");
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
        })
        .catch((error) => {
          showError(error);
        });
      deleteLocalPicture();
    };

    const deleteLocalPicture = () => {
      const prevIndex = currentIndex.value;
      setNextPicture();
      form.photos.splice(prevIndex, 1);
      if (form.photos.length === 0) {
        close();
      }
    };

    const setNextPicture = () => {
      if (form.photos.length > currentIndex.value + 1) {
        form.currentPictureId = form.photos[currentIndex.value + 1].id;
      } else {
        form.currentPictureId = form.photos[0].id;
      }
    };

    const setPreviousPicture = () => {
      if (currentIndex.value > 0) {
        form.currentPictureId = form.photos[currentIndex.value - 1].id;
      } else {
        form.currentPictureId = form.photos[form.photos.length - 1].id;
      }
    };

    const setCurrentPicture = (photo) => {
      form.currentPictureId = photo.id;
    };

    const close = () => {
      isShow.value = false;
    };

    const modalRef: any = ref(null);

    const currentPicture = computed(() => {
      if (form.photos.length > 0 && form.currentPictureId) {
        return form.photos.filter(
          (photo) => photo.id === form.currentPictureId
        )[0];
      }
      return null;
    });

    const currentIndex = computed(() => {
      return form.photos.indexOf(currentPicture.value);
    });

    // вызывается через ref из вышестоящего компонента
    const showModal = () => {
      isShow.value = true;
    };

    const onModalOpen = (): void => {
      form.photos = [...props.dataProps.data.photo];
    };

    watch(
      () => props.dataProps.data?.pictureId,
      (newValue) => {
        form.currentPictureId = newValue;
      }
    );

    // если фотографий не осталось, закрыть окно
    watch(
      () => form.photos,
      (newValue) => {
        if (newValue.length === 0) {
          isShow.value = false;
        }
      }
    );

    return {
      close,
      modalRef,
      showModal,
      deletePicture,
      isShow,
      currentPicture,
      form,
      setNextPicture,
      setPreviousPicture,
      setCurrentPicture,
      currentIndex,
      onModalOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/tech/pictureModal.scss";
</style>
