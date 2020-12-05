<demo>
用openDialog打开对话框
</demo>
<template>
  <Button @click="open">打开</Button>
</template>
<script lang="ts">
import { openDialog } from "../../lib/openDialog";
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const open = () => {
      openDialog({
        title: "你好",
        content: "我是内容",
        ok() {},
        cancel() {},
      });
    };
    return { open };
  },
};
</script>