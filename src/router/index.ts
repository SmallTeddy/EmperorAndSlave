import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import EmperorAndSlave from '../views/EmperorAndSlave.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'EmperorAndSlave',
    component: EmperorAndSlave
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
