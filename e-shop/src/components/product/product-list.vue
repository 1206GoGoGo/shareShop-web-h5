
<template>
    <div class="product-list">
        
        <div>
            <product-item v-for="item in productList" :key="item.productId" :productData="item"></product-item>
        </div>
       
        
    </div>
</template>

<script>
import ProductItem from '@/components/product/product-item'


export default {
    props:{
        showSort:{
            type:Boolean,
            default:true,
        },
        productList:{
            type:Array,
            default:function(){
                return [];
            },
        }
    },
    components:{
        ProductItem,
       
    },

    data:function(){
        return{
            
        }
    },
    mounted:function(){
        this.init();


    },
    methods:{
        init:function(){
          

        }
    }    

}

</script>

<style lang="less" scoped>
    .product-list{
        margin-top:0px;
        padding-top:0px;
    }

</style>
