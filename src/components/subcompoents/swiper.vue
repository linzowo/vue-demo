<template>
  <div>
    <!-- 轮播图组件 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgList" :key="item.img">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  props: {
    imgList:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
};
</script>

<style lang="scss" scope>
</style>