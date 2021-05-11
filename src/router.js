import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import memeText from "./views/memeText"
import please from "./views/please"
import alex from "@/views/alex";
import ThreeJsTest from "@/views/ThreeJsTest";
import test from "@/views/test";
import lyrics from "@/views/lyrics";
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
    {
      path: '/three',
      name: 'ThreeJsTest',
      component: ThreeJsTest
    },
    {
      path: '/Alex',
      name: 'alex',
      component: alex
    },
    {
      path: '/tunnelteam',
      name: 'tunnelteam',
      beforeEnter() {
        window.location.replace("https://tunnelteam-34f98.web.app/")
      }
    },

    {
      path: '/grade',
      name: 'Gradinator',
      beforeEnter() {
        window.location.replace("https://gradinator-2484a.web.app/")
      }
    },
    {
      path: '/acc',
      name: 'test',
      component: test
    },
    {
      path: '/lyrics',
      name: 'lyrics',
      component: lyrics
    },

  ]
})
