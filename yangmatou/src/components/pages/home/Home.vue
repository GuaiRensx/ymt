<template>
	<div class="home">
		<Top></Top>
		<Header></Header>
		<Banner></Banner>
		<Xsqbanner></Xsqbanner>
		<Content></Content>
		<Footer></Footer>

	</div>
</template>

<script>
	import Top from '../top';
	import Header from '../../commons/Header';
	import Banner from '../../commons/Banner';
	import Xsqbanner from '../../commons/Xsqbanner';
	import Content from '../../commons/Content';
	import Footer from '../../commons/Footer';
	import Info from '../Info'
	import Login from '../Login'
	import Reg from '../Reg'
	import About_ymt from '../About_ymt'
	import Media from '../Media'

	export default {
		name: 'Home',
		components: {
			Top,
			Header,
			Banner,
			Xsqbanner,
			Content,
			Footer,
			Info,
			Login,
			Reg,
			About_ymt,
			Media
		},
		data() {
			return {
				name: '我是home页面'
			}
		}
	}
</script>

<style>
	.home {
		background: #eee;
	}
</style>