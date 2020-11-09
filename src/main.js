import Vue from 'vue'
import App from './App.vue'
import router from './router'
import earringsData from './earrings.js'
import ringsData from './rings.js'
import watchesData from './watches.js'

let data = {
  earrings: earringsData,
  cart: [],
  rings: ringsData,
  watches: watchesData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
