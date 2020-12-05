<demo>
开关
</demo>
<template>
  <Switch v-model:on="onSmall" size="small" />
  <Switch v-model:on="onNormal" size="normal" />
  <Switch v-model:on="onLarge" size="large" />
</template>
<script lang="ts">
import Switch from "/src/lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const onSmall = ref(true);
    const onNormal = ref(false);
    const onLarge = ref(true);
    return { onSmall, onNormal, onLarge };
  },
};
</script>