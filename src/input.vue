<template>
	<div class="wrapper" :class="{error}">
		<input :value="value"  :disabled="disabled" :readonly="readonly" type="text"
		@change="$emit('change',$event.target.value)"
		@input="$emit('input',$event.target.value)"
		@focus="$emit('focus',$event.target.value)"
		@blur="$emit('blur',$event.target.value)"
		>
		<template>
			<Icon name="error" class="icon-error" v-if="error"></Icon>
			<span  class="errorMessage" v-if="error">{{error}}</span>
		</template>
	</div>
</template>

<script>
	import Icon from './icon'
	export default {
		components:{
			Icon
		},
		name: "input",
		props:{
			value:{
				type:String
			},
			disabled:{
				type:Boolean,
				default:false
			},
			readonly:{
				type:Boolean,
				default:false
			},
			error:{
				type:String,

			}

		}
	}
</script>

<style scoped lang="scss">
	$height:32px;
	$border-color:#999;
	$border-color-hover:#666;
	$border-radius:4px;
	$box-shadow-color: rgba(0,0,0,0.5);
	$red: red;
	.wrapper{
		display: inline-flex;
		align-items: center;
		>:not(:last-child){margin-right: .5em
		}
		> input{
			height: $height;
			border: 1px solid $border-color;
			border-radius: $border-radius;
			padding: 0 8px;
			font-size: inherit;
			&:hover{
				border: 1px solid $border-color-hover;
			}
			&:focus{
				box-shadow: inset 0 1px 3px $box-shadow-color;
				outline: none;
			}
			&[disabled],&[readonly]{
				border-color: #bbb;
				color: #bbb;
				cursor: not-allowed;
			}
		}
		&.error{
			>input{border: 1px solid $red;}
		}
		>.iconMessage{color: red;}
	}
</style>