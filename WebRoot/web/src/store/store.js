import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const state = {
  isLogin : true,
  userInfo: {
    userName : 'defaultName',
    password : 'defaultPassword',
    avatar: require('../assets/default.jpg'),
  },
};

const mutations = {
  saveUserInfo(state, userInfo){
    state.adminInfo = userInfo;
  },
  beLogined(){
    state.isLogin = true;
  },
  outLogin(){
    state.isLogin = false;
  },
};

const actions = {
  Login({ commit }, userInfo) {

    let params = new URLSearchParams();
    params.append('name', userInfo.name);
    params.append('key', userInfo.key);

    axios.post('/user', {
      user:userInfo.name,
      password:userInfo.key,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    commit("saveUserInfo", userInfo);
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;


