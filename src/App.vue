<template>
  <router-view />
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
  },
  setup(props) {},
};
</script>
