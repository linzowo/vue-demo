<template>
  <div class="goods-desc">
    <!-- 内容展示区 -->
    <div class="desc-title-container">
      <p class="desc-title">{{name}}</p>
    </div>
    <hr />
    <div class="desc-title-content">
      <div class="img-container" v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt />
      </div>
    </div>
  </div>
</template>

<script>
// 引入弹出框
import Toast from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.query.id,
      name: "",
      imgList: []
    };
  },
  created() {
    this.getGoodsDesc(this.id);
  },
  methods: {
    getGoodsDesc(id) {
      this.$http
        .get("http://myvueapi.io/vue-demo-goods-introduction-img.php")
        .then(result => {
          // console.log(result);

          if (result.status == 200) {
            this.name = result.body.data.name;
            this.imgList = result.body.data.imgList;
          } else {
            Toast("没有获取到数据");
          }
        })
        .catch(err => {
          Toast("没有获取到数据");
          // console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scope>
.goods-desc {
    .desc-title-container{
        .desc-title{
            color: #289bf3;
            text-align: center;
            font-size: 18px;
            padding: 15px 0;
            margin: 0;
        }
    }
  .desc-title-content {
    padding: 10px;
    .img-container {
        margin-bottom: -5px;
        padding: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>