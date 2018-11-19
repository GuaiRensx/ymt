<template>
  <div id="app">
  	<!--<Info></Info>-->
    <router-view/>
  </div>
</template>

<script>
			import Home from './components/pages/home/Home'
//		import Info from './components/pages/Info'
//		import Login from './components/pages/Login'
//			import Reg from './components/pages/Reg'
export default {
  name: 'App',
  components:{Home}
}
</script>

<style>

</style>
