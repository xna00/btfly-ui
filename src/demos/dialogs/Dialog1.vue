<demo>
对话框
</demo>
<template>
  <Button @click="show">显示</Button>
  <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong >你好</strong>
    </template>
    <template v-slot:content>
      我是内容
    </template>
  </Dialog>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const show = () => {
      visible.value = true;
    };
    const ok = () => {
      console.log("ok");
    };
    const cancel = () => {
      console.log("cancel");
    };
    return { visible, ok, cancel, show };
  },
};
</script>