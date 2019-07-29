import Vue from 'vue'
import App from './App.vue'
import './Header.css'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render(createElement){
    return createElement(App)
  }
})
// .$mount('#app')
