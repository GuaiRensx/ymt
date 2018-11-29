import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


//每次刚进入网站，肯定会调用main.js，在刚调用的时候，先从本地存储中，
//把购物车的数据读取出来放到store中
var car = JSON.parse(localStorage.getItem('car')||'[]');


export default new Vuex.Store({
	state:{
		car:car
	},
	mutations:{
		addToCar(state,goodsInfo){
			//点击加入购入车，商品信息，保存到store中的car上
			//如果购物车中，之前已经有这个对应的商品，那么只需修改数量
			//如果没有，则直接把商品数据，push到car中即可
			
			//假设在购物车中没有找到对应的商品
			var flag = false;
			
			
			state.car.some(item=>{
				if(item.id==goodsInfo.id){
					 item.count+=parseInt(goodsInfo.count);
					 flag=true
					 return true
				}
			})
			
			//如果循环完毕最终flag还是flase，那么直接将goodsInfo  push到car中
			if(!flag){
				state.car.push(goodsInfo);
			}
			console.log(state.car);
			//当更新car之后，把car数组，存储到本地的localStorage中
			localStorage.setItem('car',JSON.stringify(state.car))
		}
		
	},
	getters:{
		//相当于 计算属性，也相当于 filters
		getAllCount(state){
			var c=0;
			state.car.forEach(item=>{
				c+=item.count
				console.log(c)
			})
			return c
		},
		getAllClass(state){
			return state.car.length;
		}
	}
})
