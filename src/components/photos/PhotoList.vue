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
            v-for="(item, index) in category" :key="index"
          >{{item}}</a>
        </div>
      </div>
    </div>
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
      category: []
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
  },
  methods: {
    getCategory() {
      this.$http
        .get("http://myvueapi.io/vue-demo-tpfx-category.php")
        .then(result => {
          // console.log(result.body);
          if (result.body.length == 0) {
            Toast("没有获取到数据");
          } else {
            this.category = result.body.category;
          }
        })
        .catch(err => {
          Toast("没有获取到数据");
        });
    }
  }
};
</script>

<style lang="scss" scope>
* {
  touch-action: none;
}
</style>