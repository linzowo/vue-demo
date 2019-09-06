<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="goodsNum" @change="sendNumToVuex"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return{

    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    sendNumToVuex(){
      let newVal = mui(".mui-numbox").numbox().getValue()
      this.$store.commit('changeGoodsCount',{id:this.goodsId,newCount:newVal})
    }
  },
  props:['goodsNum','goodsId']
};
</script>

<style lang="scss" scope>
</style>