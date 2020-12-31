<demo>
一个Checkbox
</demo>
<template>
  <Checkbox v-model="checked">点我</Checkbox>
  <br />
  checked:{{ checked }}
</template>
<script lang="ts">
import Checkbox from "../../lib/Checkbox.vue";
export default {
  components: { Checkbox },
  data() {
    return {
      checked: false,
    };
  },
};
</script>