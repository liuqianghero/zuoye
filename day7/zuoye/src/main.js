import Vue from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'
Vue.prototype.$axios = axios
//搜索
import {
  search
}  from 'vant'; 

Vue.use(search);
//宫格
import{
  Grid,
  GridItem  
} from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render(createElement){
    return createElement(App)
  }
})
