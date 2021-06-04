<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="demo-button-row">
      <gk-button type="primary">主要按钮</gk-button>
      <gk-button type="info">信息按钮</gk-button>
      <gk-button type="default">默认按钮</gk-button>
    </div>
    <div class="demo-button-row2">
      <gk-button type="danger">危险按钮</gk-button>
      <gk-button type="warning">警告按钮</gk-button>
      <gk-button type="success">成功按钮</gk-button>
    </div>
    <h2>朴素按钮</h2>
    <div class="demo-button-row2">
      <gk-button plain type="primary">朴素按钮</gk-button>
      <gk-button plain type="info">朴素按钮</gk-button>
    </div>
    <h2>禁用状态</h2>
    <div class="demo-button-row2">
      <gk-button disabled type="primary">禁用状态</gk-button>
      <gk-button plain disabled type="info">禁用状态</gk-button>
      <gk-button plain disabled type="primary">禁用状态</gk-button>
    </div>
    <h2>按钮形状</h2>
    <div class="demo-button-row2">
      <gk-button shape="square" type="primary">方形按钮</gk-button>
      <gk-button type="info">圆形按钮</gk-button>
    </div>
    <h2>加载状态</h2>
    <div class="demo-button-row2">
      <gk-button loading type="info"></gk-button>
      <gk-button loading type="warning">加载中...</gk-button>
      <gk-button :loading="isLoading" type="success" @click="changeLoading">Click me!</gk-button>
    </div>
    <h2>图标按钮</h2>
    <div class="demo-button-row2">
      <gk-button shape="square" plain  type="primary" icon="star-fill"></gk-button>
      <gk-button shape="square" type="primary" icon="star">收藏</gk-button>
    </div>

    <h2>按钮尺寸</h2>
    <div class="demo-button-row2">
      <gk-button size="large" type="primary" style="margin-bottom: 10px">大号按钮</gk-button>
      <gk-button type="primary">普通按钮</gk-button>
      <gk-button size="small" type="primary">小型按钮</gk-button>
    </div>
    <h2>块级元素</h2>
    <div class="demo-button-row2">
      <gk-button block type="primary">块级元素</gk-button>
    </div>
    <h2>自定义颜色</h2>
    <div class="demo-button-row2">
      <gk-button color="#7232dd">单色按钮</gk-button>
      <gk-button color="#7232dd" plain>单色按钮</gk-button>
      <gk-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变按钮
      </gk-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
  props: {},
  setup(props) {
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.gk-button {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
