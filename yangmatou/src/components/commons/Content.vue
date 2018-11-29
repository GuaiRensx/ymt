<template>
	<div class="content">
		<div class="bt-title">
			<span class="fa fa-heart-o">&nbsp;&nbsp;猜你喜欢</span>
		</div>
		<ul v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
			<li class="product-wrapper" v-for="(item,index) in goodsList" >
				<!--<router-link  :to="{path:'/detail',query:{productId:item.id}}" class="product" >-->
					<a class="product" @click="getDetail(index)">
					<div class="picture" :style="{background:'url('+item.pic+')','background-size':'cover'}"></div>
					<div class="info">
						<div class="name">{{item.name}}</div>
						<div class="info-tag">
							<span>包邮包税</span>
						</div>
						<div class="price">{{item.price.toFixed(2)}}</div>
						<div class="country">
							<img :src="item.sellerInfo.countryIconUrl" alt="" />{{item.sellerInfo.countryName}}
						</div>
					</div>
					</a>
				<!--</router-link>-->
			</li>
		</ul>
		<div class="btn-like-more btn-like-more-common">加载更多</div>
		<div class="btn-like-more-over btn-like-more-common">已加载完</div>
		<vueToTop top='3200' duration='1000'></vueToTop>
	</div>
</template>

<script>
	//引入返回顶部组件
	import Vue from 'vue'
	import vueToTop from 'vue-totop'
	Vue.use(vueToTop)

	//引入无限滚动组件
	import {Toast,InfiniteScroll} from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	//引入详情页组件
//	import detail from '../pages/Detail';
	
	export default{
		name:'Content',
		components:{},
		data(){
			return {
				goodsList:[],
				pageNub:1,
				pageSize:20
			}
		},
		methods:{
			loadMore(){
				this.getInfo();

			},
			getInfo(){
				this.toast=Toast({
					  message: '操作成功',
					  iconClass: 'fa fa-spinner fa-spin'
					});
				this.$axios.get('/api/home/api/getLikeList?',{params:{pageNub:this.pageNub,
				pageSize:this.pageSize}})
				.then((res)=>{
//					this.goodsList=res.likeProductInfo;
					this.goodsList=this.goodsList.concat(res.likeProductInfo);
					console.log(this.goodsList);
					this.pageNub++;
					this.toast.close();
					
				})
				.catch((err)=>{
					console.log(err);
					this.toast.close();
					
				})
			},
			getDetail(i){
				document.documentElement.scrollTop=0
				let id=this.goodsList[i].id;
				this.$router.push({path:'/detail',query:{productId:id}})
				console.log(id);
//				this.$router.push({path:'/hotdetail',query:{id:id}})
			}
		},
		created(){
			
			this.getInfo();
		}
	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
.content{
	width:100%;
	.margin-top(25);
	background:#eee;
	.bt-title{
    	.w(375);
    	background:#eee;
    	span{
    		.fs(16);
    		display:block;
    		.padding(0,10,0,150);
    		.h(40);
    		.lh(40);
    		color: #646464;
    	}
    }
    ul{
    	width:100%;
    	box-sizing: border-box;
    	.padding(0,16,0,16);
    	overflow:hidden;
    	li{
    		width:50%;
    		box-sizing: border-box;
    		float:left;
    		.margin-bottom(8);

    		.product{
    			    display: block;
    			    .h(280);
    			    width:100%;
    			    positive:relative;
    			    background:#fff;
    			.picture{
    				width:100%;
    				.h(173);
    			}
    			.info{
    				.padding(0,6,0,6);
    				position:relative;
    				.name{
    					.fs(12);
    					.h(34);
    					color:#383838;
    					.lh(17);
    					overflow:hidden;
    					.margin-top(10);
    				}
    				.info-tag{
    					width:100%;
    					overflow: hidden;
    					.h(19);
    					.margin(7,0,10,0);
    					.lh(1);
    					span{
    						.fs(9);
    						display:inline-block;
    						border:1px solid #c33;
    						color:#c33;
    						.padding(1,3,1,3);
    						.lh(14);
    						border-radius:5px;
    					}
    				}
    				.price{
    					 .fs(16);
    					 color:#c33;
    					 line-height: 1;
    				}
    				.country{
    					.fs(10);
    					color:#646464;
    					text-align: right;
    					display: inline-block;
					    position: absolute;
					    .right(13);
					    bottom: 0;
					    img{
					    	.w(10);
					    	.h(10);
					    	.margin-right(5);
					    }
    				}
    			}
    			
    		}
    		
    	}
    	>li:nth-child(2n+1){
    		.padding-right(4);
	    	}
	   	>li:nth-child(2n){
	    	.padding-left(4);
	    	}
    	 	
    	
    }
    .btn-like-more-common{
    	.w(343);
    	.fs(14);
    	border:1px solid #dedede;
    	background:#fff;
    	margin:0 auto;
    	.margin-top(20);
    	.margin-bottom(10);
    	.lh(31);
    	color: #9b9b9b;
    	text-align: center;
    }
    .btn-like-more{}
    .btn-like-more-over{  }	
 

}
	
</style>