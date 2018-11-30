<template>
  <div class="layout" :class="layoutClass">
    <slot>

    </slot>
  </div>
</template>

<script>
  export default {
    name: "fanLayout",
    data(){
      return {
        layoutClass:{
          hasSider:false
        }
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'fanSider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #333333;
    &.hasSider{
      display: flex;
      flex-direction: row;
      flex-grow: 1;
    }
  }
</style>