<template>
  <div class="demo">
    <span class="copy">复制</span>
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <button>show</button>
    </div>
    <div class="demo-code">
      <pre v-html="html"></pre>
    </div>
  </div>
</template>
<script lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  props: {
    component: Object,
  },
  setup(props) {
    const html = Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      "html"
    );
    const title = props.component.__sourceCodeTitle;
    return { Prism, title, html };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
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
      border: 1px solid red;
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
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>