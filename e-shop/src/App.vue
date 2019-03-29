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

.panel-with-nav-bar{
    margin-top:@panel-with-nav-bar-mgt;
   
   
}
  
}


  
</style>
