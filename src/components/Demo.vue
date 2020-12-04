<template>
  <div class="demo">
    <Button @click="click" theme="text" class="copy">复制</Button></Button>
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button v-if="!codeVisible" @click="codeVisibleToggle">显示代码</Button>
      <Button v-else @click="codeVisibleToggle">隐藏代码</Button>
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
import "../index.scss"

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
    return { Prism, title, html, codeVisible, codeVisibleToggle };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo-code-enter-active, .demo-code-leave-active {
  transition: all .2s linear;
  // padding: 0;
}

.demo-code-enter-from, .demo-code-leave-to {
  // opacity: 0;
  // transform: translateX(-150px);
  height: 0;
  // padding: 0;
}
.demo-code-enter-to, .demo-code-leave-from {
  height: 300px;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 3px;
  position: relative;
  > .copy {
    position: absolute;
    top: 3px;
    right: 3px;
    &:hover {
      // border: 1px solid red;
      cursor: pointer;
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