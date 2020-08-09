<template>
  <div class="home">
    <TopNav/>
    <div class="banner">
        <h1>Z-UI</h1>
        <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
        <div class="actions">
          <router-link to="/doc">查看文档</router-link> |
          <a href="https://github.com/hchuzhong?tab=repositories">GitHub</a>
        </div>
      </div>
    </div>
</template>

<script type="ts">
  import TopNav from '../components/TopNav.vue'
  export default {
    components: {TopNav}
  }
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