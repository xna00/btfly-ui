<template>
  <div>
    <Demo :component="Button1" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1 from "../demos/buttons/Button1.vue";
export default {
  components: { Demo },
  setup() {
    return { Button1 };
  },
};
</script>
<style lang="scss">
</style>