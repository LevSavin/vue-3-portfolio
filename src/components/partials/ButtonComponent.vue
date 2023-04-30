<template>
  <el-button
    v-if="!isLink"
    :class="buttonClass"
    :size="size"
    @click="handle"
    :disabled="disabled"
    :type="type"
    :round="isRounded"
  >
    <component v-if="icon" :is="icon" class="btn__icon"></component>
    <span class="btn__text">{{ text }}</span>
    <component
      v-if="iconLeft"
      :is="iconLeft"
      class="btn__icon-left"
    ></component>
  </el-button>

  <router-link v-else :to="linkTo">
    <div :class="buttonClass" @click="handle">
      <component v-if="icon" :is="icon" class="btn__icon"></component>
      <span class="btn__text">{{ text }}</span>
      <component
        v-if="iconLeft"
        :is="iconLeft"
        class="btn__icon-left"
      ></component>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
const iconRefresh = defineAsyncComponent(
  () => import("@/components/icons/iconRefresh.vue")
);
const iconEye = defineAsyncComponent(
  () => import("@/components/icons/iconEye.vue")
);
const iconConfirm = defineAsyncComponent(
  () => import("@/components/icons/iconConfirm.vue")
);
const iconUpload = defineAsyncComponent(
  () => import("@/components/icons/iconUpload.vue")
);
const iconPhotoUpload = defineAsyncComponent(
  () => import("@/components/icons/iconPhotoUpload.vue")
);
const iconChecklist = defineAsyncComponent(
  () => import("@/components/icons/iconChecklist.vue")
);
const iconAddUser = defineAsyncComponent(
  () => import("@/components/icons/iconAddUser.vue")
);
const iconLock = defineAsyncComponent(
  () => import("@/components/icons/iconLock.vue")
);
const iconDownload = defineAsyncComponent(
  () => import("@/components/icons/iconDownload.vue")
);
const iconFinalTable = defineAsyncComponent(
  () => import("@/components/icons/iconFinalTable.vue")
);
const iconHot = defineAsyncComponent(
  () => import("@/components/icons/iconHot.vue")
);
const iconForm = defineAsyncComponent(
  () => import("@/components/icons/iconForm.vue")
);
const iconNewOrder = defineAsyncComponent(
  () => import("@/components/icons/iconNewOrder.vue")
);
const iconDelete = defineAsyncComponent(
  () => import("@/components/icons/iconDelete.vue")
);
const iconNews = defineAsyncComponent(
  () => import("@/components/icons/iconComparison.vue")
);
const iconComparison = defineAsyncComponent(
  () => import("@/components/icons/iconComparison.vue")
);
const iconClose = defineAsyncComponent(
  () => import("@/components/icons/iconClose.vue")
);
const iconShare = defineAsyncComponent(
  () => import("@/components/icons/iconShare.vue")
);
const iconTechDock = defineAsyncComponent(
  () => import("@/components/icons/iconTechDock.vue")
);
const iconCalc = defineAsyncComponent(
  () => import("@/components/icons/iconCalc.vue")
);
const iconSave = defineAsyncComponent(
  () => import("@/components/icons/iconSave.vue")
);
const iconStatusDanger = defineAsyncComponent(
  () => import("@/components/icons/iconStatusDanger.vue")
);
const iconStatusSuccess = defineAsyncComponent(
  () => import("@/components/icons/iconStatusSuccess.vue")
);

export default defineComponent({
  name: "buttonComponent",
  components: {
    iconRefresh,
    iconEye,
    iconConfirm,
    iconUpload,
    iconPhotoUpload,
    iconChecklist,
    iconAddUser,
    iconLock,
    iconDownload,
    iconFinalTable,
    iconHot,
    iconForm,
    iconNewOrder,
    iconDelete,
    iconNews,
    iconComparison,
    iconClose,
    iconShare,
    iconTechDock,
    iconChats,
    iconCalc,
    iconSave,
    iconStatusDanger,
    iconStatusSuccess,
  },
  emits: ["handle"],
  props: {
    buttonClass: {
      type: String,
      default: "btn-primary",
    },
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconLeft: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "large",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const handle = () => {
      emit("handle");
    };

    return {
      handle,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn {
  &__icon {
    margin-right: 5px;
  }
  &__icon-left {
    margin-left: 5px;
  }
  &__text {
    font-weight: 500;
  }
}
</style>
