<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
					<a href="#">
						<img :src="item.src" alt="" />
					</a>

				</div>
				<!--<div class="swiper-pagination">
					<span class="swiper-pagination-bullet" "(item,index) in bannerList" :key="index"></span>
				</div>-->

			</div>
			<!-- 如果需要分页器 -->
			



			<!-- 如果需要滚动条 -->
<!--			<div class="swiper-scrollbar"></div>-->
		</div>
	</div>
	
</template>

<script>
	import Swiper from 'swiper';
	

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				bannerList:[{
					src:'http://pic1.ymatou.com/G02/M07/9C/07/CgvUBFvu0dSAbjwxAADcWSbv-EE517_25_11_o.jpg'
				},{
					src:'http://pic1.ymatou.com/G02/M05/98/AF/CgvUA1vu7GSADJpFAADwN11dl2w150_25_11_o.jpg'
				},{
					src:'http://pic1.ymatou.com/G02/M04/98/B0/CgvUA1vu7IiAdYe4AADbDnJeu6Y250_25_11_o.jpg'
				},{
					src:'http://pic1.ymatou.com/G02/M01/96/49/CgvUA1vuuQOAGUE9AADfSrHbuoI609_25_11_o.jpg'
				},{
					src:'http://pic1.ymatou.com/G02/M08/9E/18/CgvUBVvu0uiAcJNJAADa5ve0i6E241_25_11_o.jpg'
				},{
					src:'http://pic1.ymatou.com/G02/M07/9F/34/CgvUBFvvhJuANgiTAADVueesVCU308_25_11_o.jpg'
				}
				]
			}
		},
		methods: {
			getBanner(){
//				var self = this;
			this.$axios.get('/api/home/api/getLikeList?',{params:{
				pageNub:1,
				pageSize:20
			}})
			.then((res)=>{
				console.log(res);
			})
			.catch((err)=>{
				console.log(err);
			})
			}
		},
		mounted() {
			this.getBanner()
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,    
				pagination: {
			      el: '.swiper-pagination',
			    }
			});
		}
	}
</script>

<style lang="less" scoped>
	@import '../styles/main.less';
	@import '../../../node_modules/swiper/dist/css/swiper.css';
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
</style>