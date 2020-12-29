<demo>
圆形进度条
</demo>
<template>
  <CircleSeekBar
    :barRadius="50"
    :indicatorRadius="5"
    backgroundColor="green"
    color="orange"
    indicatiorColor="grey"
    :width="2"
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