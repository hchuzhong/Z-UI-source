<template>
  <aside v-if="menuVisible">
    <h2>文档</h2>
    <ol>
      <li>
        <router-link to="/doc/intro">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
      <li>
        <router-link to="/doc/get-started">开始使用</router-link>
      </li>
    </ol>
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
    background: #cdf4f2;
    width: 150px;
    padding: 70px 0 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 5;
    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }

    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
        .router-link-active {
          background: white;
        }
      }
    }
  }
</style>