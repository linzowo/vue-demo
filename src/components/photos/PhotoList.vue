<template>
  <div>
    <!-- 顶部滑动导航栏 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',index==0?'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoList(index)"
            v-for="(item, index) in category"
            :key="index"
          >{{item}}</a>
        </div>
      </div>
    </div>

    <!-- 图片展示区 -->
    <ul class="photo-list">
      <router-link v-for="(item,i) in photolist" :key="i" :to="{ name: 'photoinfo', query:{ id: i}}" tag="li">
        <img v-lazy="item.img" />
        <div class="photo-content">
          <p class="photo-title">{{ item.title }}</p>
          <div class="photo-info">
            <p>导演：{{item.directors}}</p>
            演员：
            <span v-for="(cast, index) in item.casts" :key="index">
              {{cast.name}}/
            </span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 引入mui对象
import mui from "../../lib/mui/js/mui.js";

// 引入报错对象
import Toast from "mint-ui";

// 向外暴露组件
export default {
  data() {
    return {
      category: [],
      doubanlist: [],
      photolist: []
    };
  },
  mounted() {
    // 在组件被创建在页面之后立即执行挂载滑动事件
    mui(".mui-scroll-wrapper").scroll({
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: true, //是否显示滚动条
      deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
      bounce: true //是否启用回弹
    });
  },
  created() {
    this.getCategory();
    this.getAllInfoByDouban();
  },
  methods: {
    getCategory() {
      this.$http
        .get("http://myvueapi.io/vue-demo-tpfx-category.php")
        .then(result => {
          if (result.body.length == 0) {
            Toast("没有获取到数据");
          } else {
            this.category = result.body.category;
          }
        })
        .catch(err => {
          Toast("没有获取到数据");
        });
    },
    getAllInfoByDouban() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10"
        )
        .then(result => {
          if (result.body.length == 0) {
            Toast("没有获取到数据");
          } else {
            this.doubanlist = result.body.subjects;
            this.getPhotoList(0);
          }
        })
        .catch(err => {
          Toast("没有获取到数据");
        });
    },
    getPhotoList(id) {
      // 通过id获取对应的图片列表
      // 因为接口问题,这里就只模拟发送了请求,(假装发起了请求)
      this.photolist = [];
      // 将完整的豆瓣api数据拆解成我需要的数据，然后加载在数据中
      this.doubanlist.forEach(item => {
        this.photolist.push({
          title: item.title,
          img: item.images.small,
          directors: item.directors[0].name,
          casts: item.casts
        });
      });
    }
  }
};
</script>

<style lang="scss" scope>
* {
  touch-action: none;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 0 10px;
  li {
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    text-align: center;
    background-color: #ccc;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }

    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .photo-content{
      position: absolute;
      z-index: 100;
      bottom: 0;
      background-color: rgba(0,0,0,0.6);
      width: 100%;
      max-height: 85px;
      color: #fff;
      text-align: left;
      p{
        color: #fff;
      }
      .photo-title{
        font-size: 14px;
      }
      .photo-info{
        font-size: 13px;

      }
    }
  }
}
</style>