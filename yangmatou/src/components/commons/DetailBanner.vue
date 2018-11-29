<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="#">
						<img src="http://pic1.ymatou.com/G02/shangou/M03/CC/35/CgvUBFqzevOAUJmcAAK73radpkI661_1_1_n_w_o.jpg" />
					</a>
				</div>
				<div class="swiper-slide" >
					<a href="#">
						<img src="http://pic1.ymatou.com/G02/shangou/M03/CE/2F/CgvUBVqzemmAQ-NLAAJYKsJdniw419_1_1_n_w_o.jpg" />
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="http://pic1.ymatou.com/G02/shangou/M03/C7/4B/CgvUA1qzeuCAG_qyAAJEdhmAh-M851_1_1_n_w_o.jpg"/>
					</a>
				</div>
				<div class="swiper-slide"  >
					<a href="#">
						<img src="http://pic1.ymatou.com/G02/shangou/M03/CC/34/CgvUBFqzesmAYQO4AAIAY6sQxpU902_1_1_n_w_o.jpg"/>
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
				bannerList:[
					{src:'http://pic1.ymatou.com/G02/shangou/M03/CC/35/CgvUBFqzevOAUJmcAAK73radpkI661_1_1_n_w_o.jpg'},
					{src:'http://pic1.ymatou.com/G02/shangou/M03/CE/2F/CgvUBVqzemmAQ-NLAAJYKsJdniw419_1_1_n_w_o.jpg'},
					{src:'http://pic1.ymatou.com/G02/shangou/M03/C7/4B/CgvUA1qzeuCAG_qyAAJEdhmAh-M851_1_1_n_w_o.jpg'},
					{src:'http://pic1.ymatou.com/G02/shangou/M03/CC/34/CgvUBFqzesmAYQO4AAIAY6sQxpU902_1_1_n_w_o.jpg'}
				]
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
					if(res.result.moduleList.length===3){
						this.bannerList=res.result.moduleList[2];
					}else if(res.result.moduleList.length===2){
						this.bannerList=res.result.moduleList[1];
					}else if(res.result.moduleList.length===1){
						this.bannerList=res.result.moduleList[0];
					}
					
//					console.log(this.goodsList);
					console.log(this.bannerList)
//					this.bannerList=(res.result.moduleList[2].picList.splice(5,12));
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