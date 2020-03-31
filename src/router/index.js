import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => { return import('../views/Login.vue') }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => { return import('../views/Signup.vue') }
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
