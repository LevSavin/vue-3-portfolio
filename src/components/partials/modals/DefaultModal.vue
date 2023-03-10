<template>
  <el-dialog
    @close="modalClose"
    @open="modalOpen"
    v-model="isShow"
    :class="modalClass"
    :show-close="false"
    top="40px"
    width="auto"
  >
    <template #header>
      <div class="modal__header">
        <span class="modal__title">
          {{ titleText }}
        </span>
        <iconClose class="modal__close" @click="hide"></iconClose>
      </div>
      <el-divider class="modal__divider"></el-divider>
    </template>

    <div :class="modalWrapperClass">
      <div :class="modalBodyClass">
        <slot></slot>
      </div>
    </div>

    <template #footer>
      <div :class="modalWrapperClass">
        <el-divider></el-divider>
        <slot name="footer" />
        <div class="modal__footer" v-if="!isCustomFooter">
          <el-button class="btn-plain" size="large" @click="hide">
            {{ btnCloseText }}
          </el-button>
          <buttonComponent
            :icon="btnConfirmIcon"
            @handle="confirm"
            :text="btnConfirmText"
            :disabled="isConfirmDisabled"
          ></buttonComponent>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from "vue";
import buttonComponent from "@/components/partials/ButtonComponent.vue";

export default defineComponent({
  name: "DefaultModal",
  components: {
    buttonComponent,
  },
  emits: ["confirm", "close", "open"],
  props: {
    isShowToggleProps: {
      type: Boolean,
      default: false,
    },
    isHandConfirmClose: {
      type: Boolean,
      default: false,
    },
    handCloseToggleProps: {
      type: Boolean,
      default: false,
    },
    isConfirmDisabled: {
      type: Boolean,
      default: false,
    },
    titleText: {
      type: String,
      default: "",
    },
    btnCloseText: {
      type: String,
      default: "",
    },
    btnConfirmText: {
      type: String,
      default: "",
    },
    btnConfirmIcon: {
      type: String,
      default: "",
    },
    modalClass: {
      type: String,
      default: "modal-default",
    },
    modalWrapperClass: {
      type: String,
      default: "modal__wrapper--default",
    },
    modalBodyClass: {
      type: String,
      default: "modal__body--default",
    },
    isCustomFooter: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const showToggle = toRefs(props).isShowToggleProps;
    let isShow = ref(false);

    const showAgreement = (): void => {
      isShow.value = true;
    };

    const hide = (): void => {
      isShow.value = false;
    };

    const modalClose = (): void => {
      emit("close");
      isShow.value = false;
    };

    const modalOpen = (): void => {
      emit("open");
    };

    const confirm = (): void => {
      emit("confirm");
      if (props.isHandConfirmClose) {
        return;
      }
      isShow.value = false;
    };

    watch(showToggle, () => {
      isShow.value = true;
    });

    watch(
      () => props.handCloseToggleProps,
      () => {
        isShow.value = false;
      }
    );

    return {
      showToggle,
      isShow,
      showAgreement,
      hide,
      confirm,
      modalClose,
      modalOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
  }
  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
  &__close {
    cursor: pointer;
  }
  &__divider {
    margin-top: 24px;
    margin-bottom: 0px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
