<template>
  <div class="topnav">
    <div
      class="toggleAside"
      @click="toggleMenu"
      v-if="menuIconVisible"
      :class="{ 'icon-close': menuVisible }"
    >
      <button>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gbtfly-fill"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">
        <li>文档</li>
      </router-link>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, onMounted, ref, Ref } from "vue";
import { router } from "../router";
export default {
  setup(props, context) {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const menuIconVisible = ref(true);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    onMounted(function () {
      if (router.currentRoute.value.path === "/") {
        menuIconVisible.value = false;
      }
    });
    return { menuIconVisible, menuVisible, toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #76a477;
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  @media (max-width: 500px) {
    justify-content: flex-end;
  }
  justify-content: space-between;
  align-items: flex-end;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  > .logo {
    max-width: 6em;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: $color;
    li {
      font-size: 1.3em;
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > button {
      width: 23px;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0);
      outline: none;
      border: none;
      > span {
        display: block;
        width: 100%;
        height: 0;
        margin-top: 5px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid transparent;
        background: $color;
        border-radius: 1px;
        transform-origin: left center;
        transition: all 0.3s ease;
      }
    }
    &.icon-close {
      span:nth-child(1) {
        transform: rotateZ(45deg);
        width: 19.8px;
      }
      span:nth-child(2) {
        background: transparent;
      }
      span:nth-child(3) {
        transform: rotateZ(-45deg);
        width: 19.8px;
      }
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>