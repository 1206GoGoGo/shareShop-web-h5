import Vue from 'vue'
import Router from 'vue-router'

const index=()=>import('@/components/index/index');
const home=()=>import('@/components/home/home-page');
const cart=()=>import('@/components/cart/cart');
const confirmOrder=()=>import('@/components/cart/confirm-order')
const mine=()=>import('@/components/personal-center/personal-center-index');

const search=()=>import('@/components/home/sub-pages/search-panel');
const login=()=>import('@/components/index/login');
const register=()=>import('@/components/index/register');
const product=()=>import('@/components/product/product-page');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:index,
      redirect:'home',
      children:[
        {
          path:'home',
          component:home,
        },
        {
          path:'cart',
          name:'cart',
          component:cart,
          meta:{
            requiredAuth:true,
          }
        },
        {
          path:'mine',
          name:'mine',
          component:mine,
          meta:{
            requiredAuth:true,
          }
          
        }
      ]
    },
    {
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
    }
  ]
})
