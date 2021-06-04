<template>
  <div class="demo">
    <h2>基本用法</h2>
    <gk-cell title="我是标题" desc="描述文字"></gk-cell>
    <gk-cell
      title="我是标题"
      sub-title="副标题描述"
      desc="描述文字"
    ></gk-cell>
    <gk-cell title="点击测试" @click="testClick"></gk-cell>

    <h2>直接使用插槽(slot)</h2>

    <gk-cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </gk-cell>

    <gk-cell-group title="链接 | 分组用法">
      <gk-cell title="链接" is-link></gk-cell>
      <gk-cell
        title="URL 跳转"
        desc="https://jd.com"
        is-link
        url="https://jd.com"
      ></gk-cell>
      <gk-cell title="路由跳转 ’/‘ " to="/"></gk-cell>
    </gk-cell-group>

    <gk-cell-group title="自定义右侧箭头区域">
      <gk-cell title="Switch">
        <template v-slot:link>
          <gk-switch v-model="switchChecked" />
        </template>
      </gk-cell>
    </gk-cell-group>

    <h2>展示图标</h2>
    <gk-cell title="姓名" icon="my" desc="张三" isLink> </gk-cell>
    <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
    <gk-cell desc-text-align="left" desc="张三"></gk-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
import { Toast } from '@/geekui';
const { createDemo } = createComponent('cell');
export default createDemo({
  setup() {
    const testClick = (event: Event) => {
      Toast.text('点击事件');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked };
  }
});
</script>

<style lang="scss" scoped></style>
