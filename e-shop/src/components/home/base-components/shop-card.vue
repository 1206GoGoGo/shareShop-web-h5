<template>
    <div class="shop-card g-white-card g-card-shadow-gray">
        <div class="img">
            <img src="http://112.74.165.55/scarf/212.jpg" alt="">
        </div>
        <div :class="'title '+ ( top?'top':'')">
            peaked hat1
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        shopData:{
            type:Object,
            default:()=>{
                return {}
            },
        },
        topFlag:{
            type:Boolean,
            default:false,
        }
    },
    data:function(){
        return{
            top:this.topFlag,
        }
    },
    watch:{
        topFlag:function(val){
            this.top=val;
        }
    }
}
</script>

<style lang="less" scoped>
    .shop-card{
        display: inline-block;
        height:144px;
        max-width:120px;
        padding-top:10px;
        border-radius:8px;
        z-index:0;
        overflow: hidden;
        .img{
            position: relative;
           height:110px;
           background-color:#fff;
            border-bottom-left-radius: 20px;
           border-bottom-right-radius: 20px;
           z-index:1;
            img{
                margin:0 auto;
                margin-top:10px;
                height:90px;
                width:90px;
                 

            }
        }
        .title{
            position: relative;
            z-index:0;
            margin-top:-15px;
            padding-top:15px;
            height:35px;
            font-size:14px;
            color:#fff;
            background-color:@color-coral-background;
        }
        .top{
             background-color:@color-red-background;
        }
    }
</style>
