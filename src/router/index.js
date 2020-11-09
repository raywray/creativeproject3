import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Earrings from '../views/Earrings.vue'
import Rings from '../views/Rings.vue'
import Watches from '../views/Watches.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/earrings',
    name: 'Earrings',
    component: Earrings
  },
  {
    path: '/rings',
    name: 'Rings',
    component: Rings
  },
  {
    path: '/watches',
    name: 'Watches',
    component: Watches
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
