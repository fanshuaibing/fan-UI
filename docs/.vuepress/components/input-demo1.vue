<template>
  <div>
    <g-input value="这是value"></g-input>
    <g-input value="readonly" readonly></g-input>
    <g-input value="disabled" disabled></g-input>
    <g-input error="error"></g-input>
  </div>

</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'g-input':Input
    }
  }
</script> >