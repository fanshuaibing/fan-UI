<template>
  <div style="padding: 50px 0 ">
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="1" name="1">
        第一层
      </g-collapse-item>
      <g-collapse-item title="2" name="2">
        第二层
      </g-collapse-item>
      <g-collapse-item title="3" name="3">
        第三层
      </g-collapse-item>
      <g-collapse-item title="4" name="4">
        第四层
      </g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
  import GCollapse from '../../../src/collapse'
  import  GCollapseItem from '../../../src/collapse-item'

  export default {
    components: {GCollapse,GCollapseItem},
    data () {
      return {
        selectedTab:['1'],
      }
    }
  }
</script>