import Vue from 'vue'
import App from './App.vue'
import vueRateShow from './lib/index'

Vue.use(vueRateShow)

new Vue({
  el: '#app',
  render: h => h(App)
})
