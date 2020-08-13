<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <Aside/>
      <Main/>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue'
  import Aside from '../Doc/Aside.vue'
  import Main from '../Doc/Main.vue'

  export default {
    components: {TopNav, Aside, Main}
  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav{
      flex-shrink: 0;
    }
    .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
    .content {
      display: flex;
    }
  }
</style>