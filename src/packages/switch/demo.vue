<template>
  <div class="demo">
    <h2>基础用法</h2>
    <gk-cell>
      <gk-switch v-model="checked" />
    </gk-cell>

    <h2>禁用状态</h2>
    <gk-cell>
      <gk-switch v-model="checked" disable />
    </gk-cell>

    <h2>change事件</h2>
    <gk-cell>
      <gk-switch v-model="checked" @change="change" />
    </gk-cell>

    <h2>异步控制</h2>
    <gk-cell>
      <gk-switch :model-value="checkedAsync" @change="changeAsync" />
    </gk-cell>

    <h2>自定义颜色</h2>
    <gk-cell>
      <gk-switch
        v-model="checked"
        @change="switchChange"
        active-color="blue"
      />
    </gk-cell>

    <h2>支持文字</h2>
    <gk-cell>
      <gk-switch
        v-model="checked"
        @change="switchChange"
        active-text="开"
        inactive-text="关"
      />
    </gk-cell>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('switch');
export default createDemo({
  setup() {
    let { proxy } = getCurrentInstance() as any;
    const checked = ref(true);
    const checkedAsync = ref(true);

    const change = (value: boolean, event: Event) => {
      proxy.$toast.text(`触发了change事件，开关状态：${value}`);
    };
    const changeAsync = (value: boolean, event: Event) => {
      proxy.$toast.text(`2秒后异步触发 ${value}`);
      setTimeout(() => {
        checkedAsync.value = value;
      }, 2000);
    };

    return {
      checked,
      checkedAsync,
      change,
      changeAsync
    };
  }
});
</script>

<style lang="scss" scoped></style>
