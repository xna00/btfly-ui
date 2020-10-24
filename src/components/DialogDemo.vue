<template>
  <div>
    <Demo :component="Dialog1" />
  </div>
</template>
<script lang="ts">
import Dialog1 from "../demos/dialogs/Dialog1.vue";
export default {
  setup() {
    return { Dialog1 };
  },
};
</script>