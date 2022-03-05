<template>
  <div class="app">
    <page-search-users />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageSearchUsers from "@/views/PageSearchUser";

export default defineComponent({
  name: "App",
  components: { PageSearchUsers },
});
</script>

<style lang="scss">
:root {
  --main-container-width: 600px;
  --bg-gray: #eaeaec;
  --color-gray-dark: #dddddf;
  --color-gray-light: #a8a8ae;
  --color-gray-dark-two: #8d8d96;
  --bg-primary: #ffffff;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  -webkit-overflow-scrolling: touch;
  background-color: var(--bg-gray);
}

:focus {
  outline: none;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app {
  .d-flex {
    display: flex;
    &.__align-center {
      align-items: center;
    }
    &.__space-between {
      justify-content: space-between;
    }
  }
  .d-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  border: 0;
  outline: none;
}
</style>
