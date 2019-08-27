// 路由模块

// 引入vue-router
import VueRouter from "vue-router";

// 引入路由组件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopcartContainer from './components/ShopcartContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

// 创建一个vue-router实例
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: HomeContainer},
    { path: '/member', component: MemberContainer},
    { path: '/shopcart', component: ShopcartContainer},
    { path: '/search', component: SearchContainer},
  ],
  linkActiveClass: 'mui-active'
});

//   向外暴露router

export default router;
