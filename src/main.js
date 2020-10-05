import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 很重要的头部配置携带token
 */
import axios from 'axios'
//配置请求根路径 跨域在vue.config.js中
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false;

Vue.prototype.axios = axios;

Vue.filter('formatPlaycount',(num)=>{
  if(num/100000000>1){
    num =  parseInt(num/100000000) + "亿";
  }else if(num/10000>1){
    num =  parseInt(num/10000) + "万";
  }
  return num
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
