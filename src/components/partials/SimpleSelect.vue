<template>
  <el-select
    class="select"
    v-model="form.id"
    :placeholder="placeholder"
    @change="handle"
    :disabled="disabled"
  >
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="getLabel(item)"
      :value="item.id"
    />
  </el-select>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SimpleSelect",
  emits: ["handle"],
  props: {
    options: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    // сюда помещаем айдишник, если это редактирование ранее выбранной опции
    searchProps: {
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    labelRu: {
      type: String,
      default: "name_ru",
    },
    labelEn: {
      type: String,
      default: "name_en",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const i18n = useI18n();

    const form = reactive({
      id: "",
    });

    const getLabel = (item) => {
      if (i18n.locale.value === "en") {
        return item[props.labelEn];
      }
      return item[props.labelRu];
    };

    const handle = () => {
      emit("handle", form.id);
    };

    watch(
      () => props.searchProps,
      (newValue) => {
        form.id = newValue;
      }
    );

    onMounted(() => {
      if (props.searchProps !== "") {
        form.id = props.searchProps;
      }
    });

    return {
      form,
      getLabel,
      handle,
    };
  },
});
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
}
</style>
