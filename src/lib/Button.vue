<template>
  <button class="btfly-button" :class="{ [`btfly-button-${theme}`]: theme }">
    <span class="btfly-button-indictor" v-if="indictorVisible"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    indictorVisible: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>
<style lang="scss">
.btfly-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border: 1px solid;
  border-color: transparent;
  outline: none;
  padding-left: 1em;
  padding-right: 1em;
  height: 2.2em;
  white-space: nowrap;
  // font-size: 10px;
  // background: red;
  cursor: pointer;
  &-button {
    border-radius: 1.2em;
    background: whitesmoke;
    &:hover {
      border-color:lightskyblue ;
      color: lightskyblue;
    }
  }
  &-text {
    background: transparent;
    color: red;
    &:hover {
      background: whitesmoke;
    }
  }
  &-indictor {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid;
    border-color: lightskyblue lightskyblue lightskyblue transparent;
    border-radius: 50%;
    margin-right: 6px;
    animation: btfly-button-indictor-spin 1s infinite linear;
  }
  @keyframes btfly-button-indictor-spin {
    0% {
      transform: rotateZ(0deg);
    }
    80% {
      transform: rotateZ(320deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
</style>