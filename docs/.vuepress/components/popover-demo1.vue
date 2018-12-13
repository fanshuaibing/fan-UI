<template>
  <div style="padding-top: 16px;">
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出层
        <g-button>支持HTMl</g-button>
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import GButton from '../../../src/button'
  import GPopover from '../../../src/popover'
  export default {
    components: {GButton, GPopover},
  }
</script>