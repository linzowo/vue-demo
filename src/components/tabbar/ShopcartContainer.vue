<template>
  <div>
    <div class="shopcart-goods-list">
      <div class="mui-card" v-for="item in shopcart" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="state-btn">
              <mt-switch v-model="item.state" @change="$store.commit('changeGoodsState',item.id)"></mt-switch>
            </div>
            <router-link :to="{ name: 'goodsinfo', query: { id: item.id } }" class="goods-img">
              <img :src="item.img" alt />
            </router-link>
            <div class="goods-info">
              <router-link :to="{ name: 'goodsinfo', query: { id: item.id } }" class="goods-img">
                <h1>{{item.title}}</h1>
              </router-link>
              <div class="operation-btn">
                <span class="price">￥{{item.price}}</span>
                <numbox :goods-num="item.count" :goods-id="item.id"></numbox>
                <a href="javascript:" @click="removeFromShopcart(item.id)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopcart-to-pay">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="shopcart-goods-price">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span>{{$store.getters.countShopcartSlectedGoods.countNum}}</span>件，总价：
                <span>￥{{$store.getters.countShopcartSlectedGoods.countPrice}}</span>
              </p>
            </div>
            <button type="button" class="mui-btn mui-btn-danger">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcompoents/shopcart_numbox.vue";
export default {
  data() {
    return {
      shopcart: [] // { id: 商品id, count: 商品数量, price: 商品价格, state: 商品状态, title: 商品标题, img:商品图片}
    };
  },
  components: {
    numbox
  },
  created() {
    this.getGoodsInfo(); // 在创建完成后立即获取商品信息
  },
  methods: {
    getGoodsInfo() {
      //   根据购物车数据中存放的商品id获取商品详细信息
      //   let goodsIDList = [];
      //   this.$store.shopCart.forEach(item => {
      //     // 在这里获取全部商品id
      //     // console.log(item.id);
      //   });
      // 在这里获取数据库中的商品详细信息并存储到this.shopcart上
      // 将获取到的商品id拼接到query语句中
      // 发起异步请求操作
      //   将获取到的数据存放到this.shopcart上

      // 模拟以上步骤
        // console.log(this.$store);
        
      this.$store.state.shopCart.forEach(item => {
        this.shopcart.push({
          id: item.id,
          title: "Redmi Note 8 千元4800万四摄",
          img:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          price: item.price,
          count: item.count,
          state: item.state
        });
      });
    },
    removeFromShopcart(id){
      // 删除数据库数据
      this.$store.commit('removeFromShopcart',id)
      // 更新本地数据===》因为这里购物车中的数据和线上展示的数据不是完全一样的所以不使用getters去处理
      this.shopcart = []
      this.getGoodsInfo()
    }
  }
};
</script>

<style lang="scss" scope>
.shopcart-goods-list {
  .mui-card-content-inner {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
    .goods-info {
      h1 {
        font-size: 13px;
        color: #000;
      }
      .operation-btn {
        margin: 15px 0;
        .price {
          color: red;
        }
      }
    }
  }
}
.shopcart-to-pay {
  .mui-card {
    padding: 5px;
    .mui-card-content-inner {
      display: flex;
      justify-content: space-between;
      .shopcart-goods-price {
        span {
          color: red;
          font-weight: bold;
        }
      }
      button {
        height: 40px;
      }
    }
  }
}
</style>