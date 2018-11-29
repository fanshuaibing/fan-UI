<template>
  <div class="row"  :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'fanRow',
    props: {
      gutter: {
        Number, String
      }
    },
    computed:{
      rowStyle(){
        let gutter = this.gutter;
        return{
          marginLeft:-gutter/2 +'px',
          marginRight:-gutter/2 +'px'
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }

  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;

  }
</style>