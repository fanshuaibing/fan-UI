<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fanTabsHead",
    inject: ['eventBus'],
    props:{

    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid #333;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>