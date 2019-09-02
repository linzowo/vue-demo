<template>
  <div>
    <!-- 内容展示区 -->
    <div class="info-title-container">
      <p class="info-title">
        {{photoinfo.title}}
        {{photoinfo.subtitle}}
      </p>
      <p class="info-subtitle">
        <span>上映时间：{{ photoinfo.pubdate }}</span>
        <span>评分：{{ photoinfo.rating }}</span>
      </p>
    </div>
    <hr />
    <div class="info-title-content">
      <!-- 缩略图展示区 -->
      <div class="thumb">
        <vue-preview :slides="thumbList"></vue-preview>
      </div>

      <!-- 文字展示区 -->
      <p>导演：{{ photoinfo.directors }}</p>
      <p>
        演员：
        <span v-for="item in photoinfo.casts" :key="item.id">{{ item.name }}/</span>
      </p>
      <p>片长：{{ photoinfo.durations }}</p>
      <p>
        类型：
        <span v-for="item in photoinfo.genres" :key="item.id">{{item}}/</span>
      </p>
    </div>

    <!-- 评论区 -->
    <comment></comment>
  </div>
</template>

<script>
// 引入报错对象
import Toast from "mint-ui";

// 引入评论组件
import comment from "../subcompoents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.query.id,
      photoinfo: {},
      thumbList: []
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .jsonp(
          "http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10"
        )
        .then(result => {
          if (result.body.length == 0) {
            Toast("没有获取到数据");
          } else {
            let photoInfoObj = result.body.subjects[this.id];
            this.photoinfo = {
              title: photoInfoObj.title,
              subtitle: photoInfoObj.original_title,
              directors: photoInfoObj.directors[0].name,
              casts: photoInfoObj.casts,
              durations: photoInfoObj.durations[0],
              genres: photoInfoObj.genres,
              rating: photoInfoObj.rating.average,
              pubdate: photoInfoObj.mainland_pubdate
            };
            // 因为每个电影只有一张图片，所以只展示一张图片，不做遍历
            this.thumbList = [
              {
                src: photoInfoObj.images.large,
                msrc: photoInfoObj.images.small,
                alt: this.photoinfo.title,
                title: this.photoinfo.title,
                w: 540,
                h: 770
              }
            ];
          }
        })
        .catch(err => {
          Toast("没有获取到数据");
        });
    }
  },
  components: {
    comment: comment
  }
};
</script>

<style lang="scss" scope>
.info-title-container {
  .info-title {
    color: #289bf3;
    text-align: center;
    font-size: 16px;
    line-height: 35px;
    padding: 10px 0;
    margin: 0;
  }
  .info-subtitle {
    padding: 0 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
.info-title-content {
  p {
    font-size: 14px;
    color: #000;
  }
  .thumb{
    margin: 5px;
    img{
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>