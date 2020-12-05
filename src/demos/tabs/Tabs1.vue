<demo>
Tabs
</demo>
<template>
  <Tabs v-model:selectedIndex="index">
    <Tab title="标题11">内容1</Tab>
    <Tab title="标题2222">内容2</Tab>
    <Tab title="标题333333">内容3</Tab>
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