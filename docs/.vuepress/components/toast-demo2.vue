<template>
  <div style="padding-top: 16px;">
    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
  </div>
</template>
<style>
  .toastWrapper {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {GButton},
    methods: {
      onClickButton () {
        this.$toast('弹出可以关闭的', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('知道了')
            }
          }
        })
      }
    },
  }
</script>