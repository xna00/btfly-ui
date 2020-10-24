<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "btflyTab",
  props: {
    title: String,
  },
};
</script>