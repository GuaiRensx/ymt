<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
					<a href="#">
						<img :src="item" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import Swiper from 'swiper';
	export default{
		name:'Detail',
		components:{},
		data(){
			return {
				id:'',
				goodsList:[],
				bannerList:[]
			}
		},
		methods:{
			getId(){
				let id=this.$route.query.productId;
				this.id=id;
				console.log(this.id);
			},
			getProductInfo(){
				this.$axios.get('/api/item/api/getProductDescriptionInfo?',{params:{productId:this.id}})
				.then((res)=>{
					this.goodsList=res.result.moduleList;
					this.bannerList=(res.result.moduleList[2].picList.splice(5,12));
					Vue.nextTick(()=>{
						this.mySwiper = new Swiper('.swiper-container', {
						loop: true
						});
					})
					
				})
				.catch((err)=>{
					console.log(err);
				})
			}
		},
		created(){
			this.getId();
			this.getProductInfo();
			
		},
		mounted(){
	
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