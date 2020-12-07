<template>
  <div class="btfly-switch">
    <button :class="[{ on: on }, size]" @click="toggle">
      <span ref="span"></span>
    </button>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
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
    const span = ref<HTMLSpanElement>(null);
    onMounted(() => {
      console.log(span.value);
      let downState = false;
      const down = () => {};
      span.value.addEventListener("mousedown", () => {
        console.log("mousedown");
        console.dir({ ...arguments });
      });
      span.value.addEventListener("touchstart", () => {
        console.log("touchstart");
      });
    });
    return { toggle, span };
  },
};
</script>
<style lang="scss">
@import "base.scss";
$bg-color: #76a477;
.btfly-switch {
  display: inline-block;
  margin: 3px;
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
      background: $bg-color;
      > span {
        background: $bg-color;
        left: calc(100% - 2em);
      }
    }
  }
}
</style>