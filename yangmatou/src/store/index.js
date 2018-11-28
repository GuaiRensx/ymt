import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
    sliderShow:false
  },
  mutations:{
    //更改state 里的数据的方法
    changeLogin(state,val1){
      console.log(val1)

      state.login=val1
    },
    changeSliderShow(state,val){
     state.sliderShow=val
    }
  }
})