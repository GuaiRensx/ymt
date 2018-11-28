import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home/Home'
import Detail from '../components/pages/Detail'
import Info from '../components/pages/Info'
import Login from '../components/pages/Login'
import Reg from '../components/pages/Reg'
import About_ymt from '../components/pages/About_ymt'
import Media from '../components/pages/Media'
import My from '../components/pages/My'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home', //path:匹配的hash地址
			name: 'Home', //路由的名字
			component: Home //该路由所引用的组件的名字
		},
		{
			path: '/detail', //path:匹配的hash地址
			name: 'Detail', //路由的名字
			component: Detail //该路由所引用的组件的名字
		},
		{
			path: '/My',
			name: 'My',
			component: My,
			children: [{
					path: 'Info',
					name: 'Info',
					component: Info
				},
				{
					path: 'login',
					name: 'Login',
					component: Login
				},
				{
					path: 'Reg',
					name: 'Reg',
					component: Reg
				}
			]
		},

		{
			path: '/About_ymt',
			name: 'About_ymt',
			component: About_ymt
		},
		{
			path: '/Media',
			name: 'Media',
			component: Media
		}
	]
})