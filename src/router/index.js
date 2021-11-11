import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Job',
    name: 'Job',
    component: ()=> import('../views/Job.vue')
    
  },
  {
    path: '/Client',
    name: 'Client',
    component: ()=> import('../views/Client.vue')
    
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
