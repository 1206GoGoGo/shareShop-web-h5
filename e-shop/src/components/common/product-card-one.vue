<template>
    
        <div class="product-info">
            <img  class="thumb" :src="productData.thumb">
            <div class="right-info-detail">
                <div class="product-name">{{productData.name}}</div>
                <div class="product-sku">{{productData.sku.name}}</div>
                <div class="bot-panel">
                    <div class="price">$ {{parseFloat(productData.price).toFixed(2)}}</div>
                    <div class="stepper">
                        <van-stepper v-model="productData.num" integer/>
                    </div>
                </div>
            </div>
        </div>
    


</template>

<script>
export default {
    props:{
        value:{
            type:Object,
            default:{},
        }
    },
    data:function(){
        return {
            productData:this.value,
        }
    },
    watch:{
        productData:function(val){
            this.$emit("input",val)
        }
    }

}
</script>

<style lang="less" scoped>

    .product-info{
        display: flex;
        height:120px;
        align-items: center;
        .thumb{
            
            width:30%;
            max-width:100px;
            min-width:100px;
            max-height:100px;    
        }
        .right-info-detail{
            box-sizing: border-box;
            padding:10px;
            flex-grow:1;

            display: flex;
            flex-direction: column;
            height:100%;
            .product-name{
                font-size:14px;
                overflow: hidden;
                line-clamp: 2;
            }
            .product-sku{
                flex-grow: 1;
                color:@color-gray-font;
                font-size:12px;
            }
            .bot-panel{
                width:100%;
                display: flex;
                align-items: center;
                .price{
                   flex-grow: 1;
                    //border:1px solid red;
                    color:@color-red-font;
                    font-size:14px;
                }
                .stepper{
                   width:70px;
                   /deep/ .van-stepper{
                        input,button{
                            width:20px;
                            height:20px;
                        }
                        input{
                            width:22px;
                        }
                   }

                }
            }
        }



    }


</style>
