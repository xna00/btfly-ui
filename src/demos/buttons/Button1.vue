<demo>
按钮
</demo>
<template>
  <Button @click="click">按钮</Button>
</template>
<script lang="ts">
import Button from "/src/lib/Button.vue";
export default {
  components: { Button },
  setup(props) {
    const click = () => {
      console.log(123);
    };
    return { click };
  },
};
</script>