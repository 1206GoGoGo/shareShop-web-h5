<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="currentTab">
            <van-tabbar-item icon="wap-home" to="/home">Home</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" :info="cart_num" to="/cart">Cart</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/mine">Mine</van-tabbar-item>
        </van-tabbar>

    </div>  
</template>

<script>

export default {

    data:function(){
        return{
            currentTab:0,
            cart_num:0
        }
    },
    methods:{
       
    },
    watch:{
        '$route.path':function(val){
            //随着路由的变化更新tab状态
            switch(val){
                case '/home':this.currentTab=0;break;
                case '/cart':this.currentTab=1;break;
                case '/mine':this.currentTab=2;break;
                default:;
            }
           
        }
    },
    



}
</script>
<style lang="less" scoped>




</style>
