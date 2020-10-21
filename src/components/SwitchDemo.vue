<template>
  <div>
    <Switch v-model:on="switchOn" />
    <article class="markdown-body">
      <p>switch demo</p>
      <pre><code>import Switch from './'</code></pre>
      <code>int main() { int a = 0; printf() }</code>
      
    </article>
    <article class="markdown-body" v-html="md"></article>
  </div>
</template>
<script>
import { ref } from 'vue';
import Switch from "../lib/Switch.vue";
import md from '../markdown/test.md'
export default {
  components: { Switch },
  
  setup() {
      const switchOn = ref(true)
      console.log(13241)
      return {switchOn, md}
  }
};
</script>