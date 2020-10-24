<template>
  <div class="btfly-button">
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts">
export default {
};
</script>
<style lang="scss">
.btfly-button {
  > button {
    border: 1px solid red;
    border-radius: 4px;
    outline: none;
  }
}
</style>