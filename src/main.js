// 这是本项目的js入口文件

// 引入vue
import Vue from 'vue';
// 引入路由模块
import VueRouter from 'vue-router';
// 将路由模块挂载到vue上
Vue.use(VueRouter);

// 引入vue-resource模块
import VueResource from 'vue-resource';
// 将VueResource挂载到vue中
Vue.use(VueResource);

// 将自定义的router模块引入
import router from './router.js'




// 按需引入mintui组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
// 按需挂载mintui
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入MUI样式库
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 引入项目主要app组件
import app from './app.vue'

// 创建vue实例
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(app),
  router
})


