<template>
  <div class="demo">
    <svg
      class="icon"
      :class="{ 'code-visible': codeVisible }"
      aria-hidden="true"
      @click="codeVisibleToggle"
    >
      <use xlink:href="#icon-code"></use>
    </svg>
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <transition name="demo-code">
      <div class="demo-code" v-if="codeVisible">
        <div :class="['copy-succed-text', { 'copy-succed': copySucced }]">
          复制成功
        </div>
        <svg class="icon copy-button" aria-hidden="true" @click="copy">
          <use xlink:href="#icon-copy2"></use>
        </svg>
        <div class="code">
          <pre v-html="html"></pre>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "../index.scss";

import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  props: {
    component: Object,
    showCode: {
      type: Boolean,
      default: true,
    },
  },
  components: { Button },
  setup(props) {
    const html = Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      "html"
    );
    const title = props.component.__sourceCodeTitle;
    const codeVisible = props.showCode ? ref(true) : ref(false);
    const codeVisibleToggle = () => {
      codeVisible.value = !codeVisible.value;
    };
    const copySucced = ref(false);
    const copy = () => {
      const input = document.createElement("input");
      input.value = props.component.__sourceCode;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      copySucced.value = true;
      setTimeout(() => {
        copySucced.value = false;
      }, 500);
    };
    return {
      Prism,
      title,
      html,
      codeVisible,
      codeVisibleToggle,
      copy,
      copySucced,
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
$theme-color: #76a477;
.demo-code-enter-active,
.demo-code-leave-active {
  transition: all 0.2s linear;
}

.demo-code-enter-from,
.demo-code-leave-to {
  height: 0;
}
.demo-code-enter-to,
.demo-code-leave-from {
  height: 300px;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 3px;
  position: relative;
  > svg {
    position: absolute;
    top: 8px;
    right: 6px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &.code-visible {
      color: $theme-color;
    }
  }

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
    overflow: auto;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    * {
      margin: auto 5px;
    }
  }
  &-code {
    border-top: 1px dashed $border-color;
    overflow: auto;
    position: relative;
    > .copy-succed-text {
      color: $theme-color;
      position: absolute;
      right: 40px;
      top: 30px;
      font-size: 13.333px;
      opacity: 0;
      cursor: auto;
      &.copy-succed {
        top: 7px;
        opacity: 1;
        transition: all 250ms;
      }
    }
    > .copy-button {
      position: absolute;
      top: 4px;
      right: 6px;
      cursor: pointer;
      width: 20px;
      height: 20px;

      @media (any-hover: hover) {
        &:hover {
          color: $theme-color;
        }
      }
      &:active {
        color: $theme-color;
      }
    }
    > .code {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 8px 16px;
      > pre {
        line-height: 1.1;
        font-family: Consolas, "Courier New", Courier, monospace;
        margin: 0;
      }
    }
  }
}
</style>