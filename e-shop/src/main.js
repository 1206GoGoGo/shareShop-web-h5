// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'



import Vant from 'vant'
import 'vant/lib/index.css'

import { Locale } from 'vant';
import { Lazyload } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';


Locale.use('en-US', enUS);
Vue.use(Vant);
Vue.use(Lazyload);


Vue.prototype.axios = axios;
Vue.config.productionTip = false;


//mock
require('./mock');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
