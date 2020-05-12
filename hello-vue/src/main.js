import Vue from 'vue'
import App from './App.vue'

import HelloAPI from '@/services/HelloAPI.js'

Vue.config.productionTip = false

Vue.prototype.$hello_api = HelloAPI

new Vue({
  render: h => h(App),
}).$mount('#app')
