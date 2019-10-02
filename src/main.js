import Vue from 'vue'
import'./firebase';
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
Vue.config.productionTip = false
Vue.use(firestorePlugin)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
