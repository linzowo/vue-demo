<template>
  <div class="app-container">
    <!-- header 区域 -->
    <mt-header fixed title="我的移动端网页">
      <span slot="left">
        <mt-button icon="back" @click="goback" v-show="flag">返回</mt-button>
      </span>
    </mt-header>

    <!-- router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{$store.getters.shopCartNumChange}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false // 用来判断是否显示返回按钮的标志
    };
  },
  created(){
    this.flag = !(this.$route.path === '/home')
  },
  methods: {
    goback() {
      // 回退到上一页
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      this.flag = !(newVal === "/home");
    }
  }
};
</script>

<style lang="scss" scope>
html {
  background-color: #fff;
}
.app-container {
  padding: 40px 0 55px 0;
  background-color: #fff;
  overflow-x: hidden;
}
// 路由区动画效果
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mint-header.is-fixed {
  z-index: 900;
}
</style>