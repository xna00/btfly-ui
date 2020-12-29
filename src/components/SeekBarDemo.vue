<template>
  <Demo :component="CircleSeekBar1" />
  <Demo :component="LinearSeekBar1" />
</template>
<script lang="ts">
import CircleSeekBar1 from "../demos/seekbar/CircleSeekBar1.vue";
import LinearSeekBar1 from "../demos/seekbar/LinearSeekBar1.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { CircleSeekBar1, LinearSeekBar1 };
  },
};
</script>