import Vue from 'vue'
import Router from 'vue-router'

const index=()=>import('@/pages/index');
const home=()=>import('@/pages/home/home');
const cart=()=>import('@/pages/cart/cart');
const confirmOrder=()=>import('@/pages/cart/confirm-order')
const mine=()=>import('@/pages/user/user-center');
const editmsg=()=>import('@/pages/user/user-editmsg');
const getfavorites=()=>import('@/pages/user/user-getfavorites');
const addressManager=()=>import('@/pages/user/user-address');
const addAddress=()=>import('@/pages/user/user-add-address');


const hotsale=()=>import('@/pages/home/hot-sale');
const search=()=>import('@/pages/search/search');
const login=()=>import('@/pages/user/login');
const register=()=>import('@/pages/user/register');
const product=()=>import('@/pages/product/product');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:index,
      redirect:'home',
      children:[
        {
          name:'home',
          path:'/home',
          component:home,
        },
        {
          path:'/cart',
          name:'cart',
          component:cart,
          meta:{
            requiredAuth:true,
          }
        },
        {
          path:'/mine',
          name:'mine',
          component:mine,
          meta:{
            requiredAuth:true,
          }
          
        }
      ]
    },
    {
      name:'hotsale',
      path:'/hotsale',
      component:hotsale,
    },
    {
      name:'login',
      path:'/login',
      component:login,
    },
    {
      path:'/product/:id',
      name:'product',
      component:product,
    },
    {
      path:'/search',
      name:'search',
      component:search,
    },
    {
      path:'/register',
      component:register,
    },
    {
      path:'/confirmOrder',
      component:confirmOrder,
      meta:{
        requiredAuth:true,
      }
    },
    {
      path:'/editmsg',
      name:'editmsg',
      component:editmsg,
      meta:{
        requiredAuth:true,
      }
    },
    {
      path:'/getfavorites',
      name:'getfavorites',
      component:getfavorites,
      meta:{
        requiredAuth:true,
      }
    },
    {
      path:'/addressManager',
      name:'addressManager',
      component:addressManager,
      meta:{
        requiredAuth:true,
      }
    },
    {
      path:'/addAddress',
      name:'addAddress',
      component:addAddress,
      meta:{
        requiredAuth:true,
      }
    },
    
  ]
})
