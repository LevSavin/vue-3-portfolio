<template>
  <div>
    <div class="aside__link-wrap" v-if="!isCollapse">
      <component class="aside__icon link" :is="icon"></component>
      <span>{{ text }}</span>
    </div>
    <el-tooltip v-else placement="right" effect="dark" :content="text">
      <div class="aside__icon-mobile link">
        <component :is="icon"></component>
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconDashboard from "@/components/icons/iconDashboard.vue";
import iconTechDock from "@/components/icons/iconTechDock.vue";
import iconReport from "@/components/icons/iconReport.vue";
import iconCalc from "@/components/icons/iconCalc.vue";
import iconPedia from "@/components/icons/iconPedia.vue";
import iconAdmin from "@/components/icons/iconAdmin.vue";
import iconBurger from "@/components/icons/iconBurger.vue";
import iconForm from "@/components/icons/iconForm.vue";

export default defineComponent({
  name: "AsideItem",
  components: {
    iconDashboard,
    iconTechDock,
    iconReport,
    iconCalc,
    iconPedia,
    iconAdmin,
    iconBurger,
    iconForm,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.aside {
  &__link {
    &-wrap {
      display: flex;
      align-items: center;
    }
  }
  &__icon-mobile {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
    margin-left: -30px;
    padding-bottom: 19px;
    padding-top: 19px;
  }
  &__icon {
    margin-right: 8px;
    margin-bottom: 3px;
  }
}
</style>
