<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入你要bb的内容，但是注意最多只能bb120个字！" maxlength="120" v-model="commentContent"></textarea>

    <mt-button type="primary" size="large" @click="postComment">添加评论</mt-button>

    <!-- 评论展示区 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentsList" :key="index">
        <div class="cmt-title">第{{item[0]}}楼 用户：{{item[1]}} 发表时间：{{item[3] | dateFormat}}</div>
        <div class="cmt-body">{{item[4]}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>
  </div>
</template>

<script>
import Toast from 'mint-ui'
export default {
  data() {
    return {
        commentsList: [], // 存放获取到的评论信息的数组
        page: 1, // 查询的是第几页评论 
        commentContent: '', // 用户输入的评论内容
        index: 1, // 新数据的索引值也就是楼数
    };
  },
  created(){
      this.getComments()
  },
  methods: {
      getComments(){
          this.$http
          .get('http://myvueapi.io/vue-demo-comments.php?page='+this.page)
          .then(result => {
            //   console.log(result.body);
              this.commentsList = this.commentsList.concat(result.body)
          })
      },
      getMoreComments(){
          this.page++
          this.getComments()
      },
      postComment(){
        //   用户未输入数据，就弹出提示框
        if(this.commentContent == ''){
            return Toast('你没有输入任何评论')
        }else{
            // 发起请求
            // 这里就不发请求了，进行一次模拟发起请求，假定请求成功
            // 手动拼接一个数据到数组的顶端
            let newComment = JSON.parse(JSON.stringify(this.commentsList[0])) // 使用深拷贝，将第一个对象拷贝出来
            // 改变各个部分的内容==》完成新数据模拟
            newComment[0] = this.index
            this.index++
            newComment[1] = '匿名用户'
            newComment[3] = Date.now()
            newComment[4] = this.commentContent
            this.commentsList.unshift(newComment)
            this.commentContent = ''
        }
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