<template>
  <button class="base-button" @click="$emit('clickBtn')">{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    text: { type: String, default: "" },
  },
});
</script>
<style lang="scss" scoped>
.base-button {
  max-width: calc(var(--main-container-width) - 32px);
  width: 100%;
  border: none;
  color: #000;
  height: 56px;
  border-radius: 14px;
  font-size: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: var(--color-gray-dark);
  box-shadow: inset 0 0 0 1px var(--color-gray-dark);
  padding: 0 16px;
  cursor: pointer;

  &:hover,
  &:active {
    background: var(--bg-gray);
  }
  &:focus {
    box-shadow: 0 0 0 2px var(--color-gray-dark);
    outline-style: none;
  }
}
</style>
