import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import KingAndSlave from '../views/KingAndSlave.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'KingAndSlave',
    component: KingAndSlave
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
