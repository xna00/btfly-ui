<template>
  <div class="demo">
    <Button
      @click="copy"
      theme="text"
      :class="['copy-button', { 'copy-succed': copySucced }]"
      >复制代码</Button
    >
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="codeVisibleToggle">{{
        !codeVisible ? "显示代码" : "隐藏代码"
      }}</Button>
    </div>
    <transition name="demo-code">
      <div class="demo-code" v-if="codeVisible">
        <pre v-html="html"></pre>
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
  },
  components: { Button },
  setup(props) {
    const html = Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      "html"
    );
    const title = props.component.__sourceCodeTitle;
    const codeVisible = ref(true);
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
.demo-code-enter-active,
.demo-code-leave-active {
  transition: all 0.2s linear;
  // padding: 0;
}

.demo-code-enter-from,
.demo-code-leave-to {
  // opacity: 0;
  // transform: translateX(-150px);
  height: 0;
  // padding: 0;
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
  > .copy-button {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
    &::before {
      content: "复制成功";
      // border: 1px solid red;
      position: absolute;
      right: 90px;
      top: 30px;
      opacity: 0;
      // transition: opacity 250ms;
    }
    &.copy-succed::before {
      top: 3px;
      opacity: 1;
      transition: all 250ms;
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
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    overflow: auto;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>