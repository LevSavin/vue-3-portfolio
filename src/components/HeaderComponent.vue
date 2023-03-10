<template>
  <div class="header__wrapper">
    <langDropdown></langDropdown>

    <div class="header__menu">
      <el-dropdown @command="dropdownAction" class="dropdown">
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
            <el-dropdown-item command="counterpartyProfile">
              <iconCompany></iconCompany>
              <span class="header__dropdown-text">Моя компания</span>
            </el-dropdown-item>
            <el-dropdown-item command="userProfile">
              <iconUserSettings></iconUserSettings>
              <span class="header__dropdown-text">Мой профиль</span>
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
import iconUserSettings from "@/components/icons/iconUserSettings.vue";
import iconCompany from "@/components/icons/iconCompany.vue";
import langDropdown from "@/components/langDropdown.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    iconProfile,
    ArrowDown,
    iconUserSettings,
    iconCompany,
    langDropdown,
  },
  setup() {
    const store = useStore();
    const isMobile = computed(
      (): boolean => store.getters["settings/isMobile"]
    );

    const editUserProfile = () => {
      //router.push({ name: "ProfileUser" });
    };

    const editCounterpartyProfile = () => {
      //router.push({ name: "Profile" });
    };

    const dropdownActions = {
      userProfile: editUserProfile,
      counterpartyProfile: editCounterpartyProfile,
    };

    const dropdownAction = (command: string) => {
      dropdownActions[command]();
    };

    return {
      dropdownAction,
      editUserProfile,
      editCounterpartyProfile,
      isMobile,
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
