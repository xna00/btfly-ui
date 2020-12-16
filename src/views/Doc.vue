<template>
  <div class="layout">
    <Topnav />
    <div class="content">
      <transition name="aside">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li v-for="link in menuList.docList" :key="link.to">
              <router-link :to="link.to">{{ link.name }}</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li v-for="link in menuList.componentList" :key="link.to">
              <router-link :to="link.to">{{ link.name }}</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <div class="main-content">
          <router-view></router-view>
          <footer>
            <span class="prev" v-if="prev"
              >←<router-link :to="prev.to">{{ prev.name }}</router-link></span
            >
            <span class="next" v-if="next"
              ><router-link :to="next.to">{{ next.name }}</router-link
              >→</span
            >
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref, provide, onMounted, watchEffect } from "vue";
import Topnav from "../components/Topnav.vue";
import { router } from "../router";
export default {
  components: {
    Topnav,
  },
  setup() {
    const link = (to, name) => {
      return {
        to,
        name,
      };
    };
    const menuList = ref({
      docList: [
        link("/doc/intro", "介绍"),
        link("/doc/install", "安装"),
        link("/doc/start", "开始"),
      ],
      componentList: [
        link("/doc/switch", "Switch 组件"),
        link("/doc/button", "Button 组件"),
        link("/doc/dialog", "Dialog 组件"),
        link("/doc/tabs", "Tabs 组件"),
        link('/doc/checkbox', 'Checkbox 组件')
      ],
    });
    const prev = ref(null);
    const next = ref(null);
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    onMounted(() => {
      watchEffect(() => {
        const list = menuList.value.docList.concat(
          menuList.value.componentList
        );
        const index = list.findIndex(
          (link) => link.to === router.currentRoute.value.path
        );
        prev.value = list[index - 1];
        next.value = list[index + 1];
      });
    });
    return { menuVisible, menuList, prev, next };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
$theme-color: #76a477;
.aside-enter-active,
.aside-leave-active {
  transition: transform 0.25s ease;
}

.aside-enter-from,
.aside-leave-to {
  transform: translateX(-250px);
}
footer {
  display: flex;
  justify-content: space-between;
  color: $theme-color;
  > .next {
    margin-left: auto;
  }
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
    padding-left: 306px;
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
    background: white;
    @media (min-width: 500px) {
      display: flex;
      > .main-content {
        flex-grow: 1;
        padding: 16px 0;
      }
    }
    > .main-content {
      max-width: 740px;
      margin: 0 auto;
      @media (max-width: 500px) {
        padding: 16px;
      }
    }
  }
}
aside {
  background: white;
  @media (min-width: 500px) {
    width: 300px;
  }
  width: 200px;
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