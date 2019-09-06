<template>
  <div>
    <!-- 内容区域 -->
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <div class="mui-media-body">
          <h1>{{ title }}</h1>
          <p>{{ original_title }}</p>
        </div>
      </div>
      <div class="mui-card-content">
        <img :src="img" alt width="100%" />
        <p>导演：{{ directors }}</p>
        <p>
          演员：
          <span v-for="item in casts" :key="item.id">{{ item.name }}/</span>
        </p>
        <p>片长：{{ durations }}</p>
        <p>
          类型：
          <span v-for="item in genres" :key="item.id">{{item}}/</span>
        </p>
        <p>评分：{{ rating }}</p>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">喜欢</a>
        <a class="mui-card-link">评论</a>
        <a class="mui-card-link" @click="$router.go(-1)">查看更多</a>
      </div>
    </div>

    <!-- 评论区域 -->
    <comment></comment>
  </div>
</template>

<script>
// 引入子组件
import comment from '../subcompoents/comment.vue'

export default {
  data() {
    return {
      img:'',
      title:'',
      original_title:'',
      directors:'',
      casts:[],
      durations:'',
      genres:[],
      rating:0,
    };
  },
  created() {
    this.getMovieInfo();
  },
  methods: {
    getMovieInfo() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=100"
        )
        .then(result => {
          if (result.body == "" || result.body.subjects.length == 0) {
            Toast("获取数据失败");
          } else {
            let movie = result.body.subjects[this.$route.query.index];
            this.img = movie.images.small
            this.title = movie.title
            this.original_title = movie.original_title
            this.directors = movie.directors[0].name
            this.casts = movie.images.casts
            this.durations = movie.durations[0]
            this.genres = movie.genres
            this.rating = movie.rating.average
          }
        });
    }
  },
  components: {
    comment: comment
  }
};
</script>

<style lang="scss" scope>
.mui-card-header.mui-card-media {
  div.mui-media-body {
    margin-left: 0;
  }
}
</style>