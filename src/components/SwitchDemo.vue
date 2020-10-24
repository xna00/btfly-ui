<demo>
123456
</demo>
<template>
  <div>
    <div class="wrapper">
      <Switch v-model:on="switch1" size="small" />
      <Switch v-model:on="switch2" size="normal" />
      <Switch v-model:on="switch3" size="large" />
    </div>

    <Demo :component="SwitchDemo1" />
  </div>
</template>
<script>
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Demo from "../components/Demo.vue";
import SwitchDemo1 from "../demos/switchs/Switch.demo1.vue";

export default {
  components: { Switch, Demo, SwitchDemo1 },

  setup() {
    const switch1 = ref(true);
    const switch2 = ref(false);
    const switch3 = ref(true);
    return { switch1, switch2, switch3, Switch, SwitchDemo1 };
  },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  > * {
    margin-left: 20px;
  }
}
</style>