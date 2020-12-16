<template>
  <label class="btfly-checkbox">
    <input type="checkbox" @change="onChange" :checked="checked" />
    <i />
    <slot />
  </label>
</template>
<script lang="ts">
export default {
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const onChange = (event) => {
      console.log();
      context.emit("update:checked", event.target.checked);
    };
    return { onChange };
  },
};
</script>
<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css");
.btfly-checkbox {
  cursor: pointer;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + i {
    transition: all 0.3s;
    font: normal normal normal 16px/1 "Material Design Icons";
    font-family: "Material Design Icons";
    font-size: inherit;
  }
  input[type="checkbox"] + i::before {
    content: "\F0131";
    color: grey;
  }

  input[type="checkbox"]:checked + i::before {
    content: "\F0132";
    color: red;
  }
}
</style>