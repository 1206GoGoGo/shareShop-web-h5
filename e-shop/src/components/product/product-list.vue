
<template>
    <div class="product-list  g-white-card">
        <sort-menu v-if="showSort"></sort-menu>
        <div>
            <product-item v-for="(item,index) in productList" :key="index" :productData="item"></product-item>
        </div>
       
        
    </div>
</template>

<script>
import ProductItem from '@/components/product/product-item'
import SortMenu from '@/components/product/sort-menu'

export default {
    props:{
        showSort:{
            type:Boolean,
            default:true,
        }
    },
    components:{
        ProductItem,
        SortMenu,
    },

    data:function(){
        return{
             productList:[],   
        }
    },
    mounted:function(){
        this.init();


    },
    methods:{
        init:function(){
            var _this=this;

            this.axios({
                type:"get",
                url:"pro/product/getList"
            }).then(function(rep){
                console.log(rep);
                _this.productList=rep.data.data;
            }).catch(function(e){
                console.log(e);
            })

        }
    }    

}

</script>

<style lang="less" scoped>
    .product-list{
        margin-top:20px;
        padding-top:0px;
    }

</style>
