<template>
  <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: String,
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return { content };
  },
};
</script>