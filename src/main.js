// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import api from './api' // 导入api接口

import Router from 'vue-router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import text from '../static/js/text.js' // 导入text
import util from '../static/js/util.js' // 导入工具类
// require styles
import 'swiper/dist/css/swiper.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import VueLazyload from 'vue-lazyload'
import {
  Tabs,
  TabPane,
  Autocomplete,
  Icon,
  Rate,
  Input,
  Loading,
  Message,
  icon,
  Upload
} from 'element-ui';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/grzx_dgrztg_png.png',
  // loading: 'dist/loading.gif',
  attempt: 1
})
Vue.use(preview)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(Tabs).use(TabPane).use(Autocomplete).use(Icon).use(Rate).use(Loading).use(icon).use(Upload).use(Input)
Vue.use(Router)
Vue.prototype.$message = Message
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$text = text; // 将api挂载到vue的原型上
Vue.prototype.$util = util; // 将api挂载到vue的原型上

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //如果未匹配到路由
    next('/404'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    store.commit('updateLoadingStatus', {isLoading: true})
    next(); //如果匹配到正确跳转
  }
});

router.afterEach(function () {
  store.commit('updateLoadingStatus', {isLoading: false})
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
