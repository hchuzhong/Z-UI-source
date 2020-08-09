<template>
  <div class="doc">
    <TopNav/>
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
  .doc {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content {
      display: flex;
      flex-grow: 1;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>