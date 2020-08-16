<template>
  <div>Button 示例</div>
  <h1>示例一</h1>
  <div>
    <Button>你好</Button>
    <Button theme="Button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button size="big">大杯</Button>
    <Button>中杯</Button>
    <Button size="small">小杯</Button>
  </div>
  <div>
    <Button theme="link" size="big">大杯</Button>
    <Button theme="link">中杯</Button>
    <Button theme="link" size="small">小杯</Button>
  </div>
  <div>
    <Button theme="text" size="big">大杯</Button>
    <Button theme="text">中杯</Button>
    <Button theme="text" size="small">小杯</Button>
  </div>
  <h1>示例三</h1>
  <div>
    <Button level="main">重要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">重要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">重要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <h1>示例四</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
  <h1>示例五</h1>
  <div>
    <Button loading>加载中</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {Button},
    setup() {
      const onClick = () => {
        console.log('hi');
      };
      return {onClick};
    }
  };
</script>