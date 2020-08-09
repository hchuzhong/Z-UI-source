<template>
  <div class="home">
    <TopNav/>
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>Z-UI</h1>
        <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
        <div class="links">
          <router-link to="/doc">查看文档</router-link> |
          <a href="https://github.com/hchuzhong?tab=repositories">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopNav from '../components/TopNav.vue'
  export default {
    components: {TopNav}
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .intro{
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: lightgrey;
    }
  }
</style>