<template>
  <div class="add"> 
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="Form">
         <el-form-item label="类型号" prop="id">
        <el-input v-model="ruleForm.id" placeholder="请输入商品序列号"></el-input>
    </el-form-item>
    <el-form-item label="类型名字" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入商品名"></el-input>
    </el-form-item>
  <el-form-item>
     <el-button type="success" round style="margin-left:100px" @click="add">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        ruleForm: {
          id: '',
          name: '',
        },
        rules: {
            id: [
                { required: true, message: '请输入商品序列号', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ],
            name: [
                { required: true, message: '请输入商品名称', trigger: 'blur' },
            ],
        },
        }
    },
    methods: {
      add() {
          console.log(this.ruleForm);
        var _this = this;
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
                this.$http({
                     method: 'post',
                     url: '//TypeAddServlet',
                     data: {
                            id: this.ruleForm.id,
                            name: this.ruleForm.name,
                         
                     },
                  }).then(function (response) {
                      console.log(response.data);
                      if(response.data=="success"){
                          alert("添加成功");
                      }else{
                          alert("添加失败");
                      }
                  }).catch(function (error) {
                      console.log(error);
                  });

          } else {
            alert("请检查注册项目！")
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