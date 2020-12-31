<template>
  <Demo :component="Radio1" />
</template>
<script lang="ts">
import Radio1 from "../demos/radios/Radio1.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Radio1 };
  },
};
</script>