<template>
    <van-popup class="product-sku" position="bottom" v-model="visibility.page">
        <div class="head">
            <div class="thumb">
                <img src="" alt="">
            </div>
            <div class="info">
                <div class="title">Fashion hat</div>
                <div class="price">$1</div>
                <div class="stock">stock: 999</div>
            </div>
            <div class="close-button">
                <van-icon name="close" @click="hideSkuPage"></van-icon>
            </div>
        </div>

        <div class="body">
            <panel-with-title title="color">
                <div slot="main" class=""></div>
            </panel-with-title>
        </div>

    </van-popup>
</template>

<script>
import panelWithTitle from '@/components/public/panel-with-title';

export default {

    props:{
        value:{
            type:Boolean,
            default:false,
        },
       
    },
    components:{
        panelWithTitle,
    },
    data:function(){
        return{
            visibility:{
                page:this.value,
            }
        }
    },
    watch:{
        value:function(val){
            this.visibility.page=val;
        },
        'visibility.page':function(val){
            this.$emit("input",val);
        }
    },
    methods:{
        hideSkuPage:function(){
            this.visibility.page=false;
        }
    }

}
</script>

<style lang="less" scoped>
.product-sku{
    height:85%;
    width:100%;
    overflow:visible;
    .head{
        
        height:80px;
        display: flex;
        //border-bottom:1px dashed @color-lightgray-border;
        .thumb{
            z-index:2008;
            margin-top:-20px;
            width:100px;
            height:100px;
            //border:1px solid red;
            background-color:lightgray;
        }

        .info{
            display: flex;
            flex-direction: column;
            margin-left:8px;
            flex-grow: 1;
            text-align: left;
            .title{
                
            }
            .price{
                 padding-top:4px;
                color:@color-red-font;
            }
            .stock{
                padding-top:4px;
                font-size:14px;
                color:@color-gray-font;
                
            }
        }
        .close-button{
            width:30px;
            font-size:20px;
            margin-top:10px;
            margin-right:5px;
            align-self: top;

        }
    }

    .body{
        padding-top:10px;
    }



}
</style>
