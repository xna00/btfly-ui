<template>
  <div>
    <Demo :component="Checkbox1" />
    <Demo :component="Checkbox2" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Checkbox1 from "../demos/checkbox/Checkbox1.vue";
import Checkbox2 from '../demos/checkbox/Checkbox2.vue'
export default {
  components: { Demo },
  setup() {
    return { Checkbox1 , Checkbox2};
  },
};
</script>
<style lang="scss">
</style>