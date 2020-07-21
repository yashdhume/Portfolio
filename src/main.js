import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import'./firebase';
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.config.productionTip = false
import { firestorePlugin } from 'vuefire'
Vue.config.productionTip = false
Vue.use(firestorePlugin)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
