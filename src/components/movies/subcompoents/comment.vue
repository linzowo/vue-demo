<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入你要bb的内容，但是注意最多只能bb120个字！" maxlength="120"></textarea>

    <mt-button type="primary" size="large">添加评论</mt-button>
    <!-- 评论展示区 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentsList" :key="index">
        <div class="cmt-title">第{{item[0]}}楼 用户：{{item[1]}} 发表时间：{{item[3] | dateFormat}}</div>
        <div class="cmt-body">{{item[4]}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        commentsList: []
    };
  },
  created(){
      this.getComment()
  },
  methods: {
      getComment(){
          this.$http
          .get('http://myvueapi.io/vue-demo-comments.php')
          .then(result => {
            //   console.log(result.body);
              this.commentsList = result.body
          })
      }
  }
};
</script>

<style lang="scss" scope>
.cmt-container {
  h3 {
    font-size: 16px;
  }
  textarea {
    height: 85px;
    margin: 0;
    font-size: 14px;
  }
  .cmt-list {
    .cmt-item {
      font-size: 14px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        text-indent: 2em;
        line-height: 35px;
      }
    }
  }
}
</style>