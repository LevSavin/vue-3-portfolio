<template>
  <el-select
    :filterable="isRemoteSearch"
    :remote="isRemoteSearch"
    reserve-keyword
    :remote-method="getData"
    :loading="loadingData.loading"
    class="select"
    v-model="form.selectValue"
    :placeholder="placeholder"
    @change="handle"
  >
    <el-option
      v-for="(item, index) in loadingData.data"
      :key="index"
      :label="getLabel(item)"
      :value="item[getValueName]"
    />
  </el-select>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  watch,
  inject,
  onMounted,
  ref,
  computed,
} from "vue";
import { showError } from "@/utils/errorsInterceptor";
import { useI18n } from "vue-i18n";

type loadingType = {
  data: any;
  loading: boolean;
};

export const initSearchParams = () => ({
  search: null,
  page: 1,
  page_size: 50,
  ordering: null,
});

export default defineComponent({
  name: "SelectNameRemoteSearch",
  emits: ["handle"],
  props: {
    // сюда помещаем название, если это редактирование ранее выбранной опции
    searchProps: {
      default: "",
    },
    // Оставлять true, если компонент поиска находится в странице и ставить false, если в модальном окне.
    // Связано с особенностью загрузки, в модальном окне обычно параметр уже есть на момент создания компонента,
    // а в прочих случаях параметра нет и он подгружается уже после монтирования компонента.
    searchPropsAfterMount: {
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    apiUrl: {
      type: String,
      default: "",
    },
    labelRu: {
      type: String,
      default: "name_ru", //нужно для правильного отображения названий, менять в зависимости от названия поля в данных
    },
    labelEn: {
      type: String,
      default: "name_en",
    },
    valueRu: {
      type: String,
      default: "name_ru", //нужно для выбора данных
    },
    valueEn: {
      type: String,
      default: "name_en",
    },
    isRemoteSearch: {
      type: Boolean,
      default: true, //по умолчанию - удалённый поиск. Если отключить, то просто селект, который подгружает для себя данные
    },
    isLoadOnStartQuerry: {
      type: String,
      default: "", //при выставлении значения, данные будут грузиться сразу при старте, запрос будет конкатенироваться к урлу, пример ?default=true
    },
  },
  setup(props, { emit }) {
    const axios: any = inject("axios");
    const i18n = useI18n();
    const isWatchSearchPropsActivated = ref(false);

    const form = reactive({
      selectValue: "",
    });

    const loadingData: loadingType = reactive({
      data: [],
      loading: false,
    });

    const getData = async (query: string) => {
      if (query) {
        loadingData.loading = true;
        const params = {
          search: query,
        };
        const url = `${props.apiUrl}`;
        await axios
          .get(url, { params })
          .then(({ data }) => {
            loadingData.data = data.results;
          })
          .catch((error) => {
            showError(error);
          })
          .finally(() => {
            loadingData.loading = false;
          });
      } else {
        loadingData.data = [];
      }
    };

    const getFullData = () => {
      const params = initSearchParams();
      let url = `${props.apiUrl}`;
      if (props.isLoadOnStartQuerry !== "") {
        url = url + props.isLoadOnStartQuerry;
      }
      axios
        .get(url, { params })
        .then(({ data }) => {
          loadingData.data = data.results;
        })
        .catch((error) => {
          showError(error);
        });
    };
    if (!props.isRemoteSearch) {
      getFullData();
    }

    const getLabel = (item) => {
      if (!item) {
        return null;
      }
      if (i18n.locale.value === "en") {
        return item[props.labelEn];
      }
      return item[props.labelRu];
    };

    const getValueName = computed(() => {
      if (i18n.locale.value === "en") {
        return props.valueEn;
      }
      return props.valueRu;
    });

    const handle = () => {
      emit("handle", form.selectValue);
    };

    watch(
      () => props.searchProps,
      async (newValue) => {
        form.selectValue = newValue;
        if (
          props.searchPropsAfterMount &&
          !isWatchSearchPropsActivated.value &&
          props.isRemoteSearch
        ) {
          await getData(props.searchProps);
          form.selectValue = getLabel(loadingData.data[0]); // выставляем выбранное ранее значение в соответствии с языком системы
          isWatchSearchPropsActivated.value = true;
        }
      }
    );

    onMounted(async () => {
      if (props.searchProps !== "") {
        form.selectValue = props.searchProps;
        await getData(props.searchProps);
        form.selectValue = getLabel(loadingData.data[0]); // выставляем выбранное ранее значение в соответствии с языком системы
      }
      if (props.isLoadOnStartQuerry !== "") {
        getFullData();
      }
    });

    return {
      form,
      loadingData,
      getData,
      getLabel,
      getValueName,
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
