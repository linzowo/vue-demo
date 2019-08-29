<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in movieList" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.images.small" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>上映时间：{{ item.mainland_pubdate }}</span>
              <span>评分：{{ item.rating.average }}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=100"
        )
        .then(result => {
            if (result.body == '' || result.body.subjects.length == 0) {
                Toast('获取数据失败')
            }else{
                this.movieList = result.body.subjects;
                // console.log(this.movieList);
            }
        });
    }
  }
};
</script>

<style lang="scss" scope>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #2e89c9;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>