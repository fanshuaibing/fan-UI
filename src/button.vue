<template>
	<button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
	@click="$emit('click')">
		<g-icon class="icon" v-if="icon && !loading"  :name="icon"></g-icon>
		<g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
		<div class="g-button-content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
	import Icon from './icon'
	export default {
	  name:"fanButton",
		components:{
			'g-icon':Icon
		},
		props:{
			icon:{},
			loading:{
				type:Boolean,
				default:false
			},
			iconPosition:{
				type: String,
				default:'left',
				validator: function (value) {
					return value === 'left' || value === 'right'
					//第一个为 true 返回第一个 否则返回第二个
				}
			}

		}
	}
</script>

<style  lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
	@keyframes spin {
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}

	.g-button {
		font-size: $font-size;
		height: $button-height;
		padding: 0 .9em;
		border-radius: $border-radius;
		border: 1px solid $border-color;
		background: $button-bg;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		&:hover {
			border-color: $border-color-hover;
		}

		&:active {
			background-color: $button-active-bg;
		}

		&:focus {
			outline: none;
		}
		> .g-button-content{ order: 2;}
		>	.icon{order: 1;margin-right: .3em; }

		&.icon-right{
			>  .icon{order: 2; margin-right:0;margin-left: .3em}
			>  .g-button-content{order: 1;}
		}
		.loading{
			animation: spin 2s infinite linear;
		}
	}


</style>