import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('country-flag', CountryFlag)


