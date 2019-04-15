import Vue from 'vue'
import Router from 'vue-router'

const index=()=>import('@/components/index/index');
const home=()=>import('@/components/home/home-page');
const cart=()=>import('@/components/cart/cart');
const mine=()=>import('@/components/personal-center/personal-center-index');


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
          component:cart,
          meta:{
            requiredAuth:true,
          }
        },
        {
          path:'mine',
          component:mine,
          requiredAuth:true,
        }
      ]
    },
    {
      path:'/login',
      component:login,
    },
    {
      path:'/product',
      component:product,
    },
    {
      path:'/register',
      component:register,
    }
  ]
})
