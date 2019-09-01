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

// 引入时间格式化组件
import moment from 'moment'
// 定义一个全局的过滤器
Vue.filter('dateFormat', function(dataStr,pattern = 'YYYY年MM月DD日'){
  return moment(dataStr).format(pattern)
})

// 整体导入Mintui
import Mintui from 'mint-ui';
Vue.use(Mintui);
import 'mint-ui/lib/style.css';

// 按需引入mintui组件
// import { Header,Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
// Vue.component('mt-header', Header);
// Vue.component('mt-swipe', Swipe);
// Vue.component('mt-swipe-item', SwipeItem);
// Vue.component('mt-button', Button);
// Vue.use(Lazyload);

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


