<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "fanTabsBody",
    inject: ['eventBus'],
  }
</script>

<style scoped lang="scss">
  .tabs-body {

  }
</style>