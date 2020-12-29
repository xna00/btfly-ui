<demo>
直线进度条
</demo>
<template>
  <LinearSeekBar
    backgroundColor="black"
    color="red"
    :barHeight="4"
    :barWidth="300"
    :indicatorRadius="5"
    indicatiorColor="green"
    v-model:process="process"
  />
  <div>process:{{ process }}</div>
</template>
<script lang="ts">
import LinearSeekBar from "../../lib/LinearSeekBar.vue";
export default {
  components: {
    LinearSeekBar,
  },
  data() {
    return {
      process: 0.2,
    };
  },
};
</script>