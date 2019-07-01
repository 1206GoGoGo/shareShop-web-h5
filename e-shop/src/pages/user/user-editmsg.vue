<template>
    <div class="main-body">
        <div class="header">
            <van-icon class="back-icon" @click="goBack()" name="arrow-left"></van-icon>
        </div>
        <div class="left" >
            <img class="head-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3914950518,3569645197&fm=26&gp=0.jpg" alt=""/>
        </div>

        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg, image/jpg" multiple>
            <van-icon name="photograph" />
        </van-uploader>

        <van-field
            v-model="userData.username"
            label="UserName："
            left-icon="contact"
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-cell-group>
        <van-field
            v-model="userData.name"
            label="Name："
            left-icon="contact"
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-field
            v-model="userData.gender"
            label="Gender："
            left-icon="contact"
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-field
            v-model="userData.email"
            label="Email："
            left-icon="contact"
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-field
            v-model="userData.phoneNumber"
            label="PhoneNumber："
            left-icon="contact"
            label-width='100px'
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-field
            v-model="userData.birthday"
            label="Birthday："
            left-icon="contact"
            label-width='100px'
            input-align="right"
            label-align="left"
            disabled/></van-cell-group>
        <van-button size="large" @click="edit()" class="editbutton">Edit Information</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userData:{},
        }
    },
    methods:{
        init(){
            this.http.get(
                this.api.user.getInfo, 
                '',
                response=>{
                    if(response.data.code==200){
                        this.userData=response.data.data;
                         console.log(this.userData);
                    }
                    else{
                        
                    }
                  
                },
                error=>{

                }
            )

        },
        goBack:function(){
            this.$router.back(1);
        },
        edit(){
            alert("Edit the message")
        },
        onRead(file) {
            console.log(file)   //打印文件的信息
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style lang="less" scoped>
.main-body{
    background:@color-blue;
    .header{
        background:@color-blue;
        height: 50px;
        //border:1px solid;
        .back-icon{
            //display: none;
            text-align: center;
            position: absolute;
            top:15px;
            left:15px;
            font-size:26px;
            font-weight:700;
            color:#000;
            //padding:15px 0 0 15px;
            
            width:36px;
            height:36px;
            line-height:36px;
            text-align: center;
            border-radius: 100%;
            //color:#fff;
            //background-color:@color-gray-transparent-background;
        }
    }
    .left{          
        width:100px;
        //border:1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 33%;
        margin-bottom: 5%;
        .head-img{
            overflow: hidden;
            border-radius: 50%;
            width:100px;
            height:100px;
            text-align:center;
            border:2px solid rgba(255,255,255,.86);
        }
    }
    .editbutton{
        background:@color-blue;
    }
    
}
</style>
