<template>
	<div class="detail">
		<Top></Top>
		<Header></Header>
		<DetailBanner></DetailBanner>
		<div class="product-info">
			<div class="productinfo-content">
				<div class="product-name">
					<span class="tag">包邮包税</span>
					<span class="name">韩国爱敬Kerasys香水洗发水护发素套装持久留香女士香氛</span>
				</div>
				<div class="product-price">
					<span class="interval-price">
						<i>￥26~68</i>
					</span>
				</div>
			</div>
		</div>
		<div class="logistics-freight-server">
			<div class="logistics-wrap">
				<div class="logistics-info">
					<span class="tag">物流</span>
					<span class="value">拼邮
						<i>, 韩国发货</i>
					</span>
					
				</div>
				<div class="logistic-time"></div>
			</div>
			<div class="freight-wrap">
				<span class="tag">运费</span>
				<span class="value">包邮</span>
			</div>
			<div class="server-wrap">
				<span class="tag-server"><i class="fa fa-check-circle-o"></i>假一赔十</span>
				<span class="tag-server"><i class="fa fa-check-circle-o"></i>售后无忧</span>
			</div>
		</div>
		<div class="sku-wrap">
			<div class="sku-btn">
				<span class="tag">选择</span>
				<span class="value">颜色</span>
				<span class="arrow fa fa-angle-right"></span>
			</div>
		</div>
		<div class="buyer-rate">
			<div class="m-title">
				<span>
					<i class="cro-fl"></i>评价
					<i class="cro-fr"></i>
				</span>
			</div>
			<div class="b-title">
				<span class="name">买家评价</span>
				<span class="rate">
					<i class="full fa fa-star"></i>
					<i class="full fa fa-star"></i>
					<i class="full fa fa-star"></i>
					<i class="full fa fa-star"></i>
					<i class="full fa fa-star"></i>
				</span>
				<span class="num">4.8</span>
				<span class="more">查看全部1621条<span class="fa fa-angle-right"></span></span>
				
			</div>
			<div class="tag-content">
				<div class="tag-name">购买过该商品的用户认为</div>
			</div>
			<div class="note-list">
				<div class="note-item" v-for="(item,index) in 10">
					<div class="content">
						<div class="info">
							<div class="buyer">
								<div class="avg">
									<img src="http://pic1.ymatou.com/G02/M01/8D/8C/CgvUA1gwec2AVlDRAAAl7no9aMk711_1_1_m.jpg" alt="" />
								</div>
								<div class="name">王小丫</div>
								<div class="grade lever4 fa fa-google-wallet"></div>
							</div>
							<div class="desc">洗发水很香不过对我来说不够滋润，洗完很蓬松需要配合护发精油用才不会毛躁。总体还是不错的。</div>
						</div>
						<div class="pic">
							<img src="http://pic1.ymatou.com/G02/M0B/3D/EA/CgvUBVs_Zv-AQKZgAAGc3TegyV8822_1_1_w_l.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="note-more">
					<span>
						查看全部
					</span>
					<span>MORE</span>
				</div>
			</div>
		</div>
		<!--<div class="seller-wrap">关注</div>-->
		<div class="intro-pic">
			<img src="../../assets/title.png" alt="" />
		</div>
		<div class="image-text-wrap">
			<div class="m-title">
				<span>
					<i class="cro-fl"></i>详情
					<i class="cro-fr"></i>
				</span>
			</div>
			<div class="title">
				<span>图文详情</span>
			</div>
			<div class="list">
				<div class="item">
					<div class="name">
						<h2>商品参数</h2>
					</div>
				</div>
				<div class="keylist">
					<div class="keyitem">
						<span class="key">适用肤质</span>
						<span class="value">所有肤质</span>
					</div>
					<div class="keyitem">
						<span class="key">品牌归属地	</span>
						<span class="value">是</span>
					</div>
					<div class="keyitem">
						<span class="key">是否为特殊用途化妆品</span>
						<span class="value">否</span>
					</div>
					<div class="keyitem">
						<span class="key">原产地</span>
						<span class="value">韩国</span>
					</div>
					<div class="keyitem">
						<span class="key">面膜产品类型</span>
						<span class="value">贴片式面膜</span>
					</div>
					<div class="keyitem">
						<span class="key">护肤功效</span>
						<span class="value">保湿,滋润,去干纹,抗皱,美白,提亮肤色,舒缓肌肤</span>
					</div>
					<div class="keyitem">
						<span class="key">规格类型</span>
						<span class="value">正常规格</span>
					</div>
					<div class="keyitem">
						<span class="key">保质期</span>
						<span class="value">3年</span>
					</div>
					<div class="keyitem">
						<span class="key">容量</span>
						<span class="value">25ml*10片</span>
					</div>
				</div>
				<div class="item">
					<div class="name">
						<h2>商品介绍</h2>
					</div>
					<div class="text">
						补水保湿 淡化细纹 滋润肌肤  紧致抗皱 修复损伤 含有高浓缩燕窝原液,集中供给皮肤水分,锁水能力突出,在皮肤水分子表面形成保护膜防止水分快速流失 令皮肤长时间保湿水嫩哦<br/>超级补水 镇静皮肤 增加皮肤光泽 排除皮肤废弃物 恢复皮肤活力 改善肤质，含有高浓缩燕窝原液，集中供给皮肤水分，锁水能力突出，在皮肤水分子表面形成保护膜防止水分快速流失，令皮肤长时间保湿不缺水保护修复对外界刺激敏感的皮肤，令其更加健康。宝宝们，版本随机发货哦
					</div>
					<div class="pics">
						<img v-for="(a,i) in List.picList" :src="a" alt="" />
					</div>
				</div>
			</div>
		</div>
		<!--<div class="one-to-ten">假一赔十</div>-->
		<!--<div class="likeproduct">推荐</div>-->-->
		<div class="operate-wrap">
			<div class="left fl">
				<span class="collection">
					<i class="fa fa-heart-o xin"></i>
					<i class="text">收藏</i>
				</span>
			</div>
			<div class="right fr">
				<span class="addCart" @click="addToShopCar">加入购物车</span>
				<span class="buy">立即购买</span>
			</div>
		</div>
		
	</div>
</template>

<script>
import Top from './Top'
import Header from '../commons/Header';
import Vue from 'vue';
import Swiper from 'swiper';
import DetailBanner from '../commons/DetailBanner';
	export default{
		name:'Detail',
		components:{
			Top,
			Header,
			DetailBanner
		},
		data(){
			return {
				name:'我是详情页',
				productId:'',
				selectCount:1,
				buyList:[],//买家须知
				productInfo:[],//商品参数
				List:[]//商品介绍
			}
		},
		methods:{
			getInfo(){
				let productId=this.$route.query.productId;
				this.productId=productId;
			},
			getDetail(){
				this.$axios.get('/api/item/api/getProductDescriptionInfo?',{params:{productId:this.productId}})
				.then((res)=>{
//					this.List=res.result.moduleList;
					if(res.result.moduleList.length===3){
						this.List=res.result.moduleList[2];
					}else if(res.result.moduleList.length===2){
						this.List=res.result.moduleList[1];
					}else if(res.result.moduleList.length===1){
						this.List=res.result.moduleList[0];
					}
					console.log(this.List);
				})
				.catch((err)=>{
					console.log(err);
				})
			},
			addToShopCar(){
				//添加到购物车
				//拼接出一个要添加到 
				var goodsInfo={
					id:this.productId,
					count:this.selectCount,
					price:30,
					picture:this.List.picList[2],
					info:'韩国爱敬洗发水',
					selected:true
				};
				
				this.$store.commit("addToCar",goodsInfo);
				console.log(goodsInfo)
			}
		},
		created(){
			this.getInfo();
			this.getDetail();
			
		},
		mounted(){
	
		}

	}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
@import '../../../node_modules/swiper/dist/css/swiper.css';
.detail{
	overflow:hidden;
	background:#f1f1f1;
	width:100%;
	.banner{
		width:100%;
		.swiper-wrapper{
			width:100%;
			.swiper-slide{
				width:100%;
				display:inline-block;
				img{
					width:100%;
					display: block;
					background: #fff;
					color:#fff;
					.fs(22);
				}
			}
		
		}
		
	}
	.product-info{
		width: 100%;
	    overflow: hidden;
	    background-color: #fff;
	    box-sizing:border-box;
	    .padding-left(6);
	    .border-bottom(5,solid,#f1f1f1);
	    .productinfo-content{
	    	.padding(4,16,5,5);
	    	.product-name{
	    		width: 100%;
	    		.lh(22);
	    		.fs(10);
	    		overflow: hidden;
    			white-space: normal;
    			.tag{
    				display: inline-block;
    				.h(12);
    				.lh(12);
    				.border(1,solid,#c33);
    				color: #c33;
    				.border-radius(3);
    			}
    			.name{
    				display: inline;
    				.fs(16);
    				.letter-spacing(1);
    			}
	    	}
	    	.product-price{
	    		width: 100%;
    			overflow: hidden;
    			.margin-top(5);
    			.lh(22);
    			.interval-price{
    				.fs(20);
    				color: #c33;
    				vertical-align: middle;
    				i{
    					font-style: normal;
    				}
    			}
	    	}
	    }
	}
	.logistics-freight-server{
		    width: 100%;
		    overflow: hidden;
		    .margin-bottom(5);
		    background: #fff;
		.logistics-wrap{
			width: 100%;
			overflow: hidden;
			.padding(6,6,4,12);
			position: relative;
			box-sizing: border-box;
			.logistics-info{
				width: 100%;
			    overflow: hidden;
			    color: #292929;
				box-sizing: border-box;
			    .h(32);
			    .lh(34);
			    .tag{
			    	.w(40);
			    	.fs(14);
				    overflow: hidden;
				    float: left;
			    }
			    .value{
			    	float: left;
				    .padding-bottom(5);
				    .fs(14);
				    i{
				    font-style: normal;
				    }
				}
			} 
			.logistic-time{
				width: 100%;
			    overflow: hidden;
			    color: #999;
			    .margin-left(40);
			    .padding-bottom(8);
			    border-bottom: 1px solid hsla(0,0%,87%,.5);
			}
		}
		.freight-wrap{
			.padding(10,0,12,12);
		    width: 100%;
		    overflow: hidden;
		    color: #292929;
		    .border-bottom(1,solid,hsla(0,0%,87%,.5));
		    position: relative;
		    span{
		    	display: inline-block;
		    	.w(40);
			    overflow: hidden;
			    float: left;
			    .fs(12);
			    .lh(12);
		    }
		}
		.server-wrap{
			.padding(0,12,0,5);
			text-overflow: ellipsis;
			white-space: nowrap;
		    background: #f8f8f8;
		    overflow-x: auto;
		    .tag-server{
		    	display: inline-block;
    			overflow: hidden;
		    	.fs(12);
		    	.margin-right(5);
			    .padding-left(7);
			    position: relative;
			    line-height: .875rem;
			    i{
			    	color:#c33;
			    	.margin-right(3);
			    }
		    }
		}
		
	}
	.sku-wrap{
		.sku-btn{
			width: 100%;
		    overflow: hidden;
		    .h(40);
		    .lh(25);
		    background: #fff;
		    position: relative;
		    .padding-left(12);
		    .tag{
		    	display: inline-block;
			    overflow: hidden;
			    color: #292929;
			    .lh(12);
			    .fs(12);
		    }
		    .value{
		    	display: inline-block;
			    overflow: hidden;
			    color: #292929;
			    .lh(12);
			    .fs(12);
		    }
		    .arrow{
		    	position: absolute;
		    	.right(30);
		    	.top(10);
		    	.fs(20);
		    	color:#bbb;
		    }
		}
	}
	.buyer-rate{
		width: 100%;
	    overflow: hidden;
	    .margin-top(10);
	    .m-title{
	    	width: 100%;
	    	.h(21);
	    	.lh(10);
		    overflow: hidden;
		    text-align: center;
		    .margin-bottom(10);
		    padding:0;
		    span{
		    	display: inline-block;
			    .padding(0,15,0,15);
			    color: #999;
			    .fs(12);
			    position: relative;
			    i{
			    	position: absolute;
				    display: inline-block;
				    .w(5);
				    .h(5);
				    border-radius: 50%;
				    background:#dedede;
				    top: 50%;
				    transform: translateY(-50%);
				    z-index: 11;
			    }
			    .cro-fl{
			    	.left(-2);
			    }
			    .cro-fl::before{
			    	.right(5);
    				background-color: hsla(0,0%,87%,.5);
			    	content: "";
				    position: absolute;
				    top: 50%;
				    .w(35);
				    height: 1px;
			    }
			    .cro-fr{
			    	.right(-2);
			    }
			    .cro-fr::after{
			    	.left(5);
    				background-color: hsla(0,0%,87%,.5);
			    	content: "";
				    position: absolute;
				    top: 50%;
				    .w(35);
				    height: 1px;
			    }
		    }
	    }
	    .b-title{
	    	width: 100%;
		    background-color: #fff;
		    .padding(5,6,4,6);
		    position: relative;
		    overflow: hidden;
		    .fs(12);
		    .border-bottom(1,solid,#f1f1f1);
		    .name{
		    	display: inline-block;
			    .fs(12);
			    .padding-right(5);
			    float: left;
			    .lh(22);
			    .padding-left(5);
			    .padding-right(5);
		    }
		    .rate{
		    	display: inline-block;
			    float: left;
			    .margin(3,10,0,2);
			    .full{
			    	display: inline-block;
				    .w(12);
				    .h(12);
				    .fs(12);
				    color:#e33;
			    }
		    }
		    .num{
		    	display: inline-block;
			    .fs(12);
			    .margin-right(2);
			    .lh(22);
			    color: #e95656;
			    float: left;
		    }
		    .more{
		    	display: inline-block;
			    .fs(12);
			    color: #999;
			    float: right;
			    .padding-right(26);
			    position: relative;
			    .lh(22);
			    .fa{
			    	display: inline-block;
			    	.fs(20);
			    	.padding-left(6);
			    }
		    }
	    }
	    .tag-content{
	    	    .padding(10,12,0,12);
			    overflow: hidden;
			    background: #fff;
			    .tag-name{
			    	width: 100%;
				    overflow: hidden;
				    .fs(12);
				    color: #999;
			    }
	    }
	    .note-list{
	    	    width: 100%;
			    overflow: hidden;
			    .padding(15,0,15,12);
			    .h(146);
			    box-sizing:border-box;
			    white-space: nowrap;
			    overflow-x: auto;
			    background: #fff;
			    font-size: 0;
			    vertical-align: middle;
			    .note-item{
			    	overflow: hidden;
				    .w(276);
				    .h(116);
				    display: inline-block;
				    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
				    .margin-right(10);
				    .content{
				    	overflow: hidden;
				    	.info{
				    		.w(160);
				    		.h(116);
				    		display: inline-block;
				    		box-sizing: border-box;
				    		.padding(10,10,10,10);
				    		background: pink;
    						overflow: hidden;
    						.buyer{
    							width: 100%;
							    overflow: hidden;
							    display: flex;
							    align-items: center;
							    position: relative;
							    .avg{
							    	.w(25);
							    	.h(25);
								    overflow: hidden;
								    border-radius: 100%;
								    margin-right: .3125rem;
								    img{
								    	width: 100%;
									    height: 100%;
									    display: inline-block;
									    padding:0;
									    margin:0;
								    }
							    }
							    .name{
							    	.margin-right(5);
								    flex: 1;
								    .lh(25);
								    text-overflow: ellipsis;
								    display: box;
								    overflow: hidden;
								    white-space: normal;
								    .fs(10);
								    color: #666;
							    }
							    .grade{
							    	.w(18);
							    	.h(12);
							    	.fs(12);
							    	color:orange;
							    }
    						}
    						.desc{
    							.margin-top(10);
							    width: 100%;
							    .lh(16);
							    .fs(10);
							    text-overflow: ellipsis;
							    display: box;
							    overflow: hidden;
							    white-space: normal;
							    color: #292929;
    						}
				    	}
				    	.pic{
				    		display: inline-block;
				    		.w(116);
						    .h(116);
						    overflow: hidden;
						    img{
						    	.w(116);
						    .h(116);
						    }
				    	}
				    }
			    }
			    .note-more{
			    	    margin: 0;
					    overflow: hidden;
					    .w(116);
					    .h(116);
					    display: inline-block;
					    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
					    margin-right: .625rem;
					    .fs(12);
					    text-align: center;
					    vertical-align: top;
					    box-sizing: border-box;
					    .padding-top(45);
					    
					    span{
					    	color: #666;
						    display:block;
						    .padding-top(0);
						    .lh(18);
						    .fs(12);
					    }
			    }
	    }
	}
	.seller-wrap{
		.margin-top(10);
	    width: 100%;
	    padding: .9375rem .75rem;
	    overflow-x: hidden;
	    background: #fff;
	}
	.operate-wrap{
		width:100%;
		.h(45);
		position: fixed;
		left:0;
		bottom:0;
		right:0;
		background: pink;
		.left{
			width: 40%;
		    .h(45);
		    display: flex;
		    border-top: 1px solid #dedede;
		    background: #fff;
		    text-align: center;
		    .fs(14);
		    box-sizing: border-box;
		    padding-left:15%;
		    padding-top:1%;
		    i{
		    	display: inline-block;
		    }
		    .text{
		    	width:100%;
		    	.padding-top(2);
			    color: #999;
		    	font-style: normal;
		    	text-align: center;
		    	.fs(12);
		    }
		}
		.right{
			    width: 60%;
			    .addCart{
			    	/*display: block;*/
			    	float:left;
			    	width:50%;
			    	height:100%;
				    background-color: rgba(242,143,37,.8);
				    color: #fff;
				    .fs(14);
				    text-align: center;
				    .lh(45);
				}
				.buy{
					float:left;
			    	width:50%;
			    	height:100%;
				    background-color: #c33;
				    color: #fff;
				    .fs(14);
				    text-align: center;
				    .lh(45);
				}
		}
	}
	.intro-pic{
		width:100%;
		img{
			width:100%;
		}
	}
	.image-text-wrap{
		width:100%;
		background: #fff;
		.m-title{
	    	width: 100%;
	    	.h(31);
	    	.lh(10);
		    overflow: hidden;
		    text-align: center;
		    .margin-bottom(10);
		    background: #eee;
		    span{
		    	display: inline-block;
			    .padding(0,15,0,15);
			    color: #999;
			    .fs(12);
			    position: relative;
			    i{
			    	position: absolute;
				    display: inline-block;
				    .w(5);
				    .h(5);
				    border-radius: 50%;
				    background:#dedede;
				    top: 50%;
				    transform: translateY(-50%);
				    z-index: 11;
			    }
			    .cro-fl{
			    	.left(-2);
			    }
			    .cro-fl::before{
			    	.right(5);
    				background-color: hsla(0,0%,87%,.5);
			    	content: "";
				    position: absolute;
				    top: 50%;
				    .w(35);
				    height: 1px;
			    }
			    .cro-fr{
			    	.right(-2);
			    }
			    .cro-fr::after{
			    	.left(5);
    				background-color: hsla(0,0%,87%,.5);
			    	content: "";
				    position: absolute;
				    top: 50%;
				    .w(35);
				    height: 1px;
			    }
		    }
	    }
	    .title{
	    	color:#292929;
	    	box-sizing: border-box;
	    	width:100;
	    	.fs(12);
	    	.margin-bottom(8);
	    	.padding(10,0,10,12);
	    	.border-bottom(1,solid,hsla(0,0%,87%,.5))
	    }
	    .list{
	    	width: 100%;
		    overflow: hidden;
		    .margin-bottom(5);
		    .name{
		    	  width: 100%;
				    .padding(20,0,15,20);
				    overflow: hidden;
				    h2{
				    	width: 100%;
					    overflow: hidden;
					    text-align: center;	
					    .fs(12);
				    }
		    }
		    .keylist{
		    	    width: 100%;
    				overflow: hidden;
    				.keyitem{
    					    width: 100%;
						    overflow: hidden;
						    display: flex;
						    .margin-bottom(10);
						    .key{
						    	.margin-left(20);
							    .w(70);
							    overflow: hidden;
							    .fs(12);
							    .padding-right(10);
							    color: #9b9b9b;
							    .lh(18);
						    }
						    .value{
						    	flex: 1;
							    overflow: hidden;
							    .fs(12);
							    .lh(18);
							    word-break: break-all;
							    color: #383838;
						    }
    				}
		    }
		    .text{
		    	.fs(12);
		    }
		    .pics{
		    	width: 100%;
			    overflow: hidden;
			    font-size: 0;
			    img{
			    	width: 100%;
				    display: inline-block;
				    border: 0;
			    }
		    }
	    }
	}
}


</style>