<template>
  <div>
    <Demo :component="Checkbox1" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Checkbox1 from "../demos/checkbox/Checkbox1.vue";
export default {
  components: { Demo },
  setup() {
    return { Checkbox1 };
  },
};
</script>
<style lang="scss">
</style>