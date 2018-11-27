<template>
	<div class="top">
		<span class="loadbanner-bgcover">
			<img src="http://pic1.ymatou.com/G02/M06/47/B9/CgvUBVpv7eSAWJr4AAB3io7qxQM413_15_2_o.png" alt="" />
		</span>
		<span class="loadbanner-close ac">
			<i></i>
		</span>
		<div class="loadbanner-main">
			<a href="#" class="loadbanner-download-btn"></a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		components:{
			
		},
		data(){
			return {
				name:'我是top'
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.top{
	width:100%;
	/*.lh(1);*/
	padding:0;
	position:relative;
	top:0;
	z-index:5;
	overflow:hidden;
	background: @bg-color;
	img{
		display:block;
		width:100%;
		.h(50);
	}
	.loadbanner-close{
		position:absolute;
		left:0;
		top:0;
		width:8%;
		height:100%;
	}
	.loadbanner-download-btn{
		position: absolute;
		z-index:10;
		top:0;
		width:22%;
		height:100%;
		.right(7.5);
		cursor: pointer;
		
		
	}
}


</style>