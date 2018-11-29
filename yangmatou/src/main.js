// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'

import Axios from 'axios';

import store from './store/index.js';
Vue.prototype.$axios=Axios;

	Axios.interceptors.response.use(function (response) {
    		// Do something with response data
   		 // console.log(1111)
    		return response.data;
  }, function (error) {
    		// Do something with response erro
   		 return Promise.reject(error);
  });


Vue.config.productionTip = false
import './components/styles/base.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
