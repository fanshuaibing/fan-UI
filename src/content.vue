<template>
  <div class="g-layout-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "fanContent"
  }
</script>

<style lang="scss" scoped>
  .g-layout-content{
    flex-grow: 1;
  }
</style>