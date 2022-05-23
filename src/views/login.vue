<template>
<div id="root">
 
  <div class="register"> 
    <header>
      <h2>账户密码登录</h2>
    </header>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="Form">
    <el-form-item label="昵称" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
  <el-form-item label="密码" prop="pwd" status-icon>
    <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class="btn" @click="log">登录</el-button>
  </el-form-item>
  <footer>
    <span class="s1" @click="fog">忘记密码?</span>
    <span class="s2" @click="reg">立即注册</span>
    
  </footer>
</el-form>

  </div>
 
</div>

</template>
<script>
import axios from 'axios'

  export default {
    data() {
        var checkPwd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pwd: '',
          
        },
        rules: {
          username: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
        }
    },
    methods: {
      log() {
         var _this = this;
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
               this.$http({
                     method: 'post',
                     url: '/loginServlet',
                     data: {
                          username: this.ruleForm.username,
                          pwd: this.ruleForm.pwd,
                     },
                 }).then(function (response) {
                      if(response.data){
                        localStorage.setItem('user',JSON.stringify(response.data));
                         if(response.data.isadmin){
                           alert('管理员登录成功');
                            _this.$router.push('/backView');
                         }
                         else{
                           alert('登录成功');
                          _this.$router.push('/indexView');
                         }
                      }else{
                          alert('用户名或密码错误');
                     
                      }
                  }).catch(function (error) {
                      console.log(error);
                  });
          } else {
            alert("请检查登录项！")
          }
        });
             },
        reg() {
            this.$router.push('/register');
            },
        fog() {
            this.$router.push('/fog');
            }
    },
  }
</script>
<style scoped>
header{
  margin-left: 20px;
  margin-bottom: 30px;
}
#root{
  width: 135%;
  height: 760px;
  margin-top: -40px;
  margin-left: -202px;
 background: url("../assets/login.png") no-repeat center center fixed;
  background-size: cover;
}
.register{
  width: 500px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   background-color: rgba(255,255,255,.9);
  
}
.Form{
 font-size: 25px;
 margin-left: -57px;
}
.btn{
    width: 100%;
    height: 41px;
    background: #09aaff;
    border-radius: 4px;
    transition: .3s;
    font-size: 16px;
    border: 0;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-family: Microsoft YaHei,SimHei,Tahoma;
    font-weight: 100;
}
span{
  font-size: 16px;
  color: #09aaff;
  cursor: pointer;
    font-family: Microsoft YaHei,SimHei,Tahoma;
    font-weight: 500;
}
.s1{
  float: left;
  margin-left: 47px;
  color: grey;
 
}
.s2{
    float: right;
    margin-right: 10px;
    font-weight: 500;
}
</style>