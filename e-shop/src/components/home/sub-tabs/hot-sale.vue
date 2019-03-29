
<template>
    <div class="hot-sale">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(swipItem, index) in headSwipeList" :key="index">
                <img :src="swipItem.img" />
            </van-swipe-item>
        </van-swipe>
        
        <product-list :show-sort="false"></product-list>

    </div>

</template>
<script>

import ProductList from "@/components/product/product-list";
//热卖组件
export default {
    components:{
        ProductList,
    },
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
.hot-sale{
    background-color:@color-gray-background;
}
</style>
