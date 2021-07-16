import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
   path: '/about',
   name: 'About',
   component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
   },
   {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact/index.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
