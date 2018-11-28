<template>
	<div class="about">
		<div class="title">
			<img src="http://s1.ymatou.com/homem/images/home-img/img1-94c421da46.png" />
		</div>
		<div class="text">
			<p>
				洋码头成立于2009年，是中国首家一站式海外购物平台，拥有近4000万用户，超过2万名认证买手，覆盖全球六大洲， 涵盖欧美、日韩、澳新等68个国家，每日可提供可售商品数量超过28万个，原汁原味的100%海外正品， 同步全球商品和折扣。自建国际仓储中心，拥有15大国际仓储中心，每周包机40架，海外直邮最快5天到货。 本土退货+本土客服保障无忧售后。
			</p>
			<p>
				洋码头以引领中国消费全球化为己任，极具创新性意义地开创了海外场景式购物模式，通过买手直播真实的购物场景， 让中国消费者足不出户，轻松、便捷地享受一站式全球血拼。
			</p>
		</div>
		<div class="title">
			<img src="http://s1.ymatou.com/homem/images/home-img/img2-b757141d5c.png" />
		</div>
		<div class="list">
			<ul>
				<li class="first active">
					<span style="background: #c33;"></span>
					<div class="time" style="color:#c33;">16/06</div>
					<div class="desc" style="color:#c33;">全球认证买手覆盖68个国家</div>
				</li>
				<li>
					<span></span>
					<div class="time">16/04</div>
					<div class="desc">升级日本国际仓储中心，建立大阪新仓储中心并将东京国际仓储中心扩容3倍</div>
				</li>
				<li>
					<span></span>
					<div class="time">16/04</div>
					<div class="desc">洋码头首次将全球”黑色星期五”购物狂欢节引入中国</div>
				</li>
				<li>
					<span></span>
					<div class="time">16/04</div>
					<div class="desc">Angelababy(杨颖)成立创投基金AB Capital，投资洋码头，Baby担任洋码头明星产品经理与投资人</div>
				</li>
				<li>
					<span></span>
					<div class="time">15/06</div>
					<div class="desc">成为中国（杭州）跨境电子商务综合试验区首批试点企业</div>
				</li>

				<div v-show="isshow" class="list-hid" id="list-more">
					<li>
						<span></span>
						<div class="time">15/02</div>
						<div class="desc">洋码头杭州保税区正式投入使用</div>
					</li>
					<li>
						<span></span>
						<div class="time">15/01</div>
						<div class="desc">洋码头宣布完成B轮1亿美金融资</div>
					</li>

					<li>
						<span></span>
						<div class="time">14年初</div>
						<div class="desc">升级全球仓储中心布局，覆盖伦敦、巴黎、法兰克福、墨尔本、悉尼、纽约、旧金山、洛杉矶、芝加哥等区域</div>
					</li>

					<li>
						<span></span>
						<div class="time">13/12</div>
						<div class="desc">移动端产品“洋码头”APP正式上线 </div>
					</li>

					<li>
						<span></span>
						<div class="time">11/07</div>
						<div class="desc">洋码头网站上线</div>
					</li>
					<li class="last">
						<span></span>
						<div class="time">10年</div>
						<div class="desc">在北美建立国际仓储中心，覆盖纽约、旧金山、洛杉矶</div>
					</li>
				</div>
			</ul>
			<div @click="isshow=!isshow" class="btn" id="more-btn"><i :class="!isshow?'fa fa-angle-down':'fa fa-angle-down fa-rotate-180'"></i><span v-html="!isshow?'点击查看更多':'点击收回'" id="more-html"></span></div>
		</div>
		<div class="title">
			<img src="http://s1.ymatou.com/homem/images/home-img/img3-fa73b88062.png" />
		</div>
		<div class="pic">
			<img src="http://s1.ymatou.com/homem/images/home-img/img4-13e8e80e43.png" />
		</div>
		<div class="pic">
			<img src="http://s1.ymatou.com/homem/images/home-img/img5-b00012bc43.png" />
		</div>
		<div class="title">
			<img src="http://s1.ymatou.com/homem/images/home-img/img6-57daf614e6.png" />
		</div>
		<div class="pic">
			<img src="http://s1.ymatou.com/homem/images/home-img/img7-c28aca59ad.png" />
		</div>
		<div class="title"><img src="http://s1.ymatou.com/homem/images/home-img/img8-8cb2fb292b.png"></div>
		<div class="address">
			<span>公司名称：上海洋码头网络技术有限公司</span>
			<span>公司地址：上海市灵石路695号3号楼1602室</span>
			<div class="ervma">
				<div class="ervma-img fl">
					<img src="http://s1.ymatou.com/homem/images/home-img/erweima1-aa01067248.png">
				</div>
				<div class="ervma-img fr">
					<img src="http://s1.ymatou.com/homem/images/home-img/erweima2-ec57bc318d.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
//		console.log(window.scrollHeight)
		name: 'Home',
		components: {}, //注册
		data() {
			return {
				isshow: false
			}
		},
		methods: {

		},
		mounted(){
		document.documentElement.scrollTop=0
		console.log(document.documentElement.scrollTop)
		}
	}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
	.about {
		.w(374.5);
		.title {
			.w(374.5);
			.h(30);
			.margin-top(15);
			position: relative;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.text {
			.w(354.5);
			.fs(16);
			.padding(10, 10, 10, 10);
			overflow: hidden;
			p {
				/*width: 100%;*/
				color: #646464;
				.tx-indent(20);
			}
		}
		.list {
			.w(374.5);
			.fs(10);
			ul {
				margin: 0 auto;
				.w(350);
				.margin-right(10);
				overflow: hidden;
				li {
					.margin-left(10);
					.padding-right(5);
					position: relative;
					border-left: 1px solid #cecece;
					.time {
						.w(70);
						position: absolute;
						top: 0;
						left: 0;
						text-align: center;
					}
					.desc {
						.w(270);
						.padding-left(70);
						overflow: hidden;
						.padding-bottom(15);
					}
					span {
						.w(10);
						.h(10);
						border-radius: 50%;
						background: #cecece;
						position: absolute;
						.top(5);
						.left(-5);
					}
				}
			}
			.btn {
				.w(374.5);
				.h(30);
				.lh(30);
				text-align: center;
				span {
					display: inline-block;
					.w(80);
					.h(30);
					.lh(30);
					color: #c33;
				}
				i {
					display: inline-block;
					.w(20);
					.h(20);
					.fs(16);
					color: #ccc;
				}
			}
		}
		.pic {
			.w(374.5);
			overflow: hidden;
			text-align: center;
			img {
				.w(374.5);
				display: block;
				float: left;
			}
		}
		.address {
			.w(374.5);
			span {
				display: block;
				text-align: center;
				color: #646464;
				.w(374.5);
				.h(25);
				.fs(12);
				.lh(25)
			}
		}
		.ervma {
			.w(274.5);
			margin: 15px auto;
			overflow: hidden;
			.padding-bottom(20);
			.ervma-img {
				.w(110);
				.h(110);
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>