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
.btfly-checkbox {
  cursor: pointer;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + i {
    font: normal normal normal 26px/1 "Material Design Icons";
  }
  input[type="checkbox"] + i::before {
    transition: all 0.3s;
    content: "\F0131";
    color: grey;
  }

  input[type="checkbox"]:checked + i::before {
    transition: all 0.3s;
    content: "\F0132";
    color: red;
  }
}
</style>