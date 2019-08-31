<template>
  <div class="AppHeader">
    <el-menu

      :default-active="$route.path"
      class="el-menu-demo"
      router mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color=white
      active-text-color="#95C850">
      <el-menu-item style="padding:0">
        <el-image :src="imgUrl"></el-image>
      </el-menu-item>
      <el-menu-item index="/*" style="margin-left:80px">历史上的今天</el-menu-item>
      <el-menu-item index="/history">看历史</el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank" style="text-decoration: none">我爱我校</a></el-menu-item>
      <div style="justify-content:flex-end; display:flex">
        <el-menu-item>
          <el-input
            placeholder="搜索你感兴趣的"
            prefix-icon="el-icon-search"
            v-model="input">
          </el-input>
        </el-menu-item>
        <div class="changerAlpha" v-show="showLogin" style="justify-content:flex-end; display:flex; width:150px">
          <el-menu-item index="/login" style="padding:0 5px">
            LOG IN
          </el-menu-item>
          <el-menu-item style="padding:0 5px">
            |
          </el-menu-item>
          <el-menu-item style="padding:0 5px; margin-right: 10px">
            SIGN UP
          </el-menu-item>
        </div>
        <div class="changerBeta" v-show="!showLogin" style="justify-content:flex-end; display:flex; width:150px">
          <el-menu-item style="padding:0 5px; margin-right: 10px">
            <img :src="this.$store.state.userInfo.avatar" class="avatar" width="36" height="36">
          </el-menu-item>
          <el-menu-item style="padding:0 5px; margin-right: 10px">
            LOG OUT
          </el-menu-item>
        </div>

      </div>

    </el-menu>
  </div>
</template>

<script>
  import store from '../store/store.js';

  export default {

    data() {
      return {
        showLogin: false,
        activeIndex: '1',
        imgUrl:require('../assets/logo_white.png'),
        input: ''
      };
    },
    store,
    mounted() {
      this.showLogin = !this.$store.state.isLogin


    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      home(){
        this.$router.push({
          path: '',
          name: 'name',
        })
      },
      history(){
        this.$router.push({
          path: 'history',
          name: 'history',
        })
      },

    }
  }
</script>
<style scoped>
  .AppHeader{
    height:40px;
    background-color: #545c64;
  }
  .AppHeader >>> .el-menu{
    width:1024px;
    height: 40px;
    min-width: 1000px;
    -webkit-box-align: center;
    margin: 0 auto;
  }
  .el-menu-demo >>> .el-menu-item{
    background-color: #545c64 !important;
    height: 40px !important;
    line-height: 40px !important;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 40px;
    line-height: 40px;
  }
  .el-menu--horizontal >>> .el-menu-item.is-active{
    border-bottom: 4px solid;
  }
  .el-menu-demo >>> .el-input__inner{
    height: 30px;
    margin-top: -5px;

  }
  .avatar {
    border-radius: 50%;
  }
</style>

<!--<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-image src="../../static/logo_white.png" alt="今夕往昔"></el-image>
    <el-tab-pane name="logo"class="el-image" src="../../static/logo_white.png"></el-tab-pane>
    <el-tab-pane label="历史上的今天" name="first"></el-tab-pane>
    <el-tab-pane label="看历史" name="second"></el-tab-pane>
    <el-tab-pane label="我爱我校" name="third"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
  .el-tabs{
    background-color: #404050;
  }
  .el-tabs__item{
    color: white;
  }
  .el-tabs__item.is-active{
    color: #95C850 !important;
  }
  .el-tabs__active-bar{
    top:36px;
    background-color: #95C850;
  }
  .el-tabs__header{
    margin: 0 0 0;
  }
</style>-->
