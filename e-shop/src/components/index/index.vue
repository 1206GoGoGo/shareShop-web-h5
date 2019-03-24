<template>
    <div>
        <div class="panel-with-bottom-nav">
            <router-view></router-view>
        </div>
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
    mounted:function(){
        var path=this.$route.path;
        //随着路由的变化更新tab状态
        this.adjustTabStatusWithPath(path);

    },
    methods:{

        adjustTabStatusWithPath:function(val){
            switch(val){
                case '/home':this.currentTab=0;break;
                case '/cart':this.currentTab=1;break;
                case '/mine':this.currentTab=2;break;
                default:;
            }
        }

       
    },
    watch:{
        '$route.path':function(val){
            //随着路由的变化更新tab状态
           this.adjustTabStatusWithPath(val);
           
        }
    },
    



}
</script>
<style lang="less" scoped>
    .router-view{
        padding-bottom:50px;
    }



</style>
