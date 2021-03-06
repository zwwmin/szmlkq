import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {//要设置的全局访问的state对象
    showFooter: true,
    changableNum: 1
    //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
        return state.showFooter
    },
    getChangedNum(state) {  //方法名随意,主要是用来承载变化的changableNum的值
        return state.changebleNum
    }
};
const store = new Vuex.Store({ 
    state:state,
    getters:getters
});

store.registerModule('vux', { // 名字自己定义
    state: {
      isLoading: false
    },
    mutations: {
      updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
      }
    }
  })
export default store;