<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1 id="test1">蝴蝶UI</h1>
      <h2>体验相当好</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="js">
import { ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    // const h1 = document.querySelector("#test1");
    // h1.onclick = ()=>{console.log('clicked')}
    // h1.ontouchstart = ()=>{console.log('touched')}
  },
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
