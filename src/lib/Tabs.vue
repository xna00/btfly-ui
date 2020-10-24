<template>
  <div class="btfly-tabs">
    <div class="btfly-tabs-nav" ref="container">
      <div
        class="btfly-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="title"
        @click="select(index)"
        :class="{ selected: index === selectedIndex }"
        :ref="setEl"
      >
        {{ title }}
      </div>
      <div class="btfly-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="btfly-tabs-content">
      <component :is="selectedTab" :key="selectedTab.props.title" />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onBeforeUpdate, onMounted, ref, watchEffect } from "vue";

export default {
  setup(props, context) {
    console.log(context.slots.default());
    const tabs = context.slots.default();
    const titles = tabs.map((tab) => tab.props.title);
    const current = ref(tabs[0]);
    const selectedIndex = ref(0);
    const selectedTab = computed(() => {
      console.log(selectedIndex.value);
      return tabs[selectedIndex.value];
    });
    let navElements = [];
    const setEl = (el) => {
      navElements.push(el);
    };
    const select = (i) => {
      selectedIndex.value = i;
    };
    const indicator = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        indicator.value.style.width =
          navElements[selectedIndex.value].clientWidth + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = navElements[
          selectedIndex.value
        ].getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      });
    });
    const count = ref(0);
    onBeforeUpdate(() => {
      navElements = [];
    });
    const container = ref<HTMLDivElement>(null);
    return {
      titles,
      tabs,
      current,
      select,
      indicator,
      selectedIndex,
      selectedTab,
      navElements,
      setEl,
      container,
    };
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.btfly-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>