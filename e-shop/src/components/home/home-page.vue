<template>
    <div class="home background-gray">
        <van-nav-bar fixed title="shareShop">
            <van-icon size="1.5em" color="#282828" name="apps-o" slot="left"  @click="showClassificationPanel"/>
            <van-icon size="1.5em" color="#282828" name="search" slot="right" @click="showSearchPanel"/>
        </van-nav-bar>

        <!--分类检索界面-->
        
            <class-panel v-model="visibility.classification"></class-panel>
            <search-panel v-model="visibility.search"></search-panel>
        

        <div class="panel-with-nav-bar">
            <van-tabs v-model="active" :ellipsis="false" sticky animated swipeable>
                <van-tab title="Hot Sales">
                    <hot-sale></hot-sale>
                </van-tab>
               
                <van-tab title="On Sale">
                    <on-sale></on-sale>
                </van-tab>
                <van-tab title="New Arrivals">
                    <new-arrival></new-arrival>
                </van-tab>
                <van-tab title="Coupons Center">
                    <coupon-center></coupon-center>
                </van-tab>
               
            </van-tabs>
        </div>

    </div>      
</template>

<script>

import hotSale from '@/components/home/sub-tabs/hot-sale';
import onSale from '@/components/home/sub-tabs/on-sale';
import newArrival from '@/components/home/sub-tabs/new-arrival';
import couponCenter from '@/components/home/sub-tabs/coupon-center';

import classPanel from '@/components/home/sub-pages/class-panel';
import searchPanel from '@/components/home/sub-pages/search-panel';

export default {
    components:{
        hotSale,
        onSale,
        newArrival,
        couponCenter,
    //pages
        classPanel,
        searchPanel

    },
    data:function(){
        return{
            active:0,
            visibility:{
                classification:false,
                search:false,
            },   
        }
    },

    methods:{
        showClassificationPanel:function(){
            this.visibility.classification=true;
        },
        showSearchPanel:function(e){
            this.visibility.search=true;
            //console.log('search')
        }

    }
}
</script>

<style lang="less" scoped>
.home{
    background-color:#f5f5f5;

    .van-nav-bar__title{
        font-weight:bold;
        
    }
    .van-popup--left{
        width:90%;
        height: 100%;
    }
    .van-popup--right{
        width:100%;
        height:100%;
    }


    
}

</style>

