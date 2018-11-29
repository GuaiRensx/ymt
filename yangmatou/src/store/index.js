import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//每次刚进入网站，肯定会调用main.js，在刚调用的时候，先从本地存储中，
//把购物车的数据读取出来放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]');

export default new Vuex.Store({
	state: {
		car: car,
		login: window.localStorage.getItem('login') ? window.localStorage.getItem('login') : false,
		sliderShow: false
	},
	mutations: {
		//更改state 里的数据的方法
		changeLogin(state, val1) {
			console.log(val1)

			state.login = val1
		},
		changeSliderShow(state, val) {
			state.sliderShow = val
		},
		addToCar(state, goodsInfo) {
			//点击加入购入车，商品信息，保存到store中的car上
			//如果购物车中，之前已经有这个对应的商品，那么只需修改数量
			//如果没有，则直接把商品数据，push到car中即可

			//假设在购物车中没有找到对应的商品
			var flag = false;
			state.car.some(item => {
				if(item.id == goodsInfo.id) {
					item.count += parseInt(goodsInfo.count);
					flag = true
					return true
				}
			})

			//如果循环完毕最终flag还是flase，那么直接将goodsInfo  push到car中
			if(!flag) {
				state.car.push(goodsInfo);
			}
			console.log(state.car);
			//当更新car之后，把car数组，存储到本地的localStorage中
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		addGoodsInfo(state, goodsInfo) {
			state.car.some(item => {
				if(item.id == goodsInfo.id) {
					item.count += goodsInfo.count;
					return true
				}
			})
			//把修改商品的数量保存到本地
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		subGoodsInfo(state, goodsInfo) {
			state.car.some(item => {
				if(item.id == goodsInfo.id) {
					item.count -= goodsInfo.count;
					if(item.count <= 1) {
						item.count = 1
					}
					return true
				}
			})
			//把修改商品的数量保存到本地
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		removeGoodsInfo(state, id) {
			state.car.some((item, i) => {
				if(item.id == id) {
					state.car.splice(i, 1);
					return true
				}
			})
			//把修改商品的数量保存到本地
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if(item.id == info.id) {
					item.selected = info.selected
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateAllSelected(state, info) {
			state.car.some(item => {
				if(item.selected == info.id) {
					item.selected = info.selected
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		}

	},
	getters: {
		//相当于 计算属性，也相当于 filters
		getAllCount(state) {
			var c = 0;
			state.car.forEach(item => {
				c += item.count
				console.log(c)
			})
			return c
		},
		getAllClass(state) {
			return state.car.length;
		},
		getGoodsCount(state) {
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.count
			})
			return o
		},
		getGoodsSelected(state) {
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.selected;
				console.log(o);
			})
			return o
		},
		//		getAllMoney(state){
		//			var selectAll=0;
		//			state.car.forEach(item=>{
		//				if(item.selected){
		//					selectAll=true
		//				}
		//			})
		//			return selectAll
		//		},
		getGoodsMoney(state) {
			var money = 0;
			state.car.forEach(item => {
				if(item.selected) {
					money += item.count * item.price;
				}
			})
			return money
		}
	}
})