<template>
  <router-view />
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup(props) {},
};
</script>
