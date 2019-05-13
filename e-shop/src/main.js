// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'


import 'babel-polyfill'
import VueCookies from 'vue-cookies'

import global from './assets/js/global'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Locale } from 'vant';
import { Lazyload } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';

import '@/assets/style/common.less';

import http from './request/http.js';
import api from './request/api.js';

Locale.use('en-US', enUS);
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(VueCookies);

Vue.prototype.global=global;

Vue.prototype.http = http;
Vue.prototype.api = api;

Vue.config.productionTip = false;


router.beforeEach((to,from,next)=>{
      if(to.meta.requiredAuth&&!store.state.isLogined){
       
        next({
          path:'/login',
        })
      }
      else{
        next();
      }

})

//mock



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
