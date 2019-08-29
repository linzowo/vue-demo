<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <div class="mui-media-body">
          <h1>{{ movie.title }}</h1>
          <p>{{ movie.original_title }}</p>
        </div>
      </div>
      <div class="mui-card-content">
        <img :src="movie.images.large" alt width="100%" />
        <p>导演：{{ movie.directors[0].name }}</p>
        <p>
          演员：
          <span v-for="item in movie.casts" :key="item.id">{{ item.name }}/</span>
        </p>
        <p>片长：{{ movie.durations[0] }}</p>
        <p>
          类型：
          <span v-for="item in movie.genres" :key="item.id">{{item}}/</span>
        </p>
        <p>评分：{{movie.rating.average}}</p>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">喜欢</a>
        <a class="mui-card-link">评论</a>
        <a class="mui-card-link" @click="$router.go(-1)">查看更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.getMovieInfo();
  },
  methods: {
    getMovieInfo() {
      //   console.log(this.$route.params.moviedata);
      if (!this.$route.params.moviedata) {
        this.$http
          .jsonp(
            "http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=100"
          )
          .then(result => {
            if (result.body == "" || result.body.subjects.length == 0) {
              Toast("获取数据失败");
            } else {
              this.movie = result.body.subjects[this.$route.query.index];
            }
          });
        // console.log(this.$route.query);
        
      }else{
          this.movie = this.$route.params.moviedata;
      }
    }
  }
};
</script>

<style lang="scss" scope>
</style>