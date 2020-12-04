<demo>
按钮
</demo>
<template>
<div class="button1">
  <Button @click="click" theme="button">按钮0000000000000000000000000000000000000</Button>
  <Button @click="click" :indictorVisible="true" theme="button">按钮</Button>
  <Button @click="click" theme="text">按钮</Button>
</div>
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
<style lang="scss" scoped>
.button1 {
  display: flex;
  align-items: center;
}
</style>