<template>
  <div class="goods-info-container">
    <div class="mui-content">
      <!-- 内容展示卡片 -->
      <div class="mui-card mui-card-swiper">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <swiper :img-list="imgList"></swiper>
          </div>
        </div>
      </div>
      <div class="mui-card mui-card-sell">
        <div class="mui-card-header">Redmi Note 8 千元4800万四摄</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              <span class="price-old">市场价：￥2999</span>
              <span class="price-now">销售价：￥{{goodsPrice}}</span>
            </p>
            <p class="num">
              <span>
                购买数量：
                <numbox :default-num="goodsNum" @get-num="getNumboxNum" :max-num="stock"></numbox>
              </span>
            </p>
            <div class="buy">
              <mt-button type="primary">立即购买</mt-button>
              <mt-button type="danger" @click="addToShopcart">加入购物车</mt-button>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="goods-id">商品货号：123456789</p>
            <p class="goods-inventory">库存情况：{{stock}}件</p>
            <p class="goods-time">上架时间：2019年9月4日 09:51:00</p>
            <div class="getMoreInfo">
              <p class="introduction">
                <mt-button type="primary" size="large" plain @click="goToDesc(id)">图文介绍</mt-button>
              </p>
              <p class="comments">
                <mt-button type="danger" size="large" plain @click="goToComments(id)">商品评论</mt-button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入轮播图子组件
import swiper from "../subcompoents/swiper.vue";
// 引入商品数量选择按钮
import numbox from "../subcompoents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.query.id,
      imgApi: "http://myvueapi.io/vue-demo-goods-lunbotu-img.php",
      imgList: [],
      goodsPrice: 2699,
      goodsNum: 1,
      stock: 60
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
    },
    goToDesc(id) {
      // 跳转到商品图文介绍页，并传递id方便其获取数据
      this.$router.push({ name: "goodsdesc", query: { id: id } });
    },
    goToComments(id) {
      // 跳转到商品评论页，并传递id方便其获取数据
      this.$router.push({ name: "goodscomment", query: { id: id } });
    },
    addToShopcart() {
      // console.log(this.goodsNum);
      // console.log(this.$store);
      this.$store.commit("addToShopcart", {
        id: this.id,
        count: this.goodsNum,
        price: this.goodsPrice,
        state: true
      });
    },
    getNumboxNum(newVal) {
      this.goodsNum = newVal; // 通过向子组件传递方法获取子组件的值
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scope>
.goods-info-container {
  .mui-content {
    height: 100%;
    background-color: #ccc;
    .mui-card:first-child {
      margin-top: 0 !important; // 去掉卡片样式默认的第一个盒子的margin-top: 15px;的设
      .mint-swipe {
        height: auto;
      }
      .mint-swipe-item {
        img {
          height: auto;
          max-width: 100%;
        }
      }
    }
    .mui-card-sell {
      .price {
        .price-old {
          text-decoration: line-through;
        }
        .price-now {
          color: red;
          font-weight: 800;
        }
      }
    }
    div.is-active {
      position: relative; // 实现轮播图自适应高度变化
    }
  }
}
</style>