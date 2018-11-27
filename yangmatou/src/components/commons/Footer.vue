<template>
	<div class="footer">
		<div class="text">
			<a href="#">客户端</a>|
			<a href="#">关于洋码头</a>|
			<a href="#">媒体报道</a>
		</div>
		<div class="desc">上海洋码头网络技术有限公司 版权所有</div>
	</div>
</template>

<script>
	export default{
		name:'Footer',
		component:{},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.footer{
	width:100%;
	overflow:hidden;
	.padding-top(20);
	.padding-bottom(65);
	.text{
		.fs(12);
	text-align: center;
	color: #9b9b9b;
	a{
		display:inline-block;
		text-align: center;
	    color: #646464;
	    .padding(5,3,5,3);
	    letter-spacing:2px;
		}
	}
	.desc{
		.fs(12);
		text-align: center;
    	color: #9b9b9b;
    	letter-spacing:1px;
	}
}


</style>