<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
  
}
.van-tabs{
        .van-tab{
          margin-left:5px;
        margin-right:20px;
        }
    }
.panel-with-nav-bar{
    margin-top:46px;
    height:100%-46px;
}
  
</style>
