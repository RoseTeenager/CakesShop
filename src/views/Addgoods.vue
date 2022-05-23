<template>
  <div class="add"> 
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="Form">
    <el-form-item label="名字" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入商品名"></el-input>
    </el-form-item>
  <el-form-item label="主图" prop="cover" status-icon>
    <el-input type="text" v-model="ruleForm.cover" autocomplete="off" placeholder="请输入商品地址"></el-input>
  </el-form-item>
  <el-form-item label="副图1" prop="image1">
    <el-input v-model="ruleForm.image1" placeholder="请输入商品地址"></el-input>
  </el-form-item>
  <el-form-item label="副图2" prop="image2">
    <el-input v-model="ruleForm.image2" placeholder="请输入商品地址"></el-input>
  </el-form-item>
    <el-form-item label="价格" prop="price">
    <el-input  v-model="ruleForm.price" placeholder="请输入商品价格 "></el-input>
  </el-form-item>
  <el-form-item label="简介" prop="intro">
    <el-input v-model="ruleForm.intro" placeholder="请输入商品简介"></el-input>
  </el-form-item>
  <el-form-item label="库存" prop="stock">
    <el-input v-model="ruleForm.stock" placeholder="请输入商品库存"></el-input>
  </el-form-item>
  <el-form-item label="类型号" prop="type_id">
    <el-input v-model="ruleForm.type_id" placeholder="请输入商品类型号"></el-input>
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
          name: '',
          cover: '',
          image1: '',
            image2: '',
            price: '',
            intro: '',
            stock: '',
            type_id: '',
        },
        rules: {
            name: [
                { required: true, message: '请输入商品名称', trigger: 'blur' },
            ],
            cover: [
                { required: false, message: '请上传商品封面', trigger: 'blur' },
            ],
            image1: [
                { required: false, message: '请上传商品图片', trigger: 'blur' },
            ],
            image2: [
                { required: false, message: '请上传商品图片', trigger: 'blur' },
            ],
            price: [
                { required: true, message: '请输入商品价格', trigger: 'blur' },
            ],
            intro: [
                { required: true, message: '请输入商品简介', trigger: 'blur' },
            ],
            stock: [
                { required: true, message: '请输入商品库存', trigger: 'blur' },
            ],
            type_id: [
                { required: true, message: '请输入商品类型', trigger: 'blur' },
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
                     url: '/goodsAddServlet',
                     data: {
                            name: this.ruleForm.name,
                            cover: this.ruleForm.cover,
                            image1: this.ruleForm.image1,
                            image2: this.ruleForm.image2,
                            price: this.ruleForm.price,
                            intro: this.ruleForm.intro,
                            stock: this.ruleForm.stock,
                            type_id: this.ruleForm.type_id,          
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