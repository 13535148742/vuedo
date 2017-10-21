import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Editpost from './components/Editpost.vue'
import Categories from './components/Categories.vue'
import Editcategory from './components/Editcategory.vue'
import Users from './components/Users.vue'
import Profile from './components/Profile.vue'
import VueRouter from 'vue-router'
window.axios = require('axios')

Vue.use(VueRouter)

Vue.prototype.$http = axios


/* eslint-disable no-new */

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts/categories/:hashid',
    name: 'postincats',
    component: Posts
  },
  {
    path: '/posts/:hashid/edit',
    alias:'/posts/:hashid',
    name: 'editpost',
    component: Editpost
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/categories/:hashid/edit',
    alias: 'categories/:hashid',
    name: 'categories',
    component: Editcategory
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'dashboard',
  routes
})

const app = new Vue({
  el: '#dashboard',
  router,
  render: h => h(App)
})
