<template>
  <label>
    <input type="radio" v-model="picked" v-bind="$attrs" />
    <i />
    <slot />
  </label>
</template>
<script lang="ts">
export default {
  props: {
    modelValue: {},
  },
  computed: {
    picked: {
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
<style lang="scss" scoped>
label {
    cursor: pointer;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + i {
  transition: all 3s;
  font: normal normal normal 26px/1 "Material Design Icons";
}
input[type="radio"] + i::before {
  transition: all 0.3s;
  content: "\F043D";
  color: grey;
}

input[type="radio"]:checked + i::before {
  transition: all 0.3s;
  content: "\F043E";
  color: red;
}
</style>