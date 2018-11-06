<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="gutter && {paddingLeft:gutter/2 +'px',paddingRight:gutter/2 +'px' }">
    <div style="border: 1px solid #333 ;height: 50px">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'fanCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 50px;

    width: 50%;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24 ) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24 ) * 100%;
      }
    }
  }

</style>