<template>
    <div class="main">
        <button class="bt" @click="desc()">-</button><input type="text" class="cartnum" size="4" 
        v-model="num"/><button class="bt" @click="incr()">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:1,  //整数类型
        }
    },
    methods:{
        desc(){
            if(this.num == 0 || this.num == 1){
                alert("At least 1");
            }
            else{
                this.num=this.num-1;
            }
        },
        incr(){
            if(this.num == 9999){
                alert("At most 9999");
            }
            else{
                this.num=this.num+1;
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
.main{
    float: left;
    margin-left: 10px;
    .cartnum{
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        margin-top: 10px;
    }
    .bt{
        background-color: white;
        border-radius: 1px;
        text-align: center;
        margin-left: 2px;
        margin-right: 2px;
    }
}

</style>
