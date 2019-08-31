<template>
  <div class="root">
    <div class="login_page Card">
      <el-image class="img" :src="imgUrl"></el-image>
      <el-form class="loginForm" ref="form" :model="form" label-width="80px">
        <el-form-item label="手机号码：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.key"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input v-model="form.key2"></el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item  class="create">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
      <div class="login">
        已有账户？点此登录
      </div>
      <div class="div">
        <span class="line"></span>
        <span class="text">或用以下方式登录</span>
        <span class="line"></span>
      </div>
      <el-button class="btn" plain>易班</el-button>

    </div>
  </div>
</template>
<script>
  import store from '../store/store.js';

  export default {
    data(){
      return {
        imgUrl:require('../assets/logo.png'),
        form: {
          phone: '',
          name: '',
          email: '',
          key: '',
          key2: '',
          code: '',
        }
      }
    },
    store,
    methods:{
      onSubmit() {
        console.log('submit!');

        this.$store.commit()
      }
    }
  }
</script>


<style scoped>
  @import './css/usual.css';
  .root{
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    height: calc(100vh);
    /*100vh是屏幕可见高度的1倍*/
    display:-webkit-box;
    display:-ms-flexbox;
    align-items:center;
    border-radius:2px;
    box-sizing:border-box;
    min-height: 600px;
    background-color: #E0E0E0;
  }
  .login_page{
    width: 400px;
    height: 600px;
    margin-bottom: 25px;
  }
  .img{
    margin-top: 35px;
    margin-left: 122px;
    margin-bottom: 10px;
  }
  .loginForm{
    margin-left: 40px;
    margin-right: 40px;
  }
  .loginForm >>> .el-form-item{
    margin-bottom: 10px;
  }
  .loginForm >>> .el-form-item__label{
    color: #888888;
    font-size: 12px;
    text-align: left;
    width: 60px !important;
    padding: 0;
  }
  .loginForm >>> .el-form-item__content{
    margin-left: 70px !important;
  }
  .create >>> .el-form-item__content {
    margin-left: 0 !important;
  }
/*  .loginForm >>> .el-form-item__content{
    color: #888888 !important;
    font-size: 12px !important;
    padding-bottom: 2px;
    line-height: 20px !important;
    margin-left: 0 !important;
  }*/
  .loginForm >>> .el-input__inner{
    height: 35px;
  }
  .root >>> .el-button--primary{
    width: 320px;
    margin-top: 15px;
    background-color: #259B24 !important;
    border-color: #259B24 !important;
    margin-left: 0 !important;
  }
  .div{
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .text{
    margin-left: 20px;
    margin-right: 20px;
    color: #888888;
    font-size: 12px;
    height:36px;
    line-height:36px;
    text-align:center;
  }
  .line {
    display:inline-block;
    width:87px;
    border-top:1px solid #cccccc;
    vertical-align:5px;
  }
  .btn {
    width: 90px;
    height: 30px;
    padding: 6px 8px;
    margin-left: 155px;
    margin-top: 15px;
  }
  .login{
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    margin-top: 10px;
    text-align: center;
  }
</style>
