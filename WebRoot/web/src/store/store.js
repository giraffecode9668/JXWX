import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin : false,
  name : 'xm',
};

const mutations = {
  beLogined(){
    state.isLogin = true;
  },
  outLogin(){
    state.isLogin = false;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
})

export default store;


