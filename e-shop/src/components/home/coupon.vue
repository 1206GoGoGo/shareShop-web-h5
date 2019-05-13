<template>
    <div class="coupon g-card-shadow-gray">
        <div class="dashed-border">
            <div class="main-info">
                <div class="left-amount">
                   ${{amount}}
                </div>
                <div class="right-desc-text">
                     off
                </div>
            </div>
            <div class="sub-info">
               {{placeholder}}
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        amount:{
            type:Number,
            default:0,
        },
        placeholder:{
            type:String,
            default:''
        }
    },
    data:function(){
        return{
            
        }
    }
}
</script>
<style lang="less" scoped>
    .coupon{
        margin-left:10px;
        border-radius: 10px;
        display: inline-block;
        height:70px;
        width:140px;

        // background: #FDC830;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */





        background: #FC5C7D;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        color:#fff;
        .main-info{
            height:40px;
           
            border-bottom:1.2px dashed #fff;
             font-size:26px;
             
            .left-amount{
                box-sizing: border-box;
                height:100%;
                width:65%;
                padding-right:5px;
                text-align:right;
                float:left;
                font-size:26px;
                font-weight:bold;
            }
            .right-desc-text{
                box-sizing: border-box;
                float:right;
                height:100%;
                width:34%;
                text-align: left;
                line-height:270%;
                font-size:16px;
            }

        }
        .sub-info{
            
            font-size:12px;
            height:30px;
        }

    }

</style>
