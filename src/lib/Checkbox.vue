<template>
  <label class="btfly-checkbox">
    <input type="checkbox" v-model="checked" v-bind="$attrs" />
    <i />
    <slot />
  </label>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    modelValue: {},
  },
  computed: {
    checked: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
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