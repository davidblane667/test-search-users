<template>
  <div class="base-container">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseContainer",
});
</script>
<style lang="scss" scoped>
.base-container {
  max-width: var(--main-container-width);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background-color: var(--bg-primary);
}
</style>
