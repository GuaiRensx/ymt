<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
//	import Top from './components/pages/Top';
import Home from './components/pages/home/Home';
export default {
  name: 'App',
  components:{
  	Home
  }
}
</script>

<style>

</style>
