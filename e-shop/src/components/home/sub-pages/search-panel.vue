
<template>
    <van-popup v-model="thisVisible"
                position="right">
        
        <van-nav-bar fixed 
                left-arrow
                left-text="back"
                @click-left="goBack">
                
                <van-search slot="title"  placeholder="请输入搜索关键词" v-model="searchContent">
                </van-search>
                <van-button class="search-action" 
                                slot="right" 
                                @click="onSearch" 
                                 plain size="small" type="info">
                                Search
                </van-button>
        </van-nav-bar>


    </van-popup>




</template>

<script>
export default {
    model:{
        prop:'visible',
        event:'changeStatus'
    },
    props:{
        visible:{
            type:Boolean,
            default:false,
        },
        searchContent:'',
    },
    data:function(){
        return{
            thisVisible:this.visible,
        }
    },
    watch:{
        visible:function(val){
            this.thisVisible=val;
        },
        thisVisible:function(val){
            if(!val){
                this.$emit('changeStatus',val);
            }
        }
    },
    methods:{
        goBack:function(){
           this.thisVisible=false;
        },
        onSearch:function(){

        }
    }
    
}
</script>

<style lang="less" scoped>
    .van-nav-bar__title{
        margin-left:20%;
        max-width: 65%;
        height:46px;
        
        
        .van-search{
            position:relative;
            top:23px;
            margin-top:-17px;
            padding:0px;
           
        }
        
    }

    .van-nav-bar__right{
        right:5px;
        .search-action{
            font-size: 14px;
            padding:0 0px;
            min-width: 55px;
            border:0px;
                
        }
    }
</style>
