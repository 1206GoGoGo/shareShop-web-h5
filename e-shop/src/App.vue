<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{

    }
  },
  beforeCreate:function(){
    
  },
  mounted:function(){
    var isLogined = this.$cookies.get("logged_in")=='1'?true:false;
    this.$store.commit('update_isLogined',{isLogined:isLogined});

  },
  beforeDestroyed:function(){
    
    this.$cookies.remove("logged_in");
  }
}
</script>

<style lang='less'>

head,body{
  height:100%;
  width:100%;
  background-color:@color-gray-background;
 
}
#app {
  //font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
  font-family:   sans-serif,Arial,'Avenir', Helvetica,Verdana,"宋体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
  
  .van-tabs{
        .van-tab{
        margin-left:5px;
        margin-right:20px;
        }
    }


  
}


  
</style>
