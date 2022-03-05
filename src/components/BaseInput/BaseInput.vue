<template>
  <div class="base-input">
    <div class="base-input__wrapper">
      <input
        class="base-input__field"
        type="text"
        :value="value"
        :class="{ '__append-icon': !!value }"
        :placeholder="placeholder"
        @input="onInput"
      />
      <div
        v-if="hasIcon"
        class="base-input__append-icon"
        @click="$emit('click:appendIcon')"
      >
        <slot name="appendIcon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    value: { type: String },
    hasIcon: { type: Boolean, default: false },
    placeholder: { type: String, default: "" },
  },
  setup(_, { emit }) {
    const onInput = (e: InputEvent) => {
      emit("inputChange", (e.target as HTMLInputElement).value);
    };

    return {
      onInput,
    };
  },
});
</script>
<style lang="scss" scoped>
.base-input {
  &__wrapper {
    position: relative;
  }
  &__field {
    border: none;
    color: #000;
    height: 56px;
    border-radius: 14px;
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: var(--bg-gray);
    box-shadow: inset 0 0 0 1px var(--color-gray-dark);
    padding: 0 16px;
    width: 100%;
    position: relative;

    &:hover,
    &:active {
      background: var(--color-gray-dark);
    }
    &:focus {
      box-shadow: 0 0 0 1px #cfcfd3;
      outline-style: none;
    }
    &.__append-icon {
      padding-right: 20px;
    }
  }
  &__append-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
