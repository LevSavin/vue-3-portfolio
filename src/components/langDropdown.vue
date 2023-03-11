<template>
  <el-dropdown @command="setLang" size="large">
    <span class="el-dropdown-link link">
      <iconLang></iconLang>
      <span class="lang-text">{{ $t("common.lang") }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="en">
          <div><iconFlagEn></iconFlagEn></div>
          <span class="lang-text">English</span>
        </el-dropdown-item>

        <el-dropdown-item command="ru">
          <div><iconFlagRu></iconFlagRu></div>
          <span class="lang-text">Русский</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ArrowDown } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import iconFlagEn from "@/components/icons/iconFlagEn.vue";
import iconFlagRu from "@/components/icons/iconFlagRu.vue";
import iconLang from "@/components/icons/iconLang.vue";

export default defineComponent({
  name: "langDropdown",
  components: {
    ArrowDown,
    iconFlagEn,
    iconFlagRu,
    iconLang,
  },
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const setLang = (lang: string) => {
      store.dispatch("auth/setLang", lang);
      i18n.locale.value = lang;
      document.documentElement.setAttribute("lang", lang);
    };
    return {
      setLang,
    };
  },
});
</script>

<style lang="scss" scoped>
.lang-text {
  margin-left: 8px;
}
</style>
