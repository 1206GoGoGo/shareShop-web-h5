<template>
    <div>
        <button v-bind:class="{container2:flag,container1:!flag}" @click="clickOrNot(tag)">{{tag}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false,
            sel:[],     //不应该写这里，这是一个按钮！两个按钮的话会有两个sel，我们要的是总共就一个sel
        }
    },
    props:['tag'],
    methods:{
        clickOrNot(val){
            this.flag=!this.flag;
            //console.log(this.flag);
            //alert(val);
            if(this.flag==true){
                this.sel.push(val);

            }
            console.log(this.sel);

            
        }
    }
}
</script>

<style lang="less" scoped>
.container1 {
	background-color: white;
    border-radius: 4px;
	text-align: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right:10px;
    margin-top:10px;
    float: left;
}
.container2 {
	background-color: red;
    border-radius: 4px;
	text-align: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right:10px;
    margin-top:10px;
    float: left;
}

</style>


