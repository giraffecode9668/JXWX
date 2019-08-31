<template>
  <div class="root">
    <div class="login_page Card">
      <el-image class="img" :src="imgUrl"></el-image>
      <el-form class="loginForm" ref="form" :model="form" label-width="80px">
        <div class="tips">
          忘记密码？ <br/>输入您的电子邮件地址，我们将向您发送验证码。
        </div>
        <el-form-item label="输入邮箱：">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input v-model="form.key"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input v-model="form.key2"></el-input>
        </el-form-item>
        <el-form-item  class="create">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
        <div class="login">
          返回登录
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        imgUrl:require('../assets/logo.png'),
        form: {
          email: '',
          key: '',
          key2: '',
          code: '',
        }
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
    margin-bottom: 20px;
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
  .tips{
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    margin-top: 15px;
    text-align: center;
    margin-bottom: 35px;
  }
  .login{
       color: #888888;
       font-size: 12px;
       line-height: 20px;
       margin-top: 40px;
       text-align: center;
     }

</style>
