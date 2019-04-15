<template>
    <div class="product-page">
        <div class="back-button icon-button" @click="goBack">
            <van-icon name="arrow-left"></van-icon>
        </div>
        <div class="share-button icon-button" @click="share">
            <van-icon name="share"></van-icon>
        </div>
        <van-swipe :autoplay="3000" class="g-white-card">
            <van-swipe-item>
                <img src="https://www.uniqlo.cn/hmall/test/u0000000005573/main/first/1000/1.jpg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://www.uniqlo.cn/hmall/test/u0000000005573/main/other1/1000/2.jpg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://www.uniqlo.cn/hmall/test/u0000000005573/main/other2/1000/3.jpg">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://www.uniqlo.cn/hmall/test/u0000000005573/main/other3/1000/4.jpg">
            </van-swipe-item>
        </van-swipe>

        <div class="product-info g-white-card">
            <div class="title">
                【设计师合作款】女装  双面针织大衣  416550
            </div>
            <div class="description">
                2019Uniqlo U 色彩新美学 摩登新经典
            </div>
            <div class="price">
                <span class="price-code">$</span>
                <span class="price-value">40.00</span>
                <span class="rate">
                    <van-rate v-model="rate" :size="14" color="#000" void-color="#000" />
                </span>
            </div>
            <div class="note">
                支持30天无理由退货
            </div>
        </div>

        <van-cell @click="showProductSku" class="product-selected-bar" title="选择商品规格/数量/配送方式" is-link/>
        
        <van-tabs class="product-detail-info"  v-model="actionfunctionPanel" swipeable sticky>
            <van-tab title="Goods Detail">
            </van-tab>
            <van-tab title="Customer reviews">
            </van-tab>
        </van-tabs>


        <van-goods-action>
            <van-goods-action-mini-btn class="mini-button" icon="shopping-cart-o" text="Cart"/>
            <van-goods-action-big-btn class="add-button"   text="Add to Cart"/>
            <van-goods-action-big-btn class="buy-button" type="danger" text="Buy It Now" />
        </van-goods-action>

    </div>    
</template>

<script>
export default {
    data:function(){
        return{
            rate:2.5,
            actionfunctionPanel:'1'
        }
    },
    methods:{
        //返回
        goBack:function(){
            this.$router.go(-1);
        },
        share:function(){
            console.log("share");
        },
        //展示商品规格
        showProductSku:function(){


        }
    }
}
</script>

<style lang="less" scoped>
@back-button-width:26px;

.product-page{
    position: relative;
    min-height:1000px;
    background-color:@color-gray-background;
    
    //图标按钮
    .icon-button{
        box-sizing: border-box;
        height:@back-button-width;
        width:@back-button-width;
        border-radius: @back-button-width / 2 ;
        //background-color:darkgreen;
        //border:2px solid #000;
        z-index:1;
        font-size:24px;
        color:#000;
        font-weight: bold;
    }
    //返回按钮
    .back-button{
        position:absolute;
        top:15px;
        left:15px;
       
    }
    .share-button{
        position:absolute;
        top:15px;
        right:15px;

    }
    //商品轮播图
    .van-swipe{
        //height:200px;
        width:100%;
       
        padding-bottom:20px;
        //height:auto;
        //line-height: 100%;
        //background-color:@color-blue;
        //border-bottom:1px solid @color-lightgray-border;
       // box-shadow: 0 0px 3px 2px @color-lightgray-border;
        
        .van-swipe-item{
            img{
                width:100%;
            }
            
        }
        /deep/ .van-swipe__indicators{
            bottom:5px;

            .van-swipe__indicator{
                transition: .3s linear all;
                background-color:#000;
                //margin-right:5px;
                width:7px;
                height:7px;

            }
             .van-swipe__indicator--active{
                width:32px;
                border-radius:3.5px;

                
            }
        }
    }
    //商品信息区
    .product-info{
       
        margin-top:0px;
        padding-top:20px;
        padding-left:10px;
        text-align: left;
        .title{
            font-size:16px;
            font-weight: 700;
            
        }
        .description{
            color:@color-gray-font;
            padding-top:5px;
            font-size:14px;
        }
        .price{
            padding-top:20px;
            font-weight: bold;
            .price-code{
                font-size:16px;
            }
            .price-value{
                padding-left:2px;
                font-size:22px;
            }
            .rate{
                float:right;
                padding-top:5px;
                //border:1px solid #000;
                //vertical-align: bottom;
            }
        
        }
        .note{
            margin-top:10px;
            margin-right:10px;
            padding-bottom:10px;
            text-align:right;
            color:@color-gray-font;
            font-size:14px;
        }
        //background:@color-gray-background;
        //min-height:200px;
    }

    //商品规格选择条
    .product-selected-bar{
        margin-top:15px;
        text-align: left;
        color:#000;
        font-weight: 500;
        .van-icon{
            color:#000;
            
        }
    }

    .product-detail-info{
        margin-top:15px;
        color:#000;


    }

    .van-goods-action{
        z-index:120;
        font-weight:500;
        .mini-button{
            color:#000;
           
            .van-icon{
                font-weight: 500;
            }
        }
        
       
    }
}
</style>
