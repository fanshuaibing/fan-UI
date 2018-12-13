<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible= false" v-if="close">Close</button>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "fanSider",
    props:{
      close:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        visible:true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button{
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .slide-enter-active ,
  .slide-leave-active {
    transition: all .8s ;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }

</style>