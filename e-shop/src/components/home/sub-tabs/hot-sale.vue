
<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(swipItem, index) in headSwipeList" :key="index">
                <img :src="swipItem.img" />
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<script>
//热卖组件
export default {
    data:function(){
        return{
            headSwipeList:[],
        }
    },
    mounted:function(){
        var _this=this;
        this.axios({
            type:"get",
            url:"pro/info/getList/"
        }).then(function(rep){
            _this.headSwipeList=rep.data.data;
            
        }).catch(function(errow){

        })
    }
}
</script>

<style lang="less" scoped>

</style>
