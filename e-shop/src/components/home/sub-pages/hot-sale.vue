<template>
    <div class="hot-sale">
        <div class="product-list">
            <shop-card ></shop-card>
            <shop-card :topFlag="true"></shop-card>
            <shop-card ></shop-card>
        </div>
        
        <div class="view-more">
            <span class="text">View More</span> 
            <van-icon name="arrow"></van-icon>
        </div>
    </div>    
</template>

<script>
import shopCard from '@/components/home/base-components/shop-card'

export default {
    components:{
        shopCard,
    },
    data:function(){
        return{
            productList:{},
        }
    }
}
</script>
<style lang="less" scoped>
    .hot-sale{
        margin-top:10px;
        .product-list{
            display: flex;
            justify-content:space-around;
            /deep/.shop-card{
                width:28%;
            }
        }

        .view-more{
            margin-top:10px;
            .text{
                text-decoration: underline;
                font-size:14px;
                color:@color-gray-font;
            }
            .van-icon{
                color:@color-gray-font;
                font-size:18px;
                vertical-align: bottom;
               
            }
        }
    }
</style>
