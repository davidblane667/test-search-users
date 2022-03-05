<template>
  <base-container class="search-users">
    <base-input
      class="search-users__input"
      :value="screenNameValue"
      :has-icon="screenNameValue.length > 0"
      placeholder="Введите имя"
      @inputChange="(v) => $emit('inputChange', v)"
      @click:appendIcon="$emit('clearInput', '')"
    >
      <template #appendIcon>
        <base-spinner v-if="loading" />
        <img v-else :src="`/img/icons/close_black_24dp.svg`" alt="close-icon" />
      </template>
    </base-input>
    <search-users-list :loading="loading" :users="users" />
    <base-button
      class="search-users__btn"
      :text="isActiveSearch ? 'Остановить автопоиск' : 'Включить автопоиск'"
      @clickBtn="$emit('searchToggle')"
    />
  </base-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseContainer from "@/components/BaseContainer";
import BaseInput from "@/components/BaseInput";
import BaseSpinner from "@/components/BaseSpinner";
import BaseButton from "@/components/BaseButton";
import SearchUsersList from "./SearchUsersList.vue";
import { User } from "@/types";

export default defineComponent({
  name: "SearchUsersView",
  components: {
    BaseContainer,
    BaseInput,
    BaseSpinner,
    BaseButton,
    SearchUsersList,
  },
  props: {
    screenNameValue: { type: String, default: "" },
    loading: { type: Boolean },
    isActiveSearch: { type: Boolean, default: true },
    users: { type: Array as () => User[], default: () => [] },
  },
});
</script>
<style lang="scss" scoped>
.search-users {
  padding-top: 16px;

  &__input {
    margin-bottom: 16px;
  }
  &__btn {
    position: fixed;
    bottom: 16px;
  }
}
</style>
