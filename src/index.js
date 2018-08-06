import Vue from 'vue'
import App from './components/App.vue'
require('semantic-ui-css/semantic.css')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
