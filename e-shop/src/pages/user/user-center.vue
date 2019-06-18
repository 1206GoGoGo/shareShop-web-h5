<template>
    <div class="user-center">
        <div class="header">
            <!-- <div class=""></div> -->
            <div class="simple-info">
                <div class="left head-wrapper" >
                    <img class="head-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3914950518,3569645197&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="center">
                    <div class="name">{{user.username}}</div>
                    <div class="sub-info" v-if="user.userLogin">{{user.userLogin.username}}</div>
                </div>
                <div class="right">
                    <span class="label">edit</span>
                    <van-icon name="arrow"/>
                </div>
            </div>

            <div class="sum-panel">
                <num-box :num="user.collectionNum" label="favorites"/>
                <num-box :num="user.couponNum" label="coupons"/> 
            </div>

        </div>
        <div class="main-menu-panel">
            <div class="float-card g-white-card">

            </div>
            <div class="float-card g-white-card">

            </div>
        </div>

        <van-button class="sign-out-button" 
                    type="info" size="normal" round
                    @click="logOut">
            Sign Out
        </van-button>


        

        
    </div>
</template>
<script>
import numBox from '@/components/public/num-label-box';

export default {
    components:{
        numBox,
    },
    data:function(){
        return{
            user:{},
            coupons:{},
            collect:[],
        }
    },
    beforeMount:function(){
        this.init();

    },

    methods:{
        //用户信息界面初始化操作：1.获取用户信息
        init:function(){
            this.getUserInfo();
            //this.getCouponListOfUser();
            //this.getCollectListOfUser();
        },

        getUserInfo:function(){

            this.http.get(
                this.api.user.getInfo,
                '',
                response=>{
                    if(response.status==200&&response.data.code==200)
                    {
                        //console.log(response.data.data);
                        this.user=response.data.data;

                    }

                },
                error=>{

                }


            )
        },
        // //优惠券数目
        // getCouponListOfUser:function(){
        //     this.http.get(
        //         this.api.coupon.getListOfUser,
        //         {
        //             id:this.$store.state.user.userId,
        //         },
        //         response=>{
        //             if(response.status==200&&response.data.code==200)
        //             {
        //                 //console.log(response.data.data);
        //                 this.coupons=response.data.data;

        //             }
        //         },
        //         error=>{

        //         }
        //     )
        // },
        // //收藏数
        // getCollectListOfUser:function(){
        //     this.http.get(
        //         this.api.collect.getListOfUser,
        //         {
        //             id:this.$store.state.user.userId,
        //         },
        //         response=>{
        //             if(response.status==200&&response.data.code==200)
        //             {
        //                 //console.log(response.data.data);
        //                 this.collect=response.data.data;

        //             }
        //         },
        //         error=>{

        //         }
        //     )
        // },


        //登出
        logOut:function(){
            this.http.get(
                this.api.user.logOut,
                '',
                response=>{
                    if(response.status==200&&response.data.code==200)
                    {
                        //console.log(response.data.data);
                        this.$router.push(
                            {
                                path:'/home',
                            }
                        );

                    }

                },
                error=>{

                }


            )




        }
        


    }



}
</script>
<style lang="less" scoped>

@header-height:180px;
@normal-width:94%;
@card-radius:12px;





.user-center{
    
     
   
    .header{
        background:@color-blue;

        
        height:@header-height;
        box-sizing: border-box;
        padding-top:10px;
        padding-bottom:50px;
        .simple-info{
           
            //padding-left:10px;
            text-align: left;
            color:#fff;
            //border:1px solid #fff;
            width:@normal-width;
            height:80px;
            margin:0 auto;
            display: flex;
            
            .left{
               
                width:60px;
                margin-right:5px;
                //border:1px solid red;
                display: flex;
                align-items: center;
                justify-content: center;
                .head-img{
                    overflow: hidden;
                    border-radius: 50%;
                    width:50px;
                    height:50px;
                    border:2px solid rgba(255,255,255,.86);
                }
            }
            .center{
                display:flex;
                flex-wrap: wrap;
                align-content: center;
                
               
                flex-grow: 1;
                &>div{
                    width:100%;
                }
                .name{
                    font-size:26px;
                    margin-top:-6px;
                    //font-weight:bold;
                }
                .sub-info{
                    font-size:14px;
                    margin-top:5px;
                    opacity:0.8
                }
            }
            
            .right{
                display: flex;
                align-items: center;
                opacity: 0.9;
                width:40px;
                &>*{
                    height:20px;
                    //border:1px solid;
                }
                .label{
                    letter-spacing: 1px;
                    font-size:14px;
                    display: inline-block;
                }
                .van-icon{
                    font-size:16px;
                }
            }

        }

        .sum-panel{
            width:@normal-width;
            margin:0 auto;
            margin-top:3px;
            height:50px;
            display: flex;
            justify-content: flex-start;

            .num-label-box{
                height:100%;
                width:25%;
               
                color:#fff;
            }

        }
    }
    .main-menu-panel{
        .float-card{
            width:@normal-width;
            height:100px;
            margin:0 auto;
            margin-top:10px;
            border-radius:@card-radius;
            .g-card-shadow();
            &:first-child{
                margin-top:-30px;
            }
        
        }

    }

    .sign-out-button{
        width:@normal-width;
        margin:0 auto;
        margin-top:20px;
        font-size:16px;
        letter-spacing: 0.6px;
        border:0px;
        .g-card-shadow();
        .g-blue-gradient();
        


    }
  
  
}
</style>
