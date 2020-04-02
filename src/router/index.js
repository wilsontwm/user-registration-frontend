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
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    component: () => { return import('../views/About.vue') }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login'
    },
    component: () => { return import('../views/Login.vue') }
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: {
      title: 'Signup'
    },
    component: () => { return import('../views/Signup.vue') }
  },
  {
    path: '/forgetpassword',
    name: 'ForgottenPassword',
    meta: {
      title: 'Forgotten Password'
    },
    component: () => { return import('../views/ForgottenPassword.vue') }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard'
    },
    component: () => { return import('../views/Dashboard.vue') }
  },
  {
    path: '/error',
    name: "Error 404",
    component: () => { return import('../views/Error404.vue')}
  },
  // page not found error
  {
    path: '*',
    redirect: '/error'
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in
  const publicPages = ['/', '/login', '/signup', '/forgetpassword', '/about', '/error']
  const authRequired = !publicPages.includes(to.path);
  const isLoggedIn = localStorage.getItem('token');

  if (authRequired && !isLoggedIn) {
    return next('/login');
  }
  next();
})

export default router
