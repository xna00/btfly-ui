<template>
  <div>
    <Demo :component="Dialog1" />
    <Demo :component="Dialog2" />
  </div>
</template>
<script lang="ts">
import Dialog1 from "../demos/dialogs/Dialog1.vue";
import Dialog2 from "../demos/dialogs/dialog2.vue"
import Demo from './Demo.vue';
export default {
  components: { Demo },
  setup() {
    return { Dialog1, Dialog2 };
  },
};
</script>