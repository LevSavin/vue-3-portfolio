<template>
  <div>
    <div class="aside custom-scroll" v-if="showAside">
      <div class="aside__block-hero">
        <h3 v-if="!isAsideCollapsed" class="aside__title">
          {{ $t("common.menu.main_menu") }}
        </h3>
        <div v-if="!isMobile">
          <div
            v-if="!isAsideCollapsed"
            class="aside__burger link"
            @click="setIsCollapse"
          >
            <iconBurger></iconBurger>
          </div>
          <div v-else class="aside__burger link" @click="setIsCollapse">
            <iconBurger class="rotate_180"></iconBurger>
          </div>
        </div>
        <div v-else>
          <div class="aside__burger link" @click="setIsShowAside">
            <iconBurger></iconBurger>
          </div>
        </div>
      </div>

      <el-menu class="aside__menu" :collapse="isAsideCollapsed" :router="false">
        <el-menu-item index="/" class="aside__menu-item">
          <router-link index="/" class="aside__link" :to="{ path: '/' }">
            <asideItem
              :isCollapse="isAsideCollapsed"
              icon="iconPass"
              :text="$t('common.menu.about')"
            ></asideItem>
          </router-link>
        </el-menu-item>

        <el-menu-item index="/gallery" class="aside__menu-item">
          <router-link class="aside__link" :to="{ path: '/gallery' }">
            <asideItem
              :isCollapse="isAsideCollapsed"
              icon="iconCardViewToggle"
              :text="$t('common.menu.gallery')"
            ></asideItem>
          </router-link>
        </el-menu-item>

        <el-divider></el-divider>
        <!-- <span class="aside_submenu-text">
          {{ $t("common.menu.examples_functionality") }}
        </span> -->

        <el-menu-item index="/editable-dynamic-table" class="aside__menu-item">
          <router-link
            class="aside__link"
            :to="{ path: '/editable-dynamic-table' }"
          >
            <asideItem
              :isCollapse="isAsideCollapsed"
              icon="iconFinalTable"
              :text="$t('common.menu.editable_dynamic_table')"
            ></asideItem>
          </router-link>
        </el-menu-item>

        <el-menu-item index="/dynamic-validation" class="aside__menu-item">
          <router-link
            class="aside__link"
            :to="{ path: '/dynamic-validation' }"
          >
            <asideItem
              :isCollapse="isAsideCollapsed"
              icon="iconForm"
              :text="$t('common.menu.dynamic_validation')"
            ></asideItem>
          </router-link>
        </el-menu-item>
      </el-menu>

      <div v-if="!isAsideCollapsed">
        <el-divider></el-divider>
        <div class="aside__block">
          <p>
            <a class="link" target="_blank" href="https://t.me/skifsw">
              <iconTelegram></iconTelegram>
              <span class="aside__additional-text">Telegram</span>
            </a>
          </p>
          <p>
            <a class="link" href="tel:+79998114609">
              <iconPhone></iconPhone>
              <span class="aside__additional-text">+7 (999)-811-46-09</span>
            </a>
          </p>
          <p>
            <a class="link" href="mailto:lev-savin-89@mail.ru">
              <iconMail></iconMail>
              <span class="aside__additional-text">lev-savin-89@mail.ru</span>
            </a>
          </p>
          <p>
            <a
              class="link"
              target="_blank"
              href="https://github.com/LevSavin/vue-3-portfolio"
            >
              <iconGitHub></iconGitHub>
              <span class="aside__additional-text">GitHub</span>
            </a>
          </p>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import iconBurger from "@/components/icons/iconBurger.vue";
import iconForm from "@/components/icons/iconForm.vue";
import iconPhone from "@/components/icons/iconPhone.vue";
import iconMail from "@/components/icons/iconMail.vue";
import iconTelegram from "@/components/icons/iconTelegram.vue";
import iconGitHub from "@/components/icons/iconGitHub.vue";
import asideItem from "@/components/partials/asideParts/AsideItem.vue";

export default defineComponent({
  name: "AsideComponent",
  components: {
    iconBurger,
    iconForm,
    iconPhone,
    iconMail,
    iconTelegram,
    iconGitHub,
    asideItem,
  },
  setup() {
    const route = useRoute();
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

    const setCollapseAside = () => {
      const value = localStorage.getItem("isAsideCollapse");
      if (value) {
        const result = JSON.parse(value);
        store.dispatch("settings/setIsAsideCollapsed", result);
      }
    };
    setCollapseAside();

    const setIsCollapse = () => {
      store.dispatch("settings/setIsAsideCollapsed", !isAsideCollapsed.value);
      localStorage.setItem(
        "isAsideCollapse",
        JSON.stringify(isAsideCollapsed.value)
      );
    };

    const setIsShowAside = () => {
      store.dispatch("settings/setIsAsideCollapsed", false);
      store.dispatch("settings/setShowAside", !showAside.value);
    };

    watch(route, () => {
      if (isMobile.value) {
        store.dispatch("settings/setShowAside", false);
      }
    });

    return {
      isAsideCollapsed,
      setIsCollapse,
      isMobile,
      showAside,
      setIsShowAside,
    };
  },
});
</script>

<style lang="scss" scoped>
.aside {
  height: calc(100vh - 64px);
  overflow-y: scroll;
  overflow-x: hidden;
  & .el-menu-item {
    display: block !important;
  }
  &__link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
  &__title {
    line-height: 16px;
    height: 16px;
  }
  &__icon {
    margin-right: 4px;
    margin-bottom: 3px;
  }
  &__menu {
    border: none;
    margin-left: 24px;
  }
  &__block {
    margin-left: 20px;
  }
  &__block-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }
  &_submenu-text {
    padding-right: 42px;
  }
  &__burger {
    height: 56px;
    width: 56px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    margin-left: 5px;
    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
  &__additional-text {
    margin-left: 8px;
  }
}
</style>
