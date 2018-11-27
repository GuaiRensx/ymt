import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
	import Info from '../components/pages/Info'
	import Login from '../components/pages/Login'
	import Reg from '../components/pages/Reg'
	import About_ymt from '../components/pages/About_ymt'
	import Media from '../components/pages/Media'
	import Home from '../components/pages/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
        {
      path: '/Home',
      name:'Home',
      component:Home
    },
    {
      path: '/info',
      name:'Info',
      component:Info
    },
    {
      path: '/login',
      name:'Login',
      component:Login
    },
    {
      path: '/Reg',
      name:'Reg',
      component:Reg
    },
     {
      path: '/About_ymt',
      name:'About_ymt',
      component:About_ymt
    },
         {
      path: '/Media',
      name:'Media',
      component:Media
    }
  ]
})
