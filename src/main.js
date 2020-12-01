import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css';
import Vue2TouchEvents from 'vue2-touch-events'
import VueParticlesBg from 'particles-bg-vue';

import App from './App.vue'

Vue.config.productionTip = false

const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    timeOut: 5000,
  }
}

Vue.use(Snotify, options)
Vue.use(Vue2TouchEvents)
Vue.use(VueParticlesBg);

new Vue({
  render: h => h(App),
}).$mount('#app')
