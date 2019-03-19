<template>
   <div class="category-card">
       <div class="category-img">
           <img :src="categoryItemData.categoryThumb">
       </div>
        <p class="category-desc">{{categoryItemData.categoryName}}</p>

   </div>


</template>

<script>
export default {
    props:{
        categoryItemData:{
            type:Object,
            required:true,
        }
    },

    data:function(){
        return{

        }
    }
    
}
</script>

<style lang="less" scoped>
    .category-card{
        margin:5px auto;
        width:100%;
        .category-img{
            width: 76%;
            height: 100%;
            margin:0 auto;
            overflow: hidden;
            background:url(@placeholder-img-base64)center no-repeat;
            background-size:100%;
            img{
                width:100%;
               
               
            }
        };
        .category-desc{
                line-height: 23px;
                height: 23px;
                padding: 4px 0;
                margin:0;
                font-size: 14px;
                color: #5D5D5D;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
        }



    }


</style>
