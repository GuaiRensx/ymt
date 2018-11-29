<template>
	<div class="Info">
		<div class="info-header">
			<div class="title-l fl">个人中心</div>
			<div class="title-r fr">
				<div class="cart tb">
					<router-link to="#"><i class="fa fa-shopping-cart " aria-hidden="true"></i></router-link>
				</div>
				<div class="home tb">
					<router-link to="/home"><i class="fa fa-home " aria-hidden="true"></i></router-link>
				</div>
			</div>
		</div>
		<div class="info-container">
			<router-link to="/#">
				<div class="info-con-top">
					<div class="con-top">
						<div class="person fl">
							<img src="http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png" />
						</div>
						<router-link to="/home"><div class="login fl">
							欢迎选购
						</div></router-link>
					</div>
				</div>
			</router-link>
			<div class="info-con-mid">
				<ul>
					<li>
						<router-link to="#"><span class="fl">我的订单</span><i class="fa fa-angle-right fr" aria-hidden="true"></i></router-link>
					</li>
					<li>
						<router-link to="#"><span class="fl">我的优惠券</span><i class="fa fa-angle-right fr" aria-hidden="true"></i></router-link>
					</li>
				</ul>
			</div>
			
		</div>
		<div class="info-footer">
			<div class="foot">
				<span	@click="exit" class="exit">退出</span>
				<span class="kehu">
					客户端
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Info',
		components: {},
		data() {
			return {
				name: 'page Info'
			}
		},
		methods:{
			exit(){
				this.$store.commit('changeLogin',false);
				window.localStorage.setItem('login',false);
				this.$router.replace('/my/Login')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
	.Info {
		background: #f1f1f1;
		.w(374.5);
		.info-header {
			.w(374.5);
			background: #fff;
			.h(40);
			position: fixed;
			top: 0;
			left: 0;
			.title-l {
				.w(220);
				.lh(40);
				color: #515151;
				.fs(17);
				text-align: right;
			}
			.title-r {
				.w(154.5);
				.h(40);
				position: relative;
				.tb {
					.w(40);
					.h(40);
					position: absolute;
					a {
						position: absolute;
						display: inline-block;
						.padding(10, 0, 0, 10);
						.w(30);
						.h(30);
						i {
							display: block;
							.w(20);
							.h(20);
							.fs(18);
							color: #ccc;
						}
					}
				}
				.cart {
					.left(70);
				}
				.home {
					background:#fff;
					.left(110);
				}
			}
		}
		.info-container {
			.margin-top(40);
			/*border: 1px solid red;*/
			.info-con-top {
				.h(110);
				position: relative;
				background: #dd3b60;
				.con-top {
					.h(60);
					.w(344.5);
					.margin-left(30);
					.padding-top(25);
					.person {
						.w(60);
						.h(60);
						border-radius: 50%;
						overflow: hidden;
						img {
							.w(60);
							.h(60);
						}
					}
					.login {
						.h(60);
						.lh(60);
						.margin-left(10);
						.fs(16);
						color: #fff;
					}
				}
			}
			.info-con-mid {
				.margin-top(11);
				ul {
					.padding-left(10);
					background: #fff;
					.w(364.5);
					li {
						.h(44);
						.lh(44);
						position: relative;
						border-bottom: 1px solid #dedede;
						a {
							display: block;
							width: 100%;
							height: 100%;
							span {
								color: #292929;
								.fs(14);
							}
							i {
								position: absolute;
								.bottom(17);
								.right(0);
								display: block;
								.w(20);
								.h(20);
								color: #d1d1d1;
								/*.margin-right(10);*/
								.fs(24);
							}
						}
					}
				}
			}
		}
		.info-footer{
			.h(416);
			position:relative;
			.foot{
				.h(30);
				.fs(12);
				.lh(30);
				/*text-align:center;*/
				position: absolute;
				.bottom(22);
				.left(160);
				.kehu{
					color: #333;
					.padding-left(5);
				}
				.exit{
					.padding-right(10);
					color: #333;
					border-right: 1px solid #ccc;
				}
			}
		}
	}
</style>