// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'
import api from './api/index'
import store from '../src/store/index'

const router = VueRouter()
Vue.prototype.$api = api;
Vue.config.productionTip = false

//正常先拿本地token的去校验
const localtoken = localStorage.getItem('token')
if(localtoken){
  store.commit('loginModules/setToken',localtoken)
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
