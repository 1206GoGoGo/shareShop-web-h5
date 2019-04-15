<template>
    <van-swipe-cell :right-width="60">
        <selected-panel class="selected-panel" 
                v-model="productData.isSelected" :deep="deep"
                @selected-change="handleSelectedChange">
            <product-card-one slot="right" class="product-card-one" v-model="productData"></product-card-one>
        </selected-panel>
        <van-button slot="right" type="danger" @click="deleteThisOne(productData.productId,productData.sku.id)">
            delete
        </van-button>
    </van-swipe-cell>

</template>

<script>
import productCardOne from '@/components/common/product-card-one';
import selectedPanel from '@/components/common/selected-panel';

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
        productCardOne,
        selectedPanel,  
    },
    data:function(){
        return{
            productData:this.value,
        }
    },
    watch:{
        productData:function(val){
            
            this.$emit("input",val);
        }
    },
   methods:{
       handleSelectedChange:function(){
            this.$emit("products-item-selected-change");
       },
       deleteThisOne:function(productId,skuId){
           console.log({
               productId:productId,
               skuId:skuId,
           });
           this.$emit("delete-product",{
               productId:productId,
               skuId:skuId,
           })
       }
   }

}
</script>

<style lang="less" scoped>
.van-swipe-cell{
    /deep/ .selected-panel{

         .product-card-one{
            padding-left:10px;
        }

    }
    
    .van-button{
        padding:0;
        height:100%;
        width:60px;
        font-size:16px;

    }
}

</style>
