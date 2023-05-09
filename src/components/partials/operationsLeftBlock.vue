<template>
  <div class="buttons__wrapper">
    <el-button-group class="ml-4" size="small">
      <el-button type="primary" @click="handle('edit')" v-if="isShow('edit')">
        <iconEdit></iconEdit>
      </el-button>
      <el-button type="primary" @click="handle('add')" v-if="isShow('add')">
        <iconPlus></iconPlus>
      </el-button>
      <el-button type="primary" @click="handle('copy')" v-if="isShow('copy')">
        <iconCopy></iconCopy>
      </el-button>
      <el-button type="primary" @click="handle('view')" v-if="isShow('view')">
        <iconEye></iconEye>
      </el-button>
      <el-button
        type="primary"
        @click="handle('delete')"
        v-if="isShow('delete')"
      >
        <iconDelete></iconDelete>
      </el-button>
      <el-button type="primary" @click="handle('more')" v-if="isShow('more')">
        <iconOpen></iconOpen>
        <span class="buttons__text">{{ $t("btns.more") }}</span>
      </el-button>
      <el-button
        type="primary"
        @click="handle('download')"
        v-if="isShow('download')"
      >
        <iconDownload></iconDownload>
      </el-button>
    </el-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconEdit from "@/components/icons/iconEdit.vue";
import iconPlus from "@/components/icons/iconPlus.vue";
import iconCopy from "@/components/icons/iconCopy.vue";
import iconEye from "@/components/icons/iconEye.vue";
import iconDelete from "@/components/icons/iconDelete.vue";
import iconOpen from "@/components/icons/iconOpen.vue";
import iconDownload from "@/components/icons/iconDownload.vue";

export type leftBlockOperationType =
  | "edit"
  | "add"
  | "copy"
  | "delete"
  | "more"
  | "view"
  | "download";

export default defineComponent({
  name: "operationsLeftBlock",
  emits: ["operationsLeftHandle"],
  components: {
    iconEdit,
    iconCopy,
    iconDelete,
    iconOpen,
    iconPlus,
    iconDownload,
    iconEye,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    operations: {
      type: Array,
      default: () => [],
    },
    isShowOperations: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const handle = (operation) => {
      emit("operationsLeftHandle", operation, props.data);
    };

    const isShow = (name) => {
      if (props.operations.includes(name)) {
        if (
          Object.prototype.hasOwnProperty.call(props.isShowOperations, name)
        ) {
          return props.isShowOperations[name];
        }
        return true;
      }
      return false;
    };

    return {
      handle,
      isShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.buttons {
  &__wrapper {
    display: flex;
    justify-content: center;
  }
  &__text {
    margin-left: 5px;
  }
}
</style>
