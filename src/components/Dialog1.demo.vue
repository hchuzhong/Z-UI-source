<demo>
  常规使用
</demo>

<template>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>内容</div>
      <div>内容</div>
    </template>
  </Dialog>
</template>


<script lang="ts">
  import {ref} from 'vue';
  import {Dialog, Button} from '../lib/index';

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
      return {x, toggle, f1, f2,};
    },
  };
</script>