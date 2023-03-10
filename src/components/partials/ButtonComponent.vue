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
import { defineComponent } from "vue";
import iconEye from "@/components/icons/iconEye.vue";
import iconConfirm from "@/components/icons/iconConfirm.vue";
import iconUpload from "@/components/icons/iconUpload.vue";
import iconPhotoUpload from "@/components/icons/iconPhotoUpload.vue";
import iconChecklist from "@/components/icons/iconChecklist.vue";
import iconAddUser from "@/components/icons/iconAddUser.vue";
import iconLock from "@/components/icons/iconLock.vue";
import iconDownload from "@/components/icons/iconDownload.vue";
import iconFinalTable from "@/components/icons/iconFinalTable.vue";
import iconHot from "@/components/icons/iconHot.vue";
import iconForm from "@/components/icons/iconForm.vue";
import iconNewOrder from "@/components/icons/iconNewOrder.vue";
import iconDelete from "@/components/icons/iconDelete.vue";
import iconNews from "@/components/icons/iconComparison.vue";
import iconComparison from "@/components/icons/iconComparison.vue";
import iconClose from "@/components/icons/iconClose.vue";
import iconShare from "@/components/icons/iconShare.vue";
import iconTechDock from "@/components/icons/iconTechDock.vue";
import iconDocumentPreview from "@/components/icons/iconDocumentPreview.vue";

export default defineComponent({
  name: "ButtonComponent",
  components: {
    iconEye,
    iconDocumentPreview,
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
