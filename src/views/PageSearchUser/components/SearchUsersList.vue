<template>
  <ul class="search-users-list">
    <search-users-item
      v-for="(user, idx) in users"
      class="search-users-list__item"
      :key="`${user.value}_${idx}`"
      :user="user"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/types";
import SearchUsersItem from "./SearchUsersItem.vue";

export default defineComponent({
  name: "SearchUsersList",
  components: { SearchUsersItem },
  props: {
    users: { type: Array as () => User[] },
    loading: { type: Boolean },
  },
});
</script>
<style lang="scss" scoped>
.search-users-list {
  &__item {
    margin-bottom: 8px;
  }
}
</style>
