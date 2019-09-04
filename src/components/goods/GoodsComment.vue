<template>
    <comment></comment>
</template>

<script>
import comment from "../subcompoents/comment.vue"
    export default {
        data() {
            return{
                id: this.$route.query.id,
            }
        },
        methods: {
            getComments(id){
                // 应该在这里发起获取评论的请求然后根据id获取评论数据，但是因为没有接口就不做这一步了
            }
        },
        components: {
            comment
        }
    }
</script>

<style lang="scss" scope>
    
</style>