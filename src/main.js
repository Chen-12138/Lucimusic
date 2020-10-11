import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/el.css'

/**
 * 很重要的头部配置携带token
 */
import axios from 'axios'
//配置请求根路径 跨域在vue.config.js中
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false;

Vue.prototype.axios = axios;

// 引入element-ui组件
import { 
  Pagination,
  Image,
 } from 'element-ui';
Vue.use(Pagination);
Vue.use(Image);

//  加载组件
import Loading from '@/components/loading'
Vue.component('Loading',Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.filter('formatPlaycount',(num)=>{
  if(num/100000000>1){
    num =  parseInt(num/100000000) + "亿";
  }else if(num/10000>1){
    num =  parseInt(num/10000) + "万";
  }
  return num
})

Vue.filter('formatTime',(duration)=>{
  var minutes = parseInt((duration%(1000*60*60)) / (1000*60));
  var seconds = parseInt((duration % (1000*60)) / 1000);
  return (minutes < 10 ? ('0'+minutes) : minutes) + ':' + (seconds < 10 ? ('0'+seconds):seconds);
})

Vue.filter('formateDate',(time)=>{
  var date = new Date(time);
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  // console.log(d)
  return (y < 10 ? ('0'+y):y) + '-' + (m < 10 ? ('0'+m):m) + '-' + (d < 10 ? ('0'+d):d);
})

Vue.filter('formatIndex',(index)=>{
  var num = index+1;
  if(num<10){
    num = '0' + num;
  }
  return num
})