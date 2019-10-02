import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import memeText from "./views/memeText";
import github from  "./views/github.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/memeText',
      name: 'memeText',
      component: memeText
    },
    {
      path: '/github',
      name: 'github',
      component: github,
      beforeEnter() {location.href = 'http://github.com'}
    }
  ]
})
