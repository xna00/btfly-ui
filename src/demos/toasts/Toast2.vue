<demo>
showToast
</demo>
<template>
  <Button @click="click">显示Toast</Button>
</template>
<script lang="ts">
import showToast from "../../lib/showToast";
import Button from "../../lib/Button.vue";
import { h } from "vue";
export default {
  components: { Button },
  setup() {
    const click = () => {
      showToast({
        content: h("h1", "你好啊"),
        showTime: 2000,
      });
    };
    return { click };
  },
};
</script>