<template>
  <div class="root">
    <div class="login_page Card">
      <el-image class="img" :src="imgUrl"></el-image>
      <el-form class="loginForm" ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item class="tips" label="账号:"/>
        <el-form-item>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item class="tips" label="密码:"/>
        <el-form-item>
          <el-input v-model="form.key"></el-input>
        </el-form-item>
        <div class="forgetKey">
          忘记密码？
        </div>
        <el-form-item label="记住我">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
      <div class="div">
        <span class="line"></span>
        <span class="text">或用以下方式登录</span>
        <span class="line"></span>
      </div>
      <el-button class="btn" plain>易班</el-button>
      <div class="signUp">
        没有账户？点此创建账户
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        imgUrl:require('../assets/logo.png'),
        form: {
          name: '',
          key: '',
          delivery: false,
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          key: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
      }
    },
    methods:{
      onSubmit() {
        console.log('submit!');
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
    min-height: 540px;
    background-color: #E0E0E0;
  }
  .login_page{
    width: 400px;
    height: 540px;
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
    margin-bottom: 15px;
  }
  .loginForm >>> .el-form-item__label{
    line-height: 20px;
    color: #888888;
    font-size: 12px;
    text-align: left;
    width: auto !important;
  }
  .tips{
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 0 !important;
  }
  .loginForm >>> .el-form-item__content{
    color: #888888 !important;
    font-size: 12px !important;
    padding-bottom: 2px;
    line-height: 20px !important;
    margin-left: 0 !important;
  }
  .loginForm >>> .el-input__inner{
    height: 35px;
  }
  .forgetKey{
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 15px;
    margin-right: 0;
    justify-content:flex-end;
    display:flex;
  }
  .root >>> .el-button--primary{
    width: 320px;
    margin-top: 15px;
    background-color: #259B24 !important;
    border-color: #259B24 !important;
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
    margin-top: 10px;
  }
  .signUp{
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    margin-top: 45px;
    text-align: center;
  }
</style>
