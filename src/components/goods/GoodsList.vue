<template>
  <div>
    <div class="goods-list">
      <div
        class="goods-item"
        @click="gotoGoodsInfo(index)"
        v-for="(item, index) in goodsData"
        :key="index"
      >
        <div class="goods-img">
          <img :src="item.src" alt />
        </div>
        <h1 class="title">{{item.title}}</h1>
        <div class="goods-info">
          <p class="price">
            <span class="now">￥{{item.price_now}}</span>
            <span class="old">￥{{item.price_old}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余{{item.num}}件</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsData: [
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        },
        {
          src:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
          title: "Redmi Note 8 千元4800万四摄",
          price_now: 899,
          price_old: 999,
          num: 60
        }
      ]
    };
  },
  methods: {
    gotoGoodsInfo(id) {
      // 根据id获取指定数据的信息
      // 跳转到info页面=== 传递id至info页
      this.$router.push({
        name: "goodsinfo",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scope>
.goods-list {
  display: flex;
  flex-wrap: wrap; // 内部的盒子自动换行
  justify-content: space-between; // 内部的盒子沿主轴方向两侧靠边
  padding: 10px;
  .goods-item {
    width: 49%; // 保证一行能够放两个
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 5px 0;
    display: flex;
    flex-direction: column; // 改变主轴方向，默认为row现在改为column
    justify-content: space-between;
    min-height: 300px; // 设置最小高度至少为300px
    .goods-img {
      img {
        width: 100%;
      }
    }
    h1 {
      font-size: 14px;
    }
    .goods-info {
      margin: 2px;
      position: relative;
      bottom: 2px;
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        span {
          margin-right: 5px;
        }
        .now {
          color: red;
          font-weight: blod;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through; // 添加划线
        }
      }
      .sell {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>