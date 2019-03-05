<template>
    <van-popup v-model="thisVisible" 
                   position="left">
        <van-nav-bar fixed 
                    title="classification"
                    @click-right="goBack">
                <span slot="right">
                    back
                    <van-icon size="1.3em" name="arrow-left"/>
                </span>
            </van-nav-bar>
           
           <div class="panel-with-nav-bar ">
               详细分类检索菜单
           </div>
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
        }
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
            if(!val)
                this.$emit('changeStatus',val);
        }
    },
    methods:{
        goBack:function(){
            this.thisVisible=false;
        }

    }
    
}
</script>

<style lang="less" scoped>
    .van-nav-bar__right{
        color:#1989fa;
    }
</style>
