import Vue from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'
Vue.prototype.$axios = axios
//搜索
import {
  search
} from 'vant';

Vue.use(search);
//宫格
import {
  Grid,
  GridItem
} from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
//附近商家
import {
  divider
} from 'vant';

Vue.use(divider);
//下拉菜单
import {
  DropdownMenu,
  DropdownItem
} from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);

//底部组件
import {
  Tabbar,
  TabbarItem
} from 'vant';
Vue.use(Tabbar).use(TabbarItem);


//全局引入vuetouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//定义路由组件
import Home from './views/Home.vue'
import About from './views/About.vue'
import Ipage from './views/Ipage.vue'
//// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [{
  path: '/about',
  component: About,
  children: [{
    path: 'home',
    component: Home
  },{
    path: 'Ipage',
    component: Ipage
  }]
}]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  el: "#app",
  //让容器装载这个路由插件
  router,

  render(createElement) {
    return createElement(App)
  }
})