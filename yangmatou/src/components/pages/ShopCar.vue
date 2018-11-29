<template>
	<div class="shopCar">
		<div class="header">
			<div class="loadtopnav">
				<div class="load-ymatou-logo">
					<a href="#" class="pic" style="display: none;"></a>
				</div>
				<div class="nav fl">

					<span>购物车({{$store.getters.getAllClass}})</span>
				</div>
				<div class="icon-list fr">
					<router-link to="/home"><i class="fa fa-home"></i></router-link>
					<router-link to="/my"><i class="fa fa-user-o"></i></i></router-link>
				</div>

			</div>
		</div>
		<div class="text">
			<div class="content">
				海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~
			</div>
		</div>
		<div class="seller-wrap">
			<div class="seller" v-for="(c,index) in productList">
				<div class="seller-info">
					<div class="checkbox-box">
						<i class="switch" @click="getSelected(c.id,$store.getters.getGoodsSelected[c.id])" :class="c.selected?'active':''"></i>
					</div>
					<div class="info">
						<div class="head-img">
							<span class="img"></span>
						</div>
						<div class="desc">
							<span class="name">樱花彩虹桥<i class="fa fa-angle-right"></i></span>
							<span class="country">
								<img src="http://img.ymatou.com/app/flag/circle/Japan.png" alt="" />日本
							</span>
						</div>
						<div class="spacing"></div>

					</div>

				</div>
				<div class="promotion-wrap">
					<div class="promotion">
						<div class="product-list">
							<div class="product">
								<div class="content">
									<div class="checkbox-box">
										<i class="switch" :class="c.selected?'active':''"></i>
									</div>
									<div class="switch active">

									</div>
									<div class="prod-warp">
										<div class="prod-info">
											<div class="pic">
												<img :src="c.picture" />
											</div>
											<div class="desc">
												<div class="name">
													<i class="tag-taxes">包邮包税</i>
													<span>佑天兰限定专供区</span>
												</div>
												<div class="sku">
													颜色分类:佑天兰金色10片（散片）
												</div>
												<div class="preadd-desc">
													全球黑五狂欢 2天12小时后恢复原价
												</div>
												<div class="serve">
													<span class="fa fa-plus-circle">拼邮</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="operation">
							<div class="price">{{c.price}}</div>
							<div class="tag-price tag-activity">活动价</div>
							<div class="amount">
								<span class="mini disabled" @click="sub(c.id)">-</span>
								<!--<span class="num">{{c.count}}</span>-->
								<span class="num">{{$store.getters.getGoodsCount[c.id]}}</span>

								<span class="plus" @click="add(c.id)">+</span>
							</div>
							<div class="delete" @click="remove(c.id,index)">
								<i class="fa fa-trash"></i>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
		<div class="bottom">
			<div class="btn-choose fl">
				<span class="checkbox-box">
					<!--<i class="switch"></i>-->
					<i class="switch" :class="selectAll?'active':''"></i>
					
				</span>
				<span class="all-choose">全选</span>
			</div>
			<div class="desc fl">
				<span class="price">总价：<i>￥{{$store.getters.getGoodsMoney}}</i></span>
				<span class="carriage">(不含运费)</span>
			</div>
			<div class="btn-goorder disabled fr">去结算</div>
		</div>
	</div>
</template>

<script>
	//遍历localStorage中的商品信息（id),利用id遍历出该商品加入购物车的数量，利用add方法添加数量
	var localStoragecar = JSON.parse(localStorage.getItem('localStoragecar') || '[]');
	export default {
		name: 'ShopCar',
		components: {},
		data() {
			return {
				select: '',
				selectAll: '',
				oldlist: localStoragecar,
				productList: [],

			}
		},
		methods: {
			add(id) {
				this.$store.commit('addGoodsInfo', {
					id: id,
					count: 1
				})

			},
			sub(id) {
				this.$store.commit('subGoodsInfo', {
					id: id,
					count: 1
				})
			},
			remove(id, i) {
				this.productList.splice(i, 1);
				this.$store.commit('removeGoodsInfo', id)
			},
			getProductInfo() {
				this.productList = this.$store.state.car
				console.log(this.productList)

			},
			getSelected(id, s) {
				console.log(id, s);
				this.select = !s
				this.$store.commit('updateGoodsSelected', {
					id,
					selected: !s
				});
			},
			//点击全选按钮
			selectSum() {
				this.productList.some(item => {
					if(item.selected) {
						this.selectAll = true;
					}
				})

			}

		},
		created() {
			this.getProductInfo();
			this.selectSum()
		}
	}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
	.shopCar {
		width: 100%;
		.header {
			position: sticky;
			z-index: 10;
			width: 100%;
			top: 0;
			left: 0;
			background: #fff;
			border-bottom: 1px solid #DEDEDE;
			.loadtopnav {
				width: 100%;
				.h(40);
				overflow: hidden;
				.nav {
					.h(40);
					.lh(20);
					display: inline-block;
					.margin-left(150);
					span {
						.fs(14);
					}
				}
				.icon-list {
					display: inline-block;
					.lh(24);
					a {
						display: inline-block;
						.padding(0, 8, 0, 8);
						.fs(20);
						box-sizing: border-box;
						color: #ccc;
						/*background:pink;*/
						i {
							display: inline-block;
							.h(24);
							.lh(24);
							.margin-bottom(8);
						}
					}
					>a:first-child {
						.padding-right(2);
					}
				}
			}
		}
		.text {
			width: 100%;
			.h(56);
			box-sizing: border-box;
			.padding(10, 10, 10, 10);
			background: #eee;
			.content {
				color: #9b9b9b;
				.fs(12);
				.lh(18);
			}
		}
		.seller-wrap {
			background: #fff;
			overflow: hidden;
			box-sizing: border-box;
			.fs(12);
			.seller {
				width: 100%;
				overflow: hidden;
				.min-height(150);
				.padding-bottom(10);
				position: relative;
				.seller-info {
					display: flex;
					justify-content: space-between;
					width: 100%;
					overflow: hidden;
					.padding(5, 0, 5, 0);
					.h(50);
					.border-bottom(1, solid, #dedede);
					.checkbox-box {
						box-sizing: border-box;
						.padding-left(10);
						.padding-top(9);
						.w(42);
						.switch {
							display: inline-block;
							.w(22);
							.h(22);
							border-radius: 50%;
							border: 1px solid #9b9b9b;
							background-color: #fff;
							position: relative;
							vertical-align: middle;
						}
						.active {
							background-color: #c33;
							border: none;
						}
					}
					.info {
						display: flex;
						flex: 1;
						box-sizing: border-box;
						.head-img {
							.w(50);
							.h(40);
							span {
								display: inline-block;
								.w(40);
								.h(40);
								border-radius: 50%;
								background-image: url(http://pic1.ymatou.com/G02/M02/A1/41/CgvUA1g0BUuALq-8AAAn-2w4UH0593_1_1_m.jpg);
								overflow: hidden;
								background-size: cover;
								background-repeat: no-repeat;
								border: 1px solid #dedede;
							}
						}
						.desc {
							position: relative;
							.h(40);
							.name {
								float: left;
								display: inline-block;
								.padding-top(5);
								color: #646464;
								.lh(16);
								position: relative;
								.padding-right(10);
								.min-width(60);
								.max-width(80);
								text-overflow: ellipsis;
								display: box;
								overflow: hidden;
								white-space: normal;
							}
							.country {
								/*display: inline-block;*/
								position: absolute;
								left: 0;
								.bottom(4);
								.padding(0, 0, 0, 15);
								.fs(12);
								color: #646464;
								.lh(14);
								vertical-align: center;
								text-overflow: ellipsis;
								display: box;
								overflow: hidden;
								white-space: normal;
								img {
									position: absolute;
									left: 0;
									.top(1);
									display: inline-block;
									.w(12);
									.h(12);
									border-radius: 50%
								}
							}
						}
					}
				}
				.promotion-wrap {
					width: 100%;
					position: relative;
					.promotion {
						width: 100%;
						overflow: hidden;
						position: relative;
						.border-bottom(1, solid, #dedede);
						.operation {
							.padding-top(10);
							display: inline-block;
							.w(80);
							height: 100%;
							position: absolute;
							right: 0;
							top: 0;
							overflow: hidden;
							.padding-right(2);
							text-align: center;
							.price {
								width: 100%;
								text-align: center;
								.lh(13);
								color: #c33;
								.fs(13)
							}
							.tag-price {
								width: auto;
								.margin-top(10);
								.margin-bottom(10);
								border-radius: 2px;
								color: #fff;
								.fs(10);
								padding: .0625rem .1875rem;
								.lh(13);
								text-align: center;
								display: inline-block;
								background-color: #f6934d;
							}
							.amount {
								.w(90);
								position: relative;
								.right(5);
								.margin-top(10);
								vertical-align: middle;
								padding: 0;
								margin: 0;
								.mini {
									.w(20);
									display: inline-block;
									border: 1px solid #cecece;
									.lh(20);
									color: #f1f1f1;
									.fs(10);
									border-top-left-radius: 2px;
									border-bottom-left-radius: 2px;
									text-align: center;
									position: absolute;
									.top(1);
									.left(12);
								}
								.num {
									display: inline-block;
									.w(30);
									.lh(20);
									color: #383838;
									.fs(12);
									vertical-align: middle;
									border-top: 1px solid #cecece;
									border-bottom: 1px solid #cecece;
									text-align: center;
									text-align: center;
									position: absolute;
									.top(1);
									.left(32);
								}
								.plus {
									.w(20);
									display: inline-block;
									border: 1px solid #cecece;
									.lh(20);
									color: #f1f1f1;
									.fs(10);
									border-top-left-radius: 2px;
									border-bottom-left-radius: 2px;
									text-align: center;
									position: absolute;
									.top(1);
									.right(7);
								}
							}
							.delete {
								.w(20);
								.h(20);
								display: inline-block;
								.margin-top(30);
								i {
									.fs(20);
									color: #ccc;
								}
							}
						}
						.product-list {
							.product {
								width: 100%;
								overflow: hidden;
								.padding(14, 0, 10, 0);
								.content {
									display: flex;
									width: 100%;
									overflow: hidden;
									.checkbox-box {
										box-sizing: border-box;
										.padding-left(10);
										.padding-top(9);
										.w(42);
										.switch {
											display: inline-block;
											.w(22);
											.h(22);
											border-radius: 50%;
											border: 1px solid #9b9b9b;
											background-color: #fff;
											position: relative;
											vertical-align: middle;
										}
										.active {
											background-color: #c33;
											border: none;
										}
									}
									.prod-warp {
										flex: 1;
										overflow: hidden;
										.prod-info {
											display: flex;
											width: 100%;
											overflow: hidden;
											.pic {
												.w(70);
												.h(70);
												.margin-right(10);
												overflow: hidden;
												img {
													.w(70);
													.h(70);
												}
											}
											.desc {
												flex: 1;
												overflow: hidden;
												.padding-right(5);
												.name {
													width: 100%;
													.h(28);
													.lh(14);
													text-overflow: ellipsis;
													overflow: hidden;
													white-space: normal;
													.fs(12);
													color: #383838;
													.tag-taxes {
														vertical-align: middle;
														.fs(10);
														border: 1px solid #c33;
														.padding(1, 2, 1, 2);
														.margin-right(3);
														color: #c33;
														.lh(9);
														border-radius: 3px;
														display: inline-block;
														position: relative;
														.top(-1);
														.margin(1, 0, 1, 0);
														font-style: normal;
													}
												}
												.sku {
													.margin(6, 0, 6, 0);
													overflow: hidden;
													.min-height(12);
													.fs(12);
													color: #9b9b9b;
												}
												.preadd-desc {
													.w(165);
													.h(32);
													.margin(6, 0, 6, 0);
													.min-height(12);
													.fs(10);
													color: #c33;
													text-overflow: ellipsis;
													display: box;
													overflow: hidden;
													white-space: normal;
												}
												.serve {
													width: 100%;
													overflow: hidden;
													.fs(12);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.bottom {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			.h(49);
			.btn-choose {
				.w(80);
				.h(49);
				.fs(16);
				.checkbox-box {
					.padding(12, 6, 10, 10);
					display: inline-block;
					overflow: hidden;
					.switch {
						display: inline-block;
						.w(22);
						.h(22);
						border-radius: 50%;
						border: 1px solid #9b9b9b;
						background-color: #fff;
						position: relative;
						vertical-align: middle;
					}
					.active {
						background-color: #c33;
						border: none;
					}
				}
				.all-choose {
					float: right;
					display: block;
					.lh(49);
					.fs(14);
					color: #646464;
				}
			}
			.desc {
				.padding(8, 10, 6, 30);
				text-align: right;
				overflow: hidden;
				.fs(14);
				.price {
					display: inline-block;
					width: 100%;
					.lh(20);
					.fs(12);
					color: #383838;
					float: right;
					i {
						font-style: normal;
						color: #c33;
					}
				}
			}
			.btn-goorder {
				background-color: #9b9b9b;
				.w(112);
				.lh(49);
				text-align: center;
				color: #fff;
				.fs(14);
			}
		}
	}
</style>