<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>Z-UI</h1>
        <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
        <div class="actions">
          <router-link to="/doc">查看文档</router-link>
          <a href="https://github.com/hchuzhong?tab=repositories">GitHub</a>
        </div>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</template>

<script type="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    components: {TopNav}
  };
</script>

<style lang="scss" scoped>
  $green: #02bcb0;
  $border-radius: 4px;
  $color: #007974;

  .topnavAndBanner {
    background: rgb(255, 255, 255);
    background: linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  }

  .features {
    > svg {
      width: 64px;
      height: 64px;
    }
  }

  .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>