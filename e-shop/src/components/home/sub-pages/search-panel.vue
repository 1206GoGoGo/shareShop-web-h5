
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

               
        </van-nav-bar>
        
        <div class="panel-with-nav-bar">
            <search-history v-show="!onSearch" ref="searchHistory" @do-search="handleTagClick"></search-history>
            <product-list v-show="onSearch" ></product-list>
        </div>


    </van-popup>




</template>

<script>
import SearchHistory from "@/components/home/sub-pages/base-components/search/search-history"
import ProductList from '@/components/product/product-list'
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
        ProductList,
    },
    data:function(){
        return{
            thisVisible:this.visible,
            searchContent:'',
            onSearch:false,
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

            //reset all the status of this component when you close the search panel
           this.reset();

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


            this.onSearch=true;
        },
        //when user close the popover,reset all the status of this component
        reset:function(){
            this.searchContent='';
            this.onSearch=false;
        }
    }
    
}
</script>

<style lang="less" scoped>

    .van-nav-bar__left{
        color:@color-gray-font;
        .van-icon{
            color:inherit;
            font-weight:700;
        }
        .van-nav-bar__text{
            color:inherit;
        }

    }


    .van-nav-bar__title{
        margin-left:20%;
        max-width: 65%;
        height:46px;
        
        .van-search{
            position:relative;
            top:23px;
            margin-top:-17px;
            padding:0px;
           
           /deep/ .van-icon{
               color:@color-gray-font;
           }
           
        }
    }

    .van-nav-bar__right{
        right:5px;
        .search-action{
            font-size: 14px;
            padding:0 0px;
            min-width: 55px;
            border:0px;
             color:@color-gray-font;
        }
    }
</style>
