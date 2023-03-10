<template>
  <el-dialog
    v-model="isShow"
    :customClass="modalClass"
    :show-close="false"
    width="auto"
  >
    <template #header>
      <div class="modal__header">
        <span class="modal__title">
          {{ titleText }}
        </span>
        <iconClose class="modal__close" @click="hideAgreement"></iconClose>
      </div>
      <el-divider class="modal__divider"></el-divider>
    </template>

    <div class="modal__body">
      <p class="modal__text">{{ text }}</p>
    </div>

    <div class="modal__footer">
      <buttonComponent
        @click="hideAgreement"
        buttonClass="btn-plain"
        :text="btnCloseText"
      ></buttonComponent>
      <buttonComponent
        @handle="confirm"
        :text="btnConfirmText"
      ></buttonComponent>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from "vue";
import iconClose from "@/components/icons/iconClose.vue";
import buttonComponent from "@/components/partials/ButtonComponent.vue";

export default defineComponent({
  name: "ConfirmModal",
  components: {
    iconClose,
    buttonComponent,
  },
  emits: ["confirm"],
  props: {
    modalClass: {
      type: String,
      default: "modal-confirm",
    },
    showModalToggleProps: {
      type: Boolean,
      default: false,
    },
    titleText: {
      type: String,
      default: "",
    },
    text: {
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
    data: {
      type: [Object, String, Number],
    },
  },
  setup(props, { emit }) {
    const showModalToggle = toRefs(props).showModalToggleProps;
    let isShow = ref(false);

    const showAgreement = (): void => {
      isShow.value = true;
    };

    const hideAgreement = (): void => {
      isShow.value = false;
    };

    const confirm = (): void => {
      isShow.value = false;
      emit("confirm", props.data);
    };

    watch(showModalToggle, () => {
      isShow.value = true;
    });

    return {
      showModalToggle,
      isShow,
      showAgreement,
      hideAgreement,
      confirm,
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
    justify-content: flex-end;
  }
  &__body {
    margin-bottom: 42px;
  }
  &__text {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
