<template>
  <div class="layout">
    <Topnav />
    <div class="content">
      <transition name="aside">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/start">开始</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
.aside-enter-active, .aside-leave-active {
  transition: transform .25s ease;
}

.aside-enter-from, .aside-leave-to {
  transform: translateX(-150px);
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-weight: 400;
  * {
    font-weight: inherit;
  }
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: white;
  width: 250px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        border-radius: 2px;
        background: white;
        transition: all 0.75s;
        &:active {
          background: #f6f6f6;
        }
      }
      .router-link-active {
        background: #c6f1bd;
        color: green;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>