
<template>
    <van-popup v-model="thisVisible"
                position="right">
        
        <van-nav-bar fixed 
                left-arrow
                left-text="back"
                @click-left="goBack">
                
                <van-search slot="title"  placeholder=" Enter the keyword" v-model="searchContent">
                </van-search>
                <van-button class="search-action" 
                                slot="right" 
                                @click="handleSearch" 
                                 plain size="small" type="info">
                                Search
                </van-button>

                <router-view></router-view>
        </van-nav-bar>
        
        <div class="panel-with-nav-bar">
            <search-history ref="searchHistory" @do-search="handleTagClick"></search-history>
            

        </div>


    </van-popup>




</template>

<script>
import SearchHistory from "@/components/home/sub-pages/base-components/search/search-history"

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
        
    },
    components:{
        SearchHistory,
    },
    data:function(){
        return{
            thisVisible:this.visible,
            searchContent:'',
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
        //handle child component search-history's emit event 
        handleTagClick:function(val){
            console.log("clicked search tag value:"+val);
            this.searchContent=val;
            this.handleSearch();
        },
   
        //do search options
        handleSearch:function(){
            if(this.searchContent==''){
                console.log("please input the search value")
                return;
            }
            else{
                var storage=window.localStorage;
                var searchHistoryList=JSON.parse(storage.getItem("search-history")||'[]');
                var searchValueIndex=searchHistoryList.indexOf(this.searchContent);
                if(searchValueIndex===-1){
                    //搜索内容不重复时
                    searchHistoryList.unshift(this.searchContent);
                }
                else{
                    searchHistoryList.splice(searchValueIndex,1);
                    searchHistoryList.unshift(this.searchContent);
                }
                
                var searchHistoryListStr=JSON.stringify(searchHistoryList);
                storage.setItem("search-history",searchHistoryListStr);
                
                this.doSearch();
                this.updateSearchHistoryPal();
            }
        },

        //update component search-history state
        updateSearchHistoryPal:function(){
            //console.log(this.$children[0]);
            this.$refs.searchHistory.updateList();
        },

        //search options
        doSearch:function(){



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
