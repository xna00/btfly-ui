<template>
  <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    file: String,
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.file).then((result) => {
      content.value = result.default;
    });
    return { content };
  },
};
</script>