<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: "fanTabsHead",
    props:{

    },
  }
</script>

<style scoped lang="scss">
  .tabs-head {
  }
</style>