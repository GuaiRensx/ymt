<template>
	<div class="header">
		<div class="loadtopnav">
			<div class="load-ymatou-logo">
					<a href="#" class="pic" style="display: none;"></a>
				</div>
			<div class="nav fl">
				
				<a href="#">
					<span>首页</span>
				</a>
				<a href="#">
					<span>社区</span>
				</a>
			</div>
			<div class="icon-list fr">
				<a href="#">
					<i class="fa fa-shopping-cart"></i>
				</a>
				<a href="#">
					<i class="fa fa-user-o"></i>
				</a>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'Header',
		components:{},
		data(){
			return {
				name:'我是头部'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.header{
	position: sticky;
	z-index:10;
	width:100%;
	top:0;
	left:0;
	background: #fff;
	border-bottom:1px solid #DEDEDE;
	.loadtopnav{
		width:100%;
		.h(40);
		overflow:hidden;
		.nav{
			.h(40);
			.lh(20);	
			display:inline-block;
			.margin-right(8);
			a{
				display: inline-block;
				.padding(0,8,0,8);
				.fs(12);
				box-sizing:border-box;	
			}
			>a:first-child{
				.padding-right(0);
				span{
					display: inline-block;
					.lh(24);
					border-bottom: 2px solid #cc3333;
				}

			}
		}
		.icon-list{
			display: inline-block;
			.lh(24);
				a{
					display: inline-block;
					.padding(0,8,0,8);
					.fs(20);
					box-sizing:border-box;	
					color:#ccc;
						/*background:pink;*/
					
					i{
						display: inline-block;
						
						.h(24);
						.lh(24);
						.margin-bottom(8);
					}
				}
				>a:first-child{
					.padding-right(2);
				}
			}
		}
}
</style>