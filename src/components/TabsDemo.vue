<template>
  <div>
      <Demo :component="Tabs1" />
      </div>
</template>
<script lang='ts'>
import Tabs1 from "../demos/tabs/Tabs1.vue";
export default {
  components: { Tabs1 },
  setup() {
    return { Tabs1 };
  },
};
</script>