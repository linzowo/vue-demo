<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in imgList" :key="item.img">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: []
        }
    },
    created(){
        this.getlunbotu();
    },
    methods: {
        getlunbotu(){
            this.$http.get('http://myvueapi.io/vue-demo-lunbotu-img.php').then(result => {
                // console.log(result.body.imgList);
                this.imgList = result.body.imgList;
            })
        }
    },
}
</script>

<style lang="scss" scope>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item{
    &:nth-child(1){
        background-color: red;
    }
    &:nth-child(2){
        background-color: yellow;
    }
    &:nth-child(3){
        background-color: blue;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>