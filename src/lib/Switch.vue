<template>
  <button :class="{ on: on }" @click="toggle"><span></span></button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    on: {
      type: Boolean,
      defult: false
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:on", !props.on);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
button {
  $h: 12px;
  $h2: 16px;
  height: $h;
  width: $h * 2.3;
  background: lightgray;
  outline: none;
  border: none;
  border-radius: $h;
  position: relative;
  > span {
    display: inline-block;
    width: $h2;
    height: $h2;
    background: lightgray;
    position: absolute;
    border-radius: 50%;
    top: ($h - $h2) / 2;
    left: 0;
    transition: all 250ms;
  }
  &.on {
    background: red;
    > span {
      background: red;
      left: calc(100% - #{$h2});
    }
  }
}
</style>