<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="defaultNum" @change="sendNumTofa" />
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
    sendNumTofa(){
      let newVal = mui(".mui-numbox").numbox().getValue()
      this.$emit('get-num',newVal)
    }
  },
  props: ['defaultNum','maxNum'],
  watch: {
    'maxNum':function(newVal,oldVal){
      this.maxNum = newVal;
    }
  },
};
</script>

<style lang="scss" scope>
</style>