<template>
  <div class="topnav">
    <div class="toggleAside" @click="toggleMenu" v-if="menuIconVisible">
     <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu1"></use>
      </svg> 
    </div>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gbtfly-fill"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>文档</li>
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
$color: #007974;
.topnav {
  // color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
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
    > li {
      font-size: 1.3em;
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    > svg {
      width: 32px;
      height: 32px;
    }
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    // background: fade-out(black, 0.9);
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