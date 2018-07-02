import Vue from 'vue'
import App from './components/App.vue'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
require('semantic-ui-css/semantic.css')


Vue.use(VueMomentJS, moment)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
