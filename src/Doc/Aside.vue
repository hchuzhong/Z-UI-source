<template>
  <aside v-if="menuVisible">
    <h2>组件列表</h2>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 组件</router-link>
      </li>
      <!--      <li>-->
      <!--        <router-link to="/doc/input">Input 组件</router-link>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <router-link to="/doc/icon">Icon 组件</router-link>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <router-link to="/doc/tree">Tree 组件</router-link>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <router-link to="/doc/form">Form 组件</router-link>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <router-link to="/doc/table">Table 组件</router-link>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <router-link to="/doc/scroll">Scroll 组件</router-link>-->
      <!--      </li>-->
    </ol>
  </aside>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible');
      return {menuVisible};
    }
  };
</script>

<style lang="scss" scoped>
  aside {
    flex-shrink: 0;
    background: lightblue;
    width: 150px;
    padding: 70px 16px 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
</style>