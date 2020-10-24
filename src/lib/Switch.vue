<template>
  <div class="btfly-switch">
    <button :class="[{ on: on }, size]" @click="toggle"><span></span></button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
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
.btfly-switch {
  > button {
    &.small {
      font-size: 10px;
    }
    &.normal {
      font-size: 15px;
    }
    &.large {
      font-size: 20px;
    }

    height: 1.5em;
    width: 3.5em;

    background: lightgray;
    outline: none;
    border: none;
    border-radius: 0.75em;
    position: relative;
    cursor: pointer;
    transition: all 250ms 100ms;
    > span {
      display: inline-block;
      width: 2em;
      height: 2em;
      background: lightgray;
      position: absolute;
      border-radius: 50%;
      top: -0.25em;
      left: 0;
      transition: all 250ms;
    }
    &.on {
      background: red;
      > span {
        background: red;
        left: calc(100% - 2em);
      }
    }
  }
}
</style>