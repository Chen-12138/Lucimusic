import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import rankRouter from './rank'
import playlistRouter from './playlist'
import singerRouter from './singer'
import videoRouter from './video'
import mvRouter from './mv'
import personalRouter from './personal'
import playlistDetailRouter from './playlist-detail'
import loginRouter from './login'
import searchRouter from './search'
import testRouter from './test'

Vue.use(VueRouter)

const routes = [
  homeRouter,
  rankRouter,
  playlistRouter,
  singerRouter,
  videoRouter,
  mvRouter,
  personalRouter,
  playlistDetailRouter,
  loginRouter,
  searchRouter,
  testRouter,
  {
    path : '/*',
    redirect : '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// // 路由守卫
// router.beforeEach((to, from, next)=>{
//   //路由中设置的needLogin字段就在to当中 
//   // console.log(to)
//   if(window.sessionStorage.token){
//   //  console.log(window.sessionStorage);
//    // console.log(to.path) //每次跳转的路径
//    if(to.path === '/login'){
//     //登录状态下 访问login.vue页面 会跳到index.vue
//     next({path: '/home'});
//    }else{
//     next();
//    }
//   }else{
//    // 如果没有session ,访问任何页面。都会进入到 登录页
//    if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
//     next();
//    } else { // 否则 跳转到登录页面
//     next({ path: '/login' });
//    }
//   }
// })

export default router
