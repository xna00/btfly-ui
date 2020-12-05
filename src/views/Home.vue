<template>
  <div>
    <Topnav />
    <div class="banner">
      <div class="yellow-icon-wrap">
        <svg class="yellow-icon icon" aria-hidden="true">
          <use xlink:href="#icon-gbtfly"></use>
        </svg>
      </div>

      <div class="right">
        <h1>蝴蝶UI</h1>
        <p>一个朴素的UI</p>
        <div class="actions">
          <a href=""><button>Github</button></a>
          <router-link to="/doc"><button>开始</button></router-link>
        </div>
      </div>
    </div>
    <div class="feature-wraper-outside">
      <h2>特色</h2>
      <div class="feature-wraper">
        <div class="feature">
          <div class="feature-icon">
            <svg class="yellow-icon icon" aria-hidden="true">
              <use xlink:href="#icon-vue"></use>
            </svg>
          </div>
          <div class="feature-title">基于Vue3</div>
          <div class="feature-subtitle">使用了Vue3 Composition API</div>
        </div>
        <div class="feature">
          <div class="feature-icon">
            <svg class="yellow-icon icon" aria-hidden="true">
              <use xlink:href="#icon-typescript"></use>
            </svg>
          </div>
          <div class="feature-title">基于TypeScript</div>
          <div class="feature-subtitle">源码使TypeScript书写</div>
        </div>
        <div class="feature">
          <div class="feature-icon">
            <svg class="yellow-icon icon" aria-hidden="true">
              <use xlink:href="#icon-light"></use>
            </svg>
          </div>
          <div class="feature-title">代码易读</div>
          <div class="feature-subtitle">每个组件的源代码极其简洁</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import { ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav
  },
};
</script>
<style lang="scss" scoped>
@keyframes fade-in {
  100% {
    opacity: 1;
  }
}
@keyframes fade-in-right {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.banner {
  padding: 120px 0 88px;
  @media (max-width: 1280px) {
    padding: 88px 0 59px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  .right {
    transform: translateX(30px);
    opacity: 0;
    animation: fade-in-right 1s forwards ease;
  }
  h1 {
    font-size: 51.333px;
    font-weight: 300;
    color: rgb(86, 86, 86);
    margin-bottom: 24px;
  }
  p {
    font-size: 18.333px;
    font-weight: 300;
    margin-bottom: 27px;
  }
  .yellow-icon-wrap {
    border: 1px solid #edc588;
    border-radius: 50%;
    border-color: transparent;
    svg {
      width: 308px;
      height: 308px;
      opacity: 0;
      animation: fade-in 0.75s forwards 0.25s ease;
      @media (max-width: 600px) {
        height: 260px;
        height: 260px;
      }
    }
    margin-right: 60px;
    @media (max-width: 600px) {
      margin: 0 0 30px;
    }
  }
  .actions {
    button {
      height: 2.5em;

      padding: 0 1.3em;
      cursor: inherit;
      border-radius: 1.25em;
      border: 1px solid rgb(86, 86, 86);
      outline: none;
      background: white;
      margin-right: 8px;
    }
    a {
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
    }
  }
}
.feature-wraper-outside {
  min-height: calc(100vh - 519px);
  @media (max-width: 1280px) {
    min-height: calc(100vh - 458px);
  }
  background: rgb(247, 247, 247);
  padding: 96px 0 0;
  @media (max-width: 500px) {
    padding-top: 30px;
  }
  h2 {
    font-weight: 300;
    text-align: center;
    &::before {
      content: "";
      display: block;
      border-bottom: 1px solid black;
      width: 4em;
      margin: 0 auto 1em;
    }
  }
  .feature-wraper {
    display: flex;
    padding-top: 50px;
    @media (max-width: 800px) {
      padding-top: 20px;
      flex-direction: column;
      align-items: center;
    }
    justify-content: space-around;
  }
  .feature {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 60px 200px;
    grid-template-rows: 35px 25px;
    font-weight: 300;
    .feature-icon {
      grid-row-start: 1;
      grid-row-end: 3;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .feature-title {
      font-size: 1.5em;
    }
    .feature-subtitle {
      font-size: 0.9em;
    }
  }
}
</style>
