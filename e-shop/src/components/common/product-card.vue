<template>
    <div class="product-card g-white-card">
        <div class="top">
            <selected-panel @selected-change="handleShopSelected" v-model="productsCard.isSelected">
                <div class="store-title" slot="right">
                    <van-icon name="shop-o"></van-icon>
                    <span class="store-name">{{productsCard.storeName}}</span>
                </div>
            </selected-panel>
        </div>

        <div class="main">
            
            <product-card-swipe slot="right" :deep="deep"
                @products-item-selected-change="handleItemChange"
                @delete-product="handleProductDelete"
                v-for="(item,index) in productsCard.goodsList"
                :key="item.productId" v-model="productsCard.goodsList[index]">
            </product-card-swipe>
          
            


        </div>

        <!-- <div class="top">
            <div class="left">
                <van-checkbox v-model="shop">
                </van-checkbox>

                <div class="shop-name">
                    <van-icon name="shop-o"></van-icon>
                    <span class="store-name">
                       {{productsCard.storeName}} 
                    </span> 
                </div>
            </div>
        </div>

        <div class="main">
            <van-swipe-cell :right-width="65" :left-width="0" v-for="(item,index) in productsCard.goodsList" :key="index">
                <span slot="left" class="swipe-cell-button">选择</span>
                <div class="goods-item-detail">
                    <van-checkbox v-model="item.isSelected"></van-checkbox>
                    <img :src="item.thumb" class="thumb" alt="">
                    <div class="right-info">
                        <div class="title">{{item.name}}</div>
                        <div class="sku">{{item.sku.name}}</div>
                    </div>
                </div>
                <span slot="right" class="swipe-cell-button">删除</span>

            </van-swipe-cell>




        </div> -->

        <div >

        </div>



    </div>    
</template>

<script>
import selectedPanel from '@/components/common/selected-panel';
import productCardSwipe from '@/components/common/product-card-swipe';


export default {
    
    props:{
        value:{
            type:Object,
            default:{},
        },
        deep:{
            type:Boolean,
            default:false,
        }
    },
    components:{
        selectedPanel,
        productCardSwipe,
    },
    data:function(){
        return{
            shop:false,
            productsCard:this.value,

        }
    },
    computed:{
        

    },
    watch:{
        productsCard:function(val){
            this.$emit("input",val);
        },
        'productsCard.isSelected':function(val){
            this.$emit("selected-shop");
        }
    },

    methods:{
       

        handleShopSelected(val){
            
            for(var i= 0 ; i < this.productsCard.goodsList.length ; i++)
            {
                var tep={};
               // tep=JSON.parse(JSON.stringify(this.productsCard.goodsList[i]));
                //console.log(tep);
                //tep.isSelected=val;
                this.productsCard.goodsList[i].isSelected=val;
                tep=this.productsCard.goodsList[i];
                this.$set(this.productsCard.goodsList,i,tep);

            }

            
            
        },
        handleProductDelete:function(val){

            for(var i=0 ;i<this.productsCard.goodsList.length;i++){
                var tepItem=this.productsCard.goodsList[i];
                if(val.productId==tepItem.productId&&val.skuId==tepItem.sku.id){
                    this.productsCard.goodsList.splice(i,1);

                }

            }
            


            this.$emit("delete-product",val);
        },
        handleItemChange:function(){
            
            var tep=true;

             for(var i= 0 ; i < this.productsCard.goodsList.length ; i++){
                 tep=tep&&this.productsCard.goodsList[i].isSelected;

             }
            this.productsCard.isSelected=tep;

        }

    }
}
</script>

<style lang="less" scoped>
    .product-card{
        box-sizing: border-box;
        margin-bottom:15px;

        padding-top:10px;
        min-height:170px;
        text-align: left;

        .top{
            height:30px;
            line-height:30px;
            .store-title{
                 height:100%;
                 padding-left:10px;
                 position:relative;
                .van-icon{
                    position: absolute;
                    top:50%;
                    margin-top:-9px;
                    font-size:18px;
                    color:@color-gray-font;
                }
                .store-name{
                    margin-left:25px;
                    font-size:14px;
                }

            }

        }

        .main{
            margin-top:5px;
        }




        // /deep/ .van-checkbox{
        //     margin-right:15px;
        //     display: inline-block;
        //     width:20px;
        //     .van-icon{
        //     border-color:@color-darkgray-border;
        //     }
        //     .van-checkbox__label{
        //         margin-left:15px;
              
        //     }
        // }


        // .top{
        //     position: relative;
        //     height:150px;
        //     box-sizing:border-box;
        //     padding-left:10px;
           

        //     .left{
        //         text-align: left;
        //         line-height: 25px;
        //         vertical-align: middle;
        //         .van-checkbox{
                   
                  
        //         }
               

        //         .shop-name{
        //             display: inline-block;
                   
                   
        //             .van-icon{
        //                 font-size:18px;
        //                 color:@color-gray-font;
        //                 margin-top:2.5px;
        //             }

        //             .store-name{
        //                 font-size:18px;
        //                 margin-left:5px;
        //                 vertical-align:top;
        //             }
        //         }

        //     }
        // }


        // .main{
        //     min-height:120px;
        //     margin-top:15px;

        //     .swipe-cell-button{
        //         display: inline-block;
        //         background-color:@color-red-background;
        //         width:65px;
        //         height:120px;
        //         line-height:120px;
        //         color:#fff;
        //         text-align: center;
        //     }

           

        //     .goods-item-detail{
        //         height:120px;
        //         line-height: 120px;
        //         margin-top:5px;
        //         padding-left:10px;
        //         padding-right:10px;
                

        //         .thumb{
                   
        //             height:100px;
        //             width:100px;
        //         }

        //         .right-info{
        //             line-height: 1;
        //             height:100px;
        //             display: inline-block;
        //             padding-left:5px;
        //             //border:1px solid red;

        //             .title{
        //                 font-size:16px;
        //                 max-height:35px;
        //                 overflow: hidden;
        //             }
        //             .sku{
        //                 margin-top:5px;
        //                 color:@color-gray-font;
        //                 font-size:14px;
        //             }
        //         }

        //     }
        // }
        // .top:after{
        //         content:"";
        //         position:absolute;
        //         bottom: -8px;
        //         left:5%;
        //         width:90%;
        //         border-top:1px solid @color-lightgray-border;
        //     }
    }
</style>
