<template>
  <div>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <swiper :img-list="imgList"></swiper>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
        </div>
        <div class="mui-card-footer">页脚</div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
        </div>
        <div class="mui-card-footer">页脚</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入轮播图子组件
import swiper from "../subcompoents/swiper.vue";
export default {
  data() {
    return {
      id: this.$route.query.id,
      imgApi: "http://myvueapi.io/vue-demo-goods-lunbotu-img.php",
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
  background-color: #ccc;
  .mui-card:first-child {
    margin-top: 0 !important; // 去掉卡片样式默认的第一个盒子的margin-top: 15px;的设
    .mint-swipe {
      height: 400px;

    }
    .mint-swipe-item {
      img {
        height: auto;
        max-width: 100%;
      }
    }
  }
}
</style>