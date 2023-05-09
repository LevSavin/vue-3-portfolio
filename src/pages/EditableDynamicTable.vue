<template>
  <div class="table-items">
    <div class="table-items__description form-page">
      <h3 class="form-page__description">
        {{ $t("pages.table_task_1") }}
      </h3>
      <h3 class="form-page__description">
        {{ $t("pages.table_task_2") }}
      </h3>
      <h3 class="form-page__description">
        {{ $t("pages.table_task_3") }}
      </h3>
      <p class="form-page__description">
        {{ $t("pages.table_text_2") }}
      </p>
      <p class="form-page__description">
        {{ $t("pages.table_text_3") }}
      </p>
      <p class="form-page__description">
        {{ $t("pages.table_text_4") }}
      </p>
      <p class="form-page__description">
        <a
          href="https://github.com/LevSavin/vue-3-portfolio/blob/master/src/pages/EditableDynamicTable.vue"
          target="_blanc"
          >{{ $t("pages.here") }}</a
        >
        <span>&nbsp;{{ $t("pages.view_code_1") }}</span>
        <a
          href="https://github.com/LevSavin/vue-3-portfolio/blob/master/src/components/partials/Table.vue"
          target="_blanc"
          >{{ $t("pages.here_lowercase") }}</a
        >
        <span>{{ $t("pages.table_code") }}</span>
      </p>
    </div>

    <div v-if="form.data.chain">
      <div v-if="form.data.chain.items.length > 0">
        <tableControl
          isShowFilter
          class="table-items__table-control"
          :count="form.data.chain.items.length"
          v-bind="form.searchParams"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
          @showTableFilter="showTableFilter"
          :isShowSearch="false"
        ></tableControl>
        <tableFilter
          ref="tableFilterRef"
          useVirtualPagination
          :data="form.data.chain.items"
          v-bind="form.searchParams"
          :filterColumnsPreset="filterPreset"
          :sortingColumnsPreset="filterPreset"
          useColumnsSortingPreset
        >
          <template #default="scope">
            <customTable
              v-if="scope.data.length > 0"
              @sendFormData="saveItemsData"
              @pictureOperation="pictureOperation"
              :uploadPictureColumns="{
                photo: { isEditable: false },
              }"
              :data="scope.data"
              :filteredColumns="scope.filteredColumns"
              hasColumnTranslate
              width="200px"
              :columnsMinWidth="columnsMinWidth"
              :formColumns="changeColumnsPreset"
              :formValidationSchema="itemsSchema"
              class="table"
              size="default"
              maxHeight="60vh"
            ></customTable>
            <p v-else>{{ $t("labels.no_data_positions") }}</p>
          </template>
        </tableFilter>
      </div>
    </div>

    <div v-if="form.savedData.chain">
      <div
        v-if="form.savedData.chain.items.length > 0"
        class="table-items__saved-data"
      >
        <el-divider></el-divider>
        <h3>
          {{ $t("pages.saved_data") }}
        </h3>

        <tableFilter
          ref="tableFilterRef"
          :data="form.savedData.chain.items"
          :filterColumnsPreset="filterPreset"
          :sortingColumnsPreset="filterPreset"
          useColumnsSortingPreset
        >
          <template #default="scope">
            <customTable
              v-if="scope.data.length > 0"
              @pictureOperation="pictureOperation"
              :uploadPictureColumns="{
                photo: { isEditable: false },
              }"
              :data="scope.data"
              :filteredColumns="scope.filteredColumns"
              hasColumnTranslate
              width="200px"
              :columnsMinWidth="columnsMinWidth"
              class="table"
              size="default"
              maxHeight="60vh"
            ></customTable>
          </template>
        </tableFilter>
      </div>
    </div>

    <div class="table-items__footer-compensator"></div>
    <div class="table-items__footer">
      <el-divider></el-divider>
      <div class="table-items__btns-section">
        <div class="table-items__btns-block"></div>

        <div class="table-items__btns-block">
          <buttonComponent
            @click="applyChanges"
            :text="$t('btns.save_changes')"
            class="btn-primary table-items__btns-item"
            :disabled="!isDataChanged"
          ></buttonComponent>
        </div>
      </div>
    </div>

    <picturePreviewModal
      ref="picturePreviewModalRef"
      :dataProps="picturePreviewModalData"
      v-bind="picturePreviewModalData.params"
      :isEditable="false"
    ></picturePreviewModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import customTable from "@/components/partials/Table.vue";
import tableFilter from "@/components/partials/TableFilter.vue";
import picturePreviewModal from "@/components/partials/tableParts/PicturePreviewModal.vue";
import dynamicTableValidation from "@/server/dynamic-table-validation.json";
import dynamicTableData from "@/server/dynamic-table.json";
import { tableFormDataType, negotiationDataType } from "@/types/common";
import {
  managerNegotiationChangeItemsConst,
  negotiationDataConst,
  chainItemsFilterPresetConst,
} from "@/constants/negotiation";

type formType = {
  data: negotiationDataType;
  changedChainItems: number[];
  savedData: any;
  searchParams: searchParamsType;
};

type searchParamsType = {
  page: number;
  page_size: number;
};

const initSearchParams = () => ({
  page: 1,
  page_size: 10,
});

export default defineComponent({
  name: "EditableDynamicTable",
  emits: ["saveItemsData"],
  components: {
    customTable,
    tableFilter,
    picturePreviewModal,
  },

  setup() {
    const isDataChanged = ref(false);
    const itemsSchema = dynamicTableValidation;
    const filterPreset = chainItemsFilterPresetConst;
    const changeColumnsPreset = computed(() => {
      return managerNegotiationChangeItemsConst;
    });

    const picturePreviewModalData = reactive({
      data: { photo: [], pictureId: null },
    });

    const columnsMinWidth = {
      id: "70",
      title: "220",
      photo: "250",
    };

    const form: formType = reactive({
      data: negotiationDataConst,
      changedChainItems: [],
      savedData: negotiationDataConst,
      searchParams: initSearchParams(),
    });

    const saveItemsData = (data: tableFormDataType) => {
      const item = form.data.chain.items.find((item) => {
        return item.id === data.rowData.id;
      });
      item[data.columnName] = data.value;
      isDataChanged.value = true;
      form.changedChainItems.push(item.id); // что поменяли
      form.changedChainItems = [...new Set(form.changedChainItems)]; // удалить дубли
    };

    const applyChanges = () => {
      const payload = preparePayloadForApply();
      form.savedData = payload;
    };

    const preparePayloadForApply = () => {
      const payload: any = {
        chain: {},
      };
      if (form.changedChainItems.length > 0) {
        payload.chain["items"] = [];
        form.changedChainItems.forEach((changedId) => {
          const item = form.data.chain.items.find((item) => {
            return item.id === changedId;
          });
          payload.chain["items"].push(item);
        });
      }
      return payload;
    };

    onMounted(() => {
      form.data = Object.assign({}, dynamicTableData.payload);
    });

    const pictureOperation = (data) => {
      if (data.operation === "showPreviewModal") {
        picturePreviewModalData.data = data;
        picturePreviewModalRef.value.showModal();
      }
    };

    // пагинация смена страницы
    const handleCurrentChange = (val: number) => {
      form.searchParams.page = val;
    };
    // пагинация смена размера страницы
    const handleSizeChange = (val: number) => {
      form.searchParams.page_size = val;
    };
    // фильтр колонок
    const tableFilterRef: any = ref(null);
    const showTableFilter = () => {
      tableFilterRef.value.showColumnsFilter();
    };

    const picturePreviewModalRef: any = ref(null);

    return {
      form,
      columnsMinWidth,
      handleCurrentChange,
      handleSizeChange,
      tableFilterRef,
      showTableFilter,
      saveItemsData,
      picturePreviewModalRef,
      picturePreviewModalData,
      pictureOperation,
      itemsSchema,
      isDataChanged,
      changeColumnsPreset,
      applyChanges,
      filterPreset,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/dict.scss";
@import "@/assets/scss/pages/tech/editableDynamicTable.scss";
</style>
