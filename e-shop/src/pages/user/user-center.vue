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
                    <span class="label" @click="edit()">Detail</span>
                    <van-icon name="arrow"/>
                </div>
            </div>

            <div class="sum-panel">
                <div @click="getfavorites()"><num-box :num="user.collectionNum" label="favorites"/></div>
                <div @click=""><num-box :num="user.couponNum" label="coupons"/> </div>
            </div>

        </div>
        <div class="main-menu-panel">
            <div class="float-card g-white-card">
                <van-cell value="All" icon="shop-o" is-link>
                    <template slot="title">
                        <span class="custom-text">Orders</span>
                    </template>
                </van-cell>
                <div class="order">
                    <van-goods-action-mini-btn
                        icon="credit-pay"
                        text="待付款"/>
                </div>
                <div class="order">
                    <van-goods-action-mini-btn
                        icon="upgrade"
                        text="待发货"
                        info="3"/>
                </div>
                <div class="order">
                    <van-goods-action-mini-btn
                        icon="logistics"
                        text="待收货"/>
                </div>
                <div class="order">
                    <van-goods-action-mini-btn
                        icon="comment-o"
                        text="评价"/>
                </div>
                <div class="order">
                    <van-goods-action-mini-btn
                        icon="after-sale"
                        text="退款/售后"/>
                </div>
                
            </div>
            <div class="float-card-util g-white-card">
                <div class="util">
                    <van-goods-action-mini-btn
                        icon="orders-o"
                        text="我的账单"/>
                </div>
                <div class="util">
                    <van-goods-action-mini-btn
                        icon="diamond-o"
                        text="地址管理" @click="addressManager"/>
                </div>
                <div class="util">
                    <van-goods-action-mini-btn
                        icon="coupon-o"
                        text="领券中心"/>
                </div>
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
        edit(){
            //console.log("edit user message");
            this.$router.push({name:'editmsg'});
        },
        getfavorites(){
            //console.log("favorites");
            this.$router.push({name:'getfavorites'});
        },
        addressManager(){
            //console.log("addressManager");
            this.$router.push({name:'addressManager'});
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
                width:50px;
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
                margin-left: 20px;

                color:#fff;
            }

        }
    }
    .main-menu-panel{
        .float-card{
            width:@normal-width;
            height:110px;
            margin:0 auto;
            margin-top:10px;
            border-radius:@card-radius;
            .g-card-shadow();
            &:first-child{
                margin-top:-30px;
            }
            .order{
                float:left;
                //border: 1px solid;
                width:20%;
                height:50%;
                margin-top: 5px;
            }
        
        }
        
        .float-card-util{
            width:@normal-width;
            height:70px;
            margin:0 auto;
            margin-top:10px;
            border-radius:@card-radius;
            .util{
                float:left;
                //border: 1px solid;
                width:33%;
                height:100%;
                margin-top: 5px;
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
