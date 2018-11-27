<template>
	<div class="home">
		<!--<Header></Header>-->
		<!--<Banner></Banner>
		<Filelist></Filelist>
		<Comingmovie></Comingmovie>-->
		 <!--v-for="item in list" :url="item.url" :name='item.name'-->
		 {{name}}
	</div>
</template>

<script>
		import Info from '../Info'
		import Login from '../Login'
		import Reg from '../Reg'
		import About_ymt from '../About_ymt'
		import Media from '../Media'
	export default{
		name:'Home',
		components:{Info,Login,Reg,About_ymt,Media},//注册
		data(){
			return{
				name:'我是home页面',
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
	.home{
		.w(374.5);
	}
</style>