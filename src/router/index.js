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
  {
    path : '/*',
    redirect : '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
