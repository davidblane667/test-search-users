<template>
  <search-users-view
    :screen-name-value="screenNameValue"
    :loading="loading"
    :users="users"
    :is-active-search="searchActive"
    @inputChange="onInputHandler"
    @clearInput="onInputHandler"
    @searchToggle="onSearchToggle"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { debounce } from "lodash";
import { User, UserPublicData } from "@/types";
import config from "@/config";
import SearchUsersView from "./components/SearchUsersView.vue";

export default defineComponent({
  name: "PageSearchUsers",
  components: { SearchUsersView },
  setup() {
    const screenNameValue = ref<string>("");
    const loading = ref<boolean>(true);
    const searchActive = ref<boolean>(true);
    const users = ref<User[]>([]);

    const search = debounce(async (value: string) => {
      loading.value = true;
      if (value.length > 2 && searchActive.value) {
        try {
          const options: any = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Token " + config.TOKEN,
            },
            body: JSON.stringify({ query: value }),
          };

          const response = await fetch(config.GET_USER_LIST, options);
          const result: UserPublicData = await response.json();
          if (result) {
            users.value = result.suggestions;
          }
        } catch (e) {
          console.error(e);
        } finally {
          loading.value = false;
        }
      } else {
        loading.value = false;
        users.value = [];
      }
    }, 500);

    const onInputHandler = (value: string) => {
      screenNameValue.value = value;
      search(value);
    };
    const onSearchToggle = () => {
      searchActive.value = !searchActive.value;
    };

    return {
      screenNameValue,
      loading,
      users,
      searchActive,
      onInputHandler,
      onSearchToggle,
    };
  },
});
</script>
