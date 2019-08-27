<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in imgList" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格展示区 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http
        .get("http://myvueapi.io/vue-demo-lunbotu-img.php")
        .then(result => {
          this.imgList = result.body.imgList;
        });
    }
  }
};
</script>

<style lang="scss" scope>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: yellow;
  }
  &:nth-child(3) {
    background-color: blue;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-content {
  background-color: #fff;
  border: none;

  .mui-grid-view.mui-grid-9 {
    border: none;

    .mui-table-view-cell {
      border: none;
      background-color: #fff;

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
</style>