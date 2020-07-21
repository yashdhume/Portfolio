import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import memeText from "./views/memeText"
import please from "./views/please"

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
      path: '/meme',
      name: 'memeText',
      component: memeText
    },
    {
      path: '/please',
      name: 'please',
      component: please
    },

  ]
})
