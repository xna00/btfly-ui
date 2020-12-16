<template>
  <Checkbox v-model:checked="checked">
      </Checkbox> 
  {{ checked }}
</template>
<script lang="ts">
import Checkbox from "../lib/Checkbox.vue";
export default {
  components: { Checkbox },
  data() {
    return {
      checked: false,
    };
  },
};
</script>