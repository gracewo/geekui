<template>
  <div class="doc-demo-preview">
    <iframe :src="url" frameborder="0" :style="`height:${clientHeight}px`"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'doc-demo-preview',
  props: {
    url: String
  },
  setup(){
    const state = reactive({
      clientHeight:document.documentElement.clientHeight-100
    })
    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss">
.doc {
  &-demo-preview {
    width: 358px;
    position: fixed;
    right: 30px;
    top: 85px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 20px;
    overflow: hidden;
    // padding-left: 24px;
    // padding-right: 24px;
    // background: url('../../assets/images/iphone-cases.png') no-repeat;
    background-size: cover;
    iframe {
      display: block;
      width: 100%;
    }
  }
}
</style>
