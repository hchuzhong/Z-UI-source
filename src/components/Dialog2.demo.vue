<demo>
  一键打开 Dialog
</demo>

<template>
  <Button @click="showDialog">打开对话框</Button>
</template>


<script lang="ts">
  import {h} from 'vue';
  import {Dialog, Button} from '../lib/index';
  import {openDialog} from '../lib/openDialog';

  export default {
    components: {Dialog, Button},
    setup() {
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '内容',
          ok(){
            console.log('ok');
          },
          cancel(){
            console.log('cancel');
          }
        })
      }
      return {showDialog};
    },
  };
</script>