<demo>
Tabs示例
</demo>
<template>
  <Tabs v-model:selectedIndex="index">
    <Tab title="Tab1">内容1</Tab>
    <Tab title="Tab2">内容2</Tab>
    <Tab title="Tab3">内容3</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tab from "../../lib/Tab.vue";
import Tabs from "../../lib/Tabs.vue";
export default {
  data() {
    return {
      index: 0,
    };
  },
  components: { Tab, Tabs },
  
};
</script>