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
// axios.defaults.baseURL = '/api';
// Vue.config.productionTip = false;

Vue.prototype.axios = axios;

// 引入element-ui组件
import { 
  Pagination,
  Image,
  Form,
  FormItem,
  Input,
  Button,
  Message,
 } from 'element-ui';
Vue.use(Pagination);
Vue.use(Image);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.prototype.$message = Message;

// axios导入(统一管理接口)
import getApi from '@/request/index'
Vue.prototype.$api = getApi

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

// 获取是几几后
Vue.filter('getAstro',(timestamp)=>{
  let newDate = new Date()
  newDate.setTime(timestamp)
  let birthday = newDate.toLocaleDateString(timestamp)
  let birthdayArr = birthday.split('/')
  let year = birthdayArr[0].substring(birthdayArr[0].length - 2) + '后'
  let month = birthdayArr[1]
  let day = birthdayArr[2]
  return (
    year +
    ' - ' +
    '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
      month * 2 - (day < '102223444433'.charAt(month - 1) - -19) * 2,
      2
    ) +
    '座'
  )
})