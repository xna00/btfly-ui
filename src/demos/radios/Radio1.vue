<demo>
Radio
</demo>
<template>
  <Radio v-model="picked" value="r1">R1</Radio>
  <br/>
  <Radio v-model="picked" value="r2">R2</Radio>
  <br/>
  <Radio v-model="picked" value="r3">R3</Radio>

  <div>picked:{{ picked }}</div>
</template>
<script lang="ts">
import Radio from "/@lib/Radio.vue";
export default {
  components: {
    Radio,
  },
  data() {
    return {
      picked: "r1",
    };
  },
};
</script>