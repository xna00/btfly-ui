<demo>
Toast
</demo>
<template>
  <Toast v-model:visible="visible" :showTime="showTime">你好啊</Toast>
  <Button @click="visible = !visible">显示Toast</Button>
</template>
<script lang="ts">
import Toast from "/@lib/Toast.vue";
import Button from "/@lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Toast,
    Button,
  },
  setup() {
    const visible = ref(false);
    const showTime = ref(2000);
    return { visible, showTime };
  },
};
</script>
<style lang="scss">
</style>