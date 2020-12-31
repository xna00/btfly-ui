<demo>
多个Checkbox
</demo>
<template>
  <Checkbox value="1" v-model="values">1</Checkbox>
  <br />
  <Checkbox value="2" v-model="values">2</Checkbox>
  <br />
  <Checkbox value="3" v-model="values">3</Checkbox>
  <div>values: {{ values }}</div>
</template>
<script lang="ts">
import Checkbox from "/@lib/Checkbox.vue";
export default {
  components: {
    Checkbox,
  },
  data() {
    return {
      values: [],
    };
  },
};
</script>