import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'test',
    component: ()=> import('../views/test.vue')
  },
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
  {
    path: '/Candidate',
    name: 'Candidate',
    component: ()=> import('../views/Candidate.vue')
    
  },
  {
    path: '/Folder',
    name: 'Folder',
    component: ()=> import('../views/Folder.vue')
    
  },
  {
    path: '/Placement',
    name: 'Placements',
    component: ()=> import('../views/Placement.vue')
    
  },
  {
    path: '/Activitie',
    name: 'Activities',
    component: ()=> import('../views/Activities.vue')
    
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
