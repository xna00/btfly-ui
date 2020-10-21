<template>
  <router-view />
</template>
<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  components: {},
  setup(props) {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500);
    provide("menuVisible", menuVisible);
    width <= 500 && router.afterEach(() => {
       menuVisible.value = false;
    });
  },
};
</script>
