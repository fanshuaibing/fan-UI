<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		mounted(){
			for (let node of this.$el.children){
				let name = node.nodeName.toLowerCase();
				if(name !=='button'){
					console.log(`g-button-group 的子元素应该都是 g-button,但你写的是 ${name}`)
				}
			}
		}
	}
</script>

<style lang="scss" scoped >
  $border-radius: 4px;
	.g-button-group{
		display: inline-flex;
		vertical-align: middle;
		> .g-button{
			border-radius: 0;
			&:not(:first-child){
				margin-left: 0;
			}
			&:first-child{
				border-top-left-radius: $border-radius;
				border-bottom-left-radius: $border-radius;
			}
			&:last-child{
				border-top-right-radius: $border-radius;
				border-bottom-right-radius: $border-radius;
			}
			&:hover{
				position: relative;
				z-index: 1;
			}
		}

	}
</style>