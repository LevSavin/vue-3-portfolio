<template>
  <div class="table-control">
    <div class="table-control__row">
      <div class="table-control__left-wrap">
        <div class="table-control__left">
          <el-input
            v-if="isShowSearch"
            class="table-control__element table-control__element--search"
            v-model="form.search"
            size="large"
            :placeholder="searchLabel"
            @input="handleSearch"
          >
            <template v-slot:prefix>
              <iconSearch></iconSearch>
            </template>
          </el-input>

          <div
            class="table-control__element table-control__element--filter link"
            v-if="isShowFilter"
            @click="showTableFilter"
          >
            <iconChecklist />
            <span class="table-control__element--filter-text">
              {{ $t("btns.use_filter") }}
            </span>
          </div>

          <div
            class="table-control__element table-control__element--button link"
            v-if="button.isShow"
          >
            <buttonComponent
              @handle="handleButton"
              :icon="button.icon"
              :text="button.text"
              :size="button.size"
              :class="button.class"
            ></buttonComponent>
          </div>
        </div>
      </div>

      <div class="table-control__pagination-block" v-if="isShowPagination">
        <div class="table-control__select-wrap">
          <span class="table-control__pages-text">
            {{ $t("labels.page_size") }}
          </span>
          <el-select
            class="table-control__select"
            v-model="form.page_size"
            size="small"
            @change="handleSizeChange"
          >
            <el-option
              v-for="item in selectValues"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="count"
          :page-size="form.page_size"
          v-model:currentPage="form.page"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <div class="table-control__row table-control__row--bottom" v-if="false">
      <div class="link">
        <iconChecklist />
        <span class="table-control__element--filter-text">
          {{ $t("btns.use_filter") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import iconSearch from "@/components/icons/iconSearch.vue";
import iconChecklist from "@/components/icons/iconChecklist.vue";

export default defineComponent({
  name: "TableControl",
  components: { iconSearch, iconChecklist },
  emits: [
    "handleSearch",
    "handleSizeChange",
    "handleCurrentChange",
    "showTableFilter",
    "handleButton",
  ],
  props: {
    searchLabel: {
      type: String,
      default: "",
    },
    search: {
      type: String,
      default: "",
    },
    page: {
      type: Number,
      default: 1,
    },
    page_size: {
      type: Number,
      default: 100,
    },
    count: {
      type: Number,
      default: 0,
    },
    isShowSearch: {
      type: Boolean,
      default: true,
    },
    isShowFilter: {
      type: Boolean,
      default: false,
    },
    isShowPagination: {
      type: Boolean,
      default: true,
    },
    // кнопка слева
    button: {
      type: Object as PropType<any>,
      default: () => ({
        isShow: false,
        text: "",
        icon: "",
        size: "default",
        class: "btn-plain",
      }),
    },
  },

  setup(props, { emit }) {
    const selectValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const form = reactive({
      search: props.search,
      page: props.page,
      page_size: props.page_size,
      count: props.count,
    });

    let timeout;
    const handleSearch = (val: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        emit("handleSearch", val);
      }, 800);
    };

    const handleSizeChange = (val: number) => {
      emit("handleSizeChange", val);
    };
    const handleCurrentChange = (val: number) => {
      emit("handleCurrentChange", val);
    };
    const showTableFilter = () => {
      emit("showTableFilter");
    };
    const handleButton = () => {
      emit("handleButton");
    };

    return {
      selectValues,
      form,
      handleSearch,
      handleSizeChange,
      handleCurrentChange,
      showTableFilter,
      handleButton,
    };
  },
});
</script>

<style lang="scss" scoped>
.table-control {
  &__row {
    display: flex;
    flex-direction: column;
    @media (min-width: 1150px) {
      flex-direction: row;
      justify-content: space-between;
    }
    &--bottom {
      margin-top: 21px;
    }
  }
  &__left {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 992px) {
      justify-content: flex-start;
    }
  }
  &__element {
    width: 100%;
    @media (min-width: 576px) {
      width: initial;
      margin-right: 16px;
    }
    &--search {
      @media (min-width: 576px) {
        width: 300px;
      }
    }
    &--filter {
      min-height: 40px;
      &-text {
        font-size: 12px;
        line-height: 22px;
        margin-left: 8px;
      }
    }
    &--button {
      min-height: 40px;
    }
  }
  &__pagination-block {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    align-items: center;
    @media (min-width: 992px) {
      max-height: 40px;
      flex-direction: row;
    }
    @media (min-width: 1150px) {
      margin-top: 0px;
      margin-bottom: 0px;
      min-width: 555px;
      justify-content: flex-end;
    }
  }
  &__select-wrap {
    display: flex;
    align-items: center;
    @media (min-width: 992px) {
      margin-right: 24px;
    }
  }
  &__select {
    margin-left: 8px;
    width: 56px;
  }
  &__pages-text {
    @media (min-width: 992px) {
      text-align: end;
    }
  }
}
</style>
