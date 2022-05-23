<template>
  <div class="add"> 
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="Form">
    <el-form-item label="昵称" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
  <el-form-item label="密码" prop="pwd" status-icon>
    <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
  </el-form-item>
    <el-form-item label="姓名" prop="name">
    <el-input  v-model="ruleForm.name" placeholder="请输入真实姓名 "></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item label="地址" prop="address">
    <el-input v-model="ruleForm.address" placeholder="请输入居住地址"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class="btn" @click="submit">提交</el-button>
  </el-form-item>
</el-form>

  </div>
  
</template>
<script>
import axios from 'axios'

  export default {
      name: 'addusers',
    data() {
      return {
        ruleForm: {
          id: '',
          username: '',
          pwd: '',
          email: '',
          name: '',
          phone: '',
          address: '',
          isadmin: 1,
          isvalidate: '',
        },
      rules: {
          username: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          email: [
                 { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          name: [
                { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          phone: [
                { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
            address: [
                { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
        },
        }
    },
    methods: {
     submit() {
        var _this = this;
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
                this.$http({
                     method: 'post',
                     url: '/UserAddServlet',
                     data: {
                          username: this.ruleForm.username,
                          pwd: this.ruleForm.pwd,
                          email: this.ruleForm.email,
                          name: this.ruleForm.name,
                          phone: this.ruleForm.phone,
                          address: this.ruleForm.address,
                          isadmin: this.ruleForm.isadmin,
                          isvalidate: this.ruleForm.isvalidate,
                     },
                  }).then(function (response) {
                      console.log(response.data);
                      if(response.data=="success"){
                          alert("添加成功");
                      }else{
                          alert("添加失败，已有此管理员");
                      }
                  }).catch(function (error) {
                      console.log(error);
                  });

          } else {
            alert("请检查添加项目！")
          }
        });
      },
    }, 

     
    }
</script>
<style scoped>
.add{
      width: 500px;
    margin-left: 372px;
    padding: 20px;
    font-size: 22px;

}
.Form{
 font-size: 25px;
 margin-left: -57px;
}
.btn{
  background: #859fe9;
    border-radius: 25px;
    width: 399px;
    margin-left: -10px;
}
</style>