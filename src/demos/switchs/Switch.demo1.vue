<demo>
小号开关
</demo>
<template>
  <Switch v-model:on="on" size="small" />
</template>
<script lang="ts">
import Switch from "/src/lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const on = ref(true);
    return { on };
  },
};
</script>