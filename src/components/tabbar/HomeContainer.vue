<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper :img-list="imgList"></swiper>

    <!-- 六宫格展示区 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/list">
            <img src="../../images/menu1.png" alt />
            <div class="mui-media-body">正在热映</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="../../images/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="../../images/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入轮播图组件
import swiper from "../subcompoents/swiper.vue";
export default {
  data() {
    return {
      imgApi: "http://myvueapi.io/vue-demo-lunbotu-img.php",
      imgList: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get(this.imgApi).then(result => {
        this.imgList = result.body.imgList;
      });
    }
  },
  components: {
    swiper: swiper
  }
};
</script>

<style lang="scss" scope>
.mui-content {
  background-color: #fff;
  border: none;

  .mui-grid-view.mui-grid-9 {
    border: none;
    background-color: #fff;

    .mui-table-view-cell {
      border: none;
      // background-color: #fff;

      img {
        width: 60px;
        height: 60px;
      }

      .mui-media-body {
        font-size: 13px;
      }
    }
    &:after {
      position: absolute;
    }
  }
}

.mint-swipe {
  height: 200px;
  // height: auto;
}
.mint-swipe-item {
  img {
    width: 100%;
    height: auto;
  }
}
</style>