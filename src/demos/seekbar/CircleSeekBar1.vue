<demo>
圆形进度条
</demo>
<template>
  <CircleSeekBar
    :barRadius="80"
    :indicatorRadius="10"
    backgroundColor="green"
    color="orange"
    indicatiorColor="grey"
    :width="5"
    v-model:process="process"
  />
  <div>process:{{ process }}</div>
</template>
<script lang="ts">
import CircleSeekBar from "../../lib/CircleSeekBar.vue";
export default {
  components: {
    CircleSeekBar,
  },
  data() {
    return {
      process: 0.2,
    };
  },
};
</script>
<style lang="scss">
</style>