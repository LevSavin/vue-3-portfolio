<template>
  <div class="header__wrapper">
    <langDropdown></langDropdown>
    <div
      v-if="isMobile && !showAside"
      class="header__burger"
      @click="setIsShowAside"
    >
      <iconBurger class="link rotate_180" width="18" :height="18"></iconBurger>
    </div>

    <div class="header__menu">
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link link">
          <iconProfile
            class="dropdown__icon"
            :width="isMobile ? 18 : 18"
            :height="isMobile ? 18 : 18"
          ></iconProfile>
          <div class="header__hero-name" v-if="!isMobile">
            <p class="header__hero-title">{{ $t("common.my_name") }}</p>
            <p class="header__hero-text">
              <span>+7 999 811 46 09</span>
            </p>
          </div>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <a class="link" target="_blank" href="https://t.me/skifsw">
                <iconTelegram></iconTelegram>
                <span class="header__dropdown-text">Telegram</span>
              </a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a class="link" href="mailto:lev-savin-89@mail.ru">
                <iconMail></iconMail>
                <span class="header__dropdown-text">lev-savin-89@mail.ru</span>
              </a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a
                class="link"
                target="_blank"
                href="https://github.com/LevSavin/vue-3-portfolio"
              >
                <iconGitHub></iconGitHub>
                <span class="header__dropdown-text">GitHub</span>
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { ArrowDown } from "@element-plus/icons-vue";
import iconProfile from "@/components/icons/iconProfile.vue";
import langDropdown from "@/components/langDropdown.vue";
import iconMail from "@/components/icons/iconMail.vue";
import iconTelegram from "@/components/icons/iconTelegram.vue";
import iconGitHub from "@/components/icons/iconGitHub.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    langDropdown,
    ArrowDown,
    iconProfile,
    iconMail,
    iconTelegram,
    iconGitHub,
  },
  setup() {
    const store = useStore();
    const isMobile = computed(
      (): boolean => store.getters["settings/isMobile"]
    );
    const showAside = computed(
      (): boolean => store.getters["settings/showAside"]
    );
    const isAsideCollapsed = computed(
      (): boolean => store.getters["settings/isAsideCollapsed"]
    );

    const setIsShowAside = () => {
      store.dispatch("settings/setIsAsideCollapsed", false);
      store.dispatch("settings/setShowAside", !showAside.value);
    };

    return {
      isMobile,
      isAsideCollapsed,
      setIsShowAside,
      showAside,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  &__burger {
    height: 56px;
    width: 56px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    margin-left: 24px;
    margin-right: 6px;
    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding-left: 0px;
    padding-right: 0px;
  }
  &__hero {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__hero-name {
    padding-left: 8px;
    display: none;
    @media (min-width: 880px) {
      display: block;
    }
  }
  &__hero-title {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
  &__hero-text {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 20px;
    @media (max-width: 1200px) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 440px;
    }
  }
  &__menu {
    display: flex;
    min-height: 32px;
  }
  &__dropdown {
    &-text {
      margin-left: 8px;
    }
  }
}
</style>
