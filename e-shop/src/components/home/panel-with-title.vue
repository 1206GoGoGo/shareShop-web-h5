<template>
    <div class="panel-with-title">
        <div class="title">{{title}}</div>
        <div class="main">
            <slot name="main"></slot>
        </div>
    </div>


</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'title',
        }
    },
    data:function(){
        return{}
    }
}
</script>

<style lang="less" scoped>
.panel-with-title{
    margin-top:10px;  
    .title{
        font-size:16px;
        font-weight: bold;
        text-align: left;
        padding-left:10px;    
    }
    .main{
        min-height:50px;
    }
}
</style>
