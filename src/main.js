// 这是本项目的js入口文件

// 引入vue
import Vue from "vue";
// 引入路由模块
import VueRouter from "vue-router";
// 注册路由模块
Vue.use(VueRouter);
// 将自定义的router模块引入
import router from "./router.js";

// vuex模块
import Vuex from "vuex";
Vue.use(Vuex);
// 创建vuex.store实例对象
var store = new Vuex.Store({
  state: {
    shopCart: [] // { id: 商品id, count: 商品数量, price: 商品价格, state: 商品状态}
  },
  mutations: {
    addToShopcart(state, newGoods) {
      // 新增商品到购物车
      // 该商品是否已经存在于购物车
      let flag = false; // 是否存在的标志，默认不存在

      state.shopCart.some(ele => {
        if (ele.id == newGoods.id) {
          ele.count += parseInt(newGoods.count);
          flag = true;
        }
      });

      if (!flag) {
        state.shopCart.push(newGoods);
      }

      // 存储数据到本地
      localStorage.setItem('shopCartData',JSON.stringify(state.shopCart));
    },
    removeFromShopcart(state,goodsID){ // 从购物车中删除商品
      state.shopCart.forEach((ele,i) => {
        if (ele.id == goodsID){
          state.shopCart.splice(i,1)
          return false;
        }
      })
      // 存储数据到本地
      localStorage.setItem('shopCartData',JSON.stringify(state.shopCart));
    },
    changeGoodsState(state,goodsID){ // 修改商品的选中状态
      state.shopCart.forEach(ele =>{
        if (ele.id == goodsID){
          ele.state = !ele.state
          return false;
        }
      })
      // 存储数据到本地
      localStorage.setItem('shopCartData',JSON.stringify(state.shopCart));
    },
    changeGoodsCount(state,goodsData){
      state.shopCart.forEach(ele =>{
        if (ele.id == goodsData.id){
          ele.count = goodsData.newCount
          return false;
        }
      })
      // 存储数据到本地
      localStorage.setItem('shopCartData',JSON.stringify(state.shopCart));
    }
  },
  getters: {
    shopCartNumChange(state) {
      // 返回购物车商品总数
      let countShopCart = 0;
      state.shopCart.forEach(ele => {
        countShopCart += ele.count;
      });
      return countShopCart;
    },
    countShopcartSlectedGoods(state){
      // 统计用户选中了多少件商品并计算价格
      let countNum = 0;
      let countPrice = 0;
      state.shopCart.forEach(ele => {
        if(ele.state){
          countNum += ele.count
          countPrice += (ele.price * ele.count)
        }
      })
      return {countNum,countPrice}
    }
  }
});

// 引入vue-resource模块
import VueResource from "vue-resource";
// 将VueResource挂载到vue中
Vue.use(VueResource);

// 引入时间格式化组件
import moment from "moment";
// 定义一个全局的过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY年MM月DD日") {
  return moment(dataStr).format(pattern);
});

// 整体导入Mintui
import Mintui from "mint-ui";
Vue.use(Mintui);
import "mint-ui/lib/style.css";

// 引入缩略图插件
import VuePreview from "vue-preview";
Vue.use(VuePreview);

// 按需引入mintui组件
// import { Header,Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
// Vue.component('mt-header', Header);
// Vue.component('mt-swipe', Swipe);
// Vue.component('mt-swipe-item', SwipeItem);
// Vue.component('mt-button', Button);
// Vue.use(Lazyload);

// 引入MUI样式库
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

// 引入项目主要app组件
import app from "./app.vue";

// 创建vue实例
var vm = new Vue({
  el: "#app",
  data: {},
  created(){
    this.getShopCartData()
  },
  methods: {
    getShopCartData(){
      let shopCartData = JSON.parse(localStorage.getItem('shopCartData'));
      shopCartData.forEach(ele => {
        this.$store.commit('addToShopcart',ele)
      })
    }
  },
  render: c => c(app),
  router,
  store
});
