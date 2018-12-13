<template>
  <div>
    <div>
      <g-button-group>
        <g-button icon="left"></g-button>
        <g-button >默认</g-button>
        <g-button icon="right"></g-button>
      </g-button-group>
    </div>
  </div>

</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    }
  }
</script> >