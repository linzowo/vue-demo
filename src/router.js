// 路由模块

// 引入vue-router
import VueRouter from "vue-router";

// 引入路由组件

// tabbar区域
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcartContainer from "./components/tabbar/ShopcartContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

// 电影列表区域
import MoviesList from "./components/movies/MoviesList.vue";
import MovieInfo from "./components/movies/MovieInfo.vue";

// 创建一个vue-router实例
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/home/list", component: MoviesList },
    { path: "/home/movieinfo/", name: 'movieinfo', component: MovieInfo },
    { path: "/member", component: MemberContainer },
    { path: "/shopcart", component: ShopcartContainer },
    { path: "/search", component: SearchContainer }
  ],
  linkActiveClass: "mui-active"
});

//   向外暴露router

export default router;
