<template>
  <div class="negotiation">
    <div class="negotiation__hero">
      <h1 class="negotiation__hero-title">
        {{ $t("tech.negotiation") }} № {{ id }} {{ dateText }}
        <span v-if="form.data.handler === 'BuyerHandler' && outerInfo.id">
          {{ $t(`negotiation.${outerInfo.codeForTranslate}_full`) }} №
          <router-link
            class="link"
            :to="{ name: 'TechTaskEdit', params: { id: outerInfo.id } }"
          >
            {{ outerInfo.id }}
          </router-link>
        </span>
        <span v-if="form.data.handler === 'RoleHandler'">
          <span v-if="outerInfo.id">
            {{ $t(`negotiation.${outerInfo.codeForTranslate}_full`) }} №
            {{ outerInfo.id }}
          </span>
          <span v-if="form.data.order" class="whitespace-no-wrap">
            <br />
            {{ $t("negotiation.order_negotiation") }} №
            <router-link
              class="link"
              :to="{
                name: 'ManagerOrderDetail',
                params: { id: form.data.order },
              }"
            >
              {{ form.data.order }}
            </router-link>
          </span>
        </span>
      </h1>
      <div class="negotiation__hero-btns">
        <el-upload
          v-model:file-list="form.file"
          action="#"
          ref="uploadRef"
          class="negotiation__hero-upload"
          :auto-upload="false"
          :on-change="sendFile"
          :show-file-list="false"
        >
          <buttonComponent
            iconLeft="iconUpload"
            isRounded
            :text="$t('btns.upload_short')"
            class="btn-plain"
          ></buttonComponent>
        </el-upload>
        <buttonComponent
          @click="downloadFile"
          iconLeft="iconDownload"
          isRounded
          :text="$t('btns.download_short')"
          class="btn-plain"
        ></buttonComponent>
      </div>
    </div>
    <preloaderBlock v-if="form.preloader" />

    <div>
      <span class="negotiation__horizontal-title"
        >{{ $t("tech.status") }}:</span
      >
      <span class="negotiation__horizontal-text">
        {{
          form.data.status
            ? $t(`negotiation.statuses.${form.data.status}`)
            : "--"
        }}
      </span>
    </div>

    <div class="negotiation__offers">
      <span @click="showNegotiationRelatedModal" class="link">
        <span class="negotiation__offers-link">{{ $t("btns.offers") }}</span>
        <iconArrowLeft class="rotate_180"></iconArrowLeft>
      </span>
    </div>

    <el-tabs v-model="activeName">
      <el-tab-pane :label="$t('negotiation.label_main')" name="mainInfo">
        <div v-if="activeName === 'mainInfo'" class="negotiation__body">
          <negotiationItems
            @sendFormData="saveItemsData"
            :payloadProps="form.data.payload"
            :filterPreset="chainItemsFilterPreset"
            :changeColumnsPreset="negotiationChangeItems"
          ></negotiationItems>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('negotiation.label_comments')" name="comments">
        <div v-if="activeName === 'comments'">
          <comment-thread
            :thread-id="form.data.thread"
            :reload-thread="true"
            :related-api-url="getCommentApiUrl"
            @created="onCreated"
          ></comment-thread>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('negotiation.label_event')" name="events">
        <keep-alive>
          <div v-if="activeName === 'events'">
            <event-list
              api-url="/history/event/full/"
              code="Negotiation"
              :outer_id="id"
            ></event-list>
          </div>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

    <div class="negotiation__footer-compensator"></div>
    <div class="negotiation__footer">
      <el-divider></el-divider>
      <div class="negotiation__btns-section">
        <div class="negotiation__btns-block">
          <buttonComponent
            v-if="!isFinalized"
            @click="reject"
            icon="iconStatusDanger"
            :text="$t('btns.reject')"
            class="btn-primary negotiation__btns-item"
          ></buttonComponent>
          <buttonComponent
            v-if="!isFinalized"
            @click="finalize"
            icon="iconStatusSuccess"
            :text="$t('btns.approve')"
            class="btn-success negotiation__btns-item"
          ></buttonComponent>
          <buttonComponent
            v-if="!isFinalized && form.data.handler === 'RoleHandler'"
            @click="send"
            icon="iconChats"
            :text="$t('btns.send')"
            class="btn-success negotiation__btns-item"
          ></buttonComponent>
        </div>

        <div class="negotiation__btns-block">
          <buttonComponent
            @click="showAnalisisModal"
            icon="iconComparison"
            :text="$t('btns.analysis')"
            class="btn-primary negotiation__btns-item"
          ></buttonComponent>
          <buttonComponent
            v-if="!isFinalized"
            @click="showPreliminaryAnalys"
            icon="iconCalc"
            :text="$t('btns.preliminary_analys')"
            class="btn-primary negotiation__btns-item"
            :disabled="!isDataChanged"
          ></buttonComponent>
          <buttonComponent
            v-if="!isFinalized"
            @click="applyChanges"
            icon="iconSave"
            :text="$t('btns.apply_changes')"
            class="btn-success negotiation__btns-item"
            :disabled="!isDataChanged"
          ></buttonComponent>
          <buttonComponent
            v-if="isFinalized"
            @click="redirectToOrder"
            icon="iconChecklist"
            :text="$t('btns.view_order')"
            class="btn-primary negotiation__btns-item"
          ></buttonComponent>
        </div>
      </div>
    </div>

    <negotiationAnalisysModal
      ref="negotiationAnalisysModalRef"
      :dataProps="form.data.payload.last_analyze"
    ></negotiationAnalisysModal>

    <preliminaryAnalysModal
      ref="preliminaryAnalysModalRef"
      :dataProps="form.data.payload"
    ></preliminaryAnalysModal>

    <negotiationRelatedModal
      ref="negotiationRelatedModalRef"
      @sendFormData="saveRelatedItemsData"
      :dataProps="form.data.payload"
      :isFinalized="isFinalized"
    ></negotiationRelatedModal>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  inject,
  ref,
  nextTick,
} from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import moment from "moment";
import preloaderBlock from "@/components/Partials/PreloaderBlock.vue";
import { useRoute } from "vue-router";
import { showError } from "@/utils/errorsInterceptor";
import buttonComponent from "@/components/Partials/buttonComponent.vue";
import { negotiationEnumConst } from "@/constants/common";
import { validationSchemaType } from "@/store/modules/schema/types";
import { negotiationDataType, tableFormDataType } from "@/types/common";
import negotiationAnalisysModal from "@/components/negotiation/NegotiationAnalisysModal.vue";
import negotiationRelatedModal from "@/components/negotiation/NegotiationRelatedModal.vue";
import negotiationItems from "@/components/negotiation/NegotiationItems.vue";
import preliminaryAnalysModal from "@/components/negotiation/PreliminaryAnalysModal.vue";
import {
  managerNegotiationChangeItemsConst,
  chainItemsFilterPresetConst,
} from "@/constants/negotiation";
import isEmpty from "@/utils/isEmpty";
import { uploadFileType } from "@/types/common";
import iconArrowLeft from "@/components/icons/iconArrowLeft.vue";
import EventList from "@/components/history/EventList.vue";
import CommentThread from "@/components/comment/CommentThread.vue";

type formType = {
  data: negotiationDataType;
  changedChainItems: number[];
  changedChainRelatedItems: number[];
  file: uploadFileType[];
  preloader: boolean;
};

const dataConst = () => ({
  id: null,
  outer_id: null,
  status: null,
  editable: false,
  handler: null,
  created_at: null,
  payload: {
    last_analyze: null,
    chain: {
      items: [],
      related: {},
    },
    default_chain: null,
    payload: null,
  },
  order: null,
  thread: null,
});

export default defineComponent({
  name: "NegotiationDetail",
  components: {
    preloaderBlock,
    buttonComponent,
    negotiationAnalisysModal,
    negotiationRelatedModal,
    negotiationItems,
    preliminaryAnalysModal,
    iconArrowLeft,
    EventList,
    CommentThread,
  },
  setup() {
    const router = useRouter();
    const axios: any = inject("axios");
    const store = useStore();
    const { t } = useI18n({});
    const route = useRoute();
    const id = route.params.id;
    const isDataChanged = ref(false);
    const itemsSchema = computed(
      (): validationSchemaType =>
        store.getters["Schema/negotiationDetailItemsSchema"]
    );
    const chainItemsFilterPreset = chainItemsFilterPresetConst;
    const negotiationChangeItems = computed(() => {
      if (form.data.id === null || form.data.status === "finalize") {
        return [];
      }
      return managerNegotiationChangeItemsConst;
    });
    let activeName = ref("mainInfo");

    const form: formType = reactive({
      data: dataConst(),
      changedChainItems: [],
      changedChainRelatedItems: [],
      file: [],
      preloader: false,
    });

    const getNegotiationData = async () => {
      if (!id) {
        return;
      }
      const url = `/negotiation/manager/${id}/`;
      form.preloader = true;
      axios
        .get(url)
        .then(({ data }) => {
          form.data = data;
          form.preloader = false;
        })
        .catch((error) => {
          form.preloader = false;
          showError(error);
        });
    };

    const getSchema = async () => {
      const url = "/settings/constructor/field/";
      const params = {
        fields: managerNegotiationChangeItemsConst,
      };
      axios
        .post(url, params)
        .then(({ data }) => {
          store.dispatch("Schema/setNegotiationDetailItemsSchema", data);
        })
        .catch((error) => {
          showError(error);
        });
    };

    const init = () => {
      getNegotiationData();
      if (isEmpty(itemsSchema.value)) {
        getSchema();
      }
    };
    init();

    const dateText = computed(() => {
      if (form.data.created_at) {
        const date = moment(form.data.created_at).format("DD.MM.YYYY");
        if (date !== "Invalid date") {
          return `${t("common.from")} ${date}`;
        }
      }
      return "";
    });

    // Информация о id ТЗ и названии согласования
    const outerInfo = computed(() => {
      if (!form.data.outer_id) {
        return {
          negotiationCode: null,
          id: null,
          codeForTranslate: null,
        };
      }
      const data = form.data.outer_id.split(":");
      return {
        negotiationCode: data[0],
        id: data[1],
        codeForTranslate: negotiationEnumConst[data[0]],
      };
    });

    const saveItemsData = (data: tableFormDataType) => {
      const item = form.data.payload.chain.items.find((item) => {
        return item.id === data.rowData.id;
      });
      item[data.columnName] = data.value;
      isDataChanged.value = true;
      form.changedChainItems.push(item.id); // что поменяли
      form.changedChainItems = [...new Set(form.changedChainItems)]; // удалить дубли
    };

    const saveRelatedItemsData = (data: tableFormDataType) => {
      const item = form.data.payload.chain.related.carrier.items.find(
        (item) => {
          return item.id === data.rowData.id;
        }
      );
      item[data.columnName] = data.value;
      isDataChanged.value = true;
      form.changedChainRelatedItems.push(item.id); // что поменяли
      form.changedChainRelatedItems = [
        ...new Set(form.changedChainRelatedItems),
      ]; // удалить дубли
    };

    const preparePayloadForApply = () => {
      const payload: any = {
        chain: {},
      };
      if (form.changedChainItems.length > 0) {
        payload.chain["items"] = [];
        form.changedChainItems.forEach((changedId) => {
          const item = form.data.payload.chain.items.find((item) => {
            return item.id === changedId;
          });
          payload.chain["items"].push(item);
        });
      }
      if (form.changedChainRelatedItems.length > 0) {
        payload.chain["related"] = {
          carrier: {
            items: [],
          },
        };
        form.changedChainRelatedItems.forEach((changedId) => {
          const item = form.data.payload.chain.related.carrier.items.find(
            (item) => {
              return item.id === changedId;
            }
          );
          payload.chain.related.carrier.items.push(item);
        });
      }
      return payload;
    };

    const applyChanges = () => {
      const url = `/negotiation/${id}/action/apply-changes/`;
      const payload = preparePayloadForApply();
      const params = {
        payload,
      };
      form.preloader = true;

      axios
        .post(url, params)
        .then(() => {
          form.preloader = false;
          isDataChanged.value = false;
          getNegotiationData();
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
        })
        .catch((error) => {
          form.preloader = false;
          showError(error);
        });
    };

    const finalize = () => {
      const url = `/negotiation/${id}/action/finalize/`;
      form.preloader = true;
      axios
        .post(url)
        .then(() => {
          form.preloader = false;
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
          getNegotiationData();
        })
        .catch((error) => {
          form.preloader = false;
          showError(error);
        });
    };

    const send = () => {
      const url = `/negotiation/${id}/action/send/`;
      const params = {
        outer_id: form.data.outer_id,
        handler: form.data.handler,
        payload: form.data.payload,
      };
      form.preloader = true;
      axios
        .post(url, params)
        .then(() => {
          form.preloader = false;
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
          getNegotiationData();
        })
        .catch((error) => {
          form.preloader = false;
          showError(error);
        });
    };

    const reject = () => {
      const url = `/negotiation/${id}/action/reject/`;
      form.preloader = true;
      axios
        .get(url)
        .then(() => {
          form.preloader = false;
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
          getNegotiationData();
        })
        .catch((error) => {
          form.preloader = false;
          showError(error);
        });
    };

    const sendFile = async () => {
      const url = `/negotiation/${id}/action/buyer/load-excel/`;
      const params = {};
      await nextTick();
      if (form.file.length > 0) {
        params["file"] = form.file[0].raw;
      }
      axios
        .post(url, params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
        })
        .catch((error) => {
          showError(error);
        })
        .finally(() => {
          form.file = [];
        });
    };

    function downloadFile() {
      const url = `/negotiation/${id}/action/buyer/get-excel/`;
      form.preloader = true;
      axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          form.preloader = false;
          const blob_file = response.data;
          const file_url = URL.createObjectURL(blob_file);
          const link = document.createElement("a");

          link.href = file_url;
          link.setAttribute("download", `negotiation.xlsx`);
          link.setAttribute("id", "temporaryLinkFile");
          document.body.appendChild(link);
          link.click();
          const temporaryLinkFile =
            document.querySelector("#temporaryLinkFile");
          if (temporaryLinkFile) {
            temporaryLinkFile.remove();
          }
          window.ElMessage({
            showClose: true,
            message: t("common.messages.succcess"),
            type: "success",
          });
        })
        .catch(() => {
          form.preloader = false;
          window.ElMessage({
            showClose: true,
            message: "Something went wrong. Please try again.",
            type: "error",
          });
        });
    }

    const isFinalized = computed(() => {
      if (form.data.id === null || form.data.status === "finalize") {
        return true;
      }
      return false;
    });

    const getCommentApiUrl = computed(() => {
      return form.data.thread
        ? null
        : `/negotiation/${form.data.id}/comment/message/`;
    });

    const reloadCreatedComment = computed(() => {
      return !form.data.thread;
    });

    const redirectToOrder = () => {
      router.push({
        name: "ManagerOrderDetail",
        params: { id: form.data.order },
      });
    };

    const showAnalisisModal = () => {
      negotiationAnalisysModalRef.value.showModal();
    };

    const showPreliminaryAnalys = () => {
      preliminaryAnalysModalRef.value.showModal();
    };

    const showNegotiationRelatedModal = () => {
      negotiationRelatedModalRef.value.showModal();
    };

    const onCreated = () => {
      init();
      activeName = ref("comments");
    };

    const negotiationAnalisysModalRef: any = ref(null);
    const preliminaryAnalysModalRef: any = ref(null);
    const negotiationRelatedModalRef: any = ref(null);

    return {
      id,
      form,
      dateText,
      status,
      outerInfo,
      negotiationAnalisysModalRef,
      negotiationRelatedModalRef,
      showPreliminaryAnalys,
      showAnalisisModal,
      preliminaryAnalysModalRef,
      showNegotiationRelatedModal,
      saveItemsData,
      isDataChanged,
      applyChanges,
      itemsSchema,
      sendFile,
      downloadFile,
      saveRelatedItemsData,
      finalize,
      send,
      chainItemsFilterPreset,
      negotiationChangeItems,
      isFinalized,
      redirectToOrder,
      reject,
      activeName,
      getCommentApiUrl,
      onCreated,
      reloadCreatedComment,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/tech/negotiation.scss";
</style>
