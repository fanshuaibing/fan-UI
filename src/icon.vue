<template>
	<svg class="g-icon">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script>
	import './svg'
	export default {
	  name:'fanIcon',
		props:['name']
	}
</script>

<style lang="scss">

	.g-icon {
		width: 1em;
		height: 1em;
	}

</style>