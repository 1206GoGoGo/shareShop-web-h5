import Vue from 'vue'
import Router from 'vue-router'

const index=()=>import('@/components/index/index');
const home=()=>import('@/components/home/home-page');
const cart=()=>import('@/components/cart/cart');
const mine=()=>import('@/components/personal-center/personal-center-index');

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
        },
        {
          path:'mine',
          component:mine,
        }
      ]
    }
  ]
})
