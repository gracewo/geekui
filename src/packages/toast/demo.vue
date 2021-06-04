<template>
  <div class="demo">
    <h2>基本用法</h2>
    <gk-cell
      title="Text 文字提示"
      is-link
      @click="textToast('网络失败，请稍后再试~')"
    ></gk-cell>
    <gk-cell
      title="Success 成功提示"
      is-link
      @click="successToast('成功提示')"
    ></gk-cell>
    <gk-cell
      title="Error 失败提示"
      is-link
      @click="errorToast('失败提示')"
    ></gk-cell>
    <gk-cell
      title="Warning 警告提示"
      is-link
      @click="warningToast('警告提示')"
    ></gk-cell>
    <gk-cell
      title="Loading 加载提示"
      is-link
      @click="loadingToast('加载中')"
    ></gk-cell>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('toast');
import { Toast } from '@/geekui';
export default createDemo({
  setup() {
    const textToast = msg => {
      Toast.text(msg);
    };
    const successToast = msg => {
      Toast.success(msg);
    };
    const errorToast = msg => {
      Toast.fail(msg);
    };
    const warningToast = msg => {
      Toast.warn(msg);
    };
    const loadingToast = msg => {
      Toast.loading(msg);
    };
    return {
      textToast,
      successToast,
      errorToast,
      warningToast,
      loadingToast
    };
  }
});
</script>

<style lang="scss" scoped></style>
