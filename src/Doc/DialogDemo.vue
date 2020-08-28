<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <div style="position: relative; z-index: 1;">
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>加粗了的标题</strong>
      </template>
      <template v-slot:content>
        <div>你好</div>
        <div>哈哈</div>
      </template>
    </Dialog>
  </div>
  <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: #1890ff;"></div>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';

  export default {
    components: {Dialog, Button},
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const f1 = () => {
        return false;
      };
      const f2 = () => {};
      return {x, toggle, f1, f2};
    },
  };
</script>