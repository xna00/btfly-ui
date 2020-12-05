<demo>
dialog2
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
        title: "hello",
        content: "I am content",
        ok() {},
        cancel() {},
      });
    };
    return { open };
  },
};
</script>