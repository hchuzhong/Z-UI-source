<demo>
  常规使用
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
  import {Tabs, Tab} from '../lib/index';
  import {ref} from 'vue';

  export default {
    components: {
      Tabs, Tab
    },
    setup() {
      const x = ref('导航一');
      return {x};
    }
  };
</script>