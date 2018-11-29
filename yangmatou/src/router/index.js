import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home/Home'
import Detail from '../components/pages/Detail'
import ShopCar from '../components/pages/ShopCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
			path:'/home',//path:匹配的hash地址
			name:'Home',//路由的名字
			component:Home//该路由所引用的组件的名字
		},
    {
			path:'/detail',//path:匹配的hash地址
			name:'Detail',//路由的名字
			component:Detail//该路由所引用的组件的名字
		},
		 {
			path:'/shopCar',//path:匹配的hash地址
			name:'ShopCar',//路由的名字
			component:ShopCar//该路由所引用的组件的名字
		}
  ]
})
