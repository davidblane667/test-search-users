<template>
  <li class="search-users-item d-flex __align-center __space-between">
    <div class="search-users-item__screen-name">{{ user.value }}</div>
    <div v-if="!loading" class="search-users-item__btn">Добавить</div>
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/types";

export default defineComponent({
  name: "SearchUsersItem",
  props: {
    user: { type: Object as () => User, required: true },
    loading: { type: Boolean },
  },
});
</script>
<style lang="scss" scoped>
.search-users-item {
  padding: 16px;
  font-size: 18px;
  border: 1px solid var(--color-gray-dark);
  border-radius: 14px;

  &__screen-name {
    color: #2c3e50;
  }
  &__btn {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-gray-light);
    cursor: pointer;
  }
}
</style>
