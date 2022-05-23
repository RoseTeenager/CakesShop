<template>
<div  id="app">
<el-table
ref="multipleTable"
     :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    max-height="600"
    style="width: 96% "
    @selection-change="handleSelectionChange"
    highlight-current-row
   >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="商品号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名"
      width="120">
    </el-table-column>
     <el-table-column
      prop="cover"
      label="商品主图"
      width="120"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="image1"
      label="商品副图1"
      width="120"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="image2"
      label="商品副图2"
      width="120"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="price"
      label="商品价格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="stock"
      label="商品库存"
       width="120">
    </el-table-column>
    <el-table-column
      prop="type_id"
      label="商品类型号"
       width="120">
    </el-table-column>
    <el-table-column
      prop="intro"
      label="商品简介"
      class="info"
       width="120"
       show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      align="right"
       width="150">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
     <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit( scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div id="changeInfo">
       <el-button type="danger" icon=el-icon-close circle class="ico" @click="close"></el-button>
      <h2 style="margin: 0;margin-top: -5px;margin-left: -11px;margin-bottom: 9px;">修改信息</h2>
      <el-form :model="temp" label-width="120px" class="demo-ruleForm">
        <el-form-item label="商品号">
          <el-input v-model="temp.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品名">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="商品主图">
          <el-input v-model="temp.cover"></el-input>
        </el-form-item>
        <el-form-item label="商品副图1">
          <el-input v-model="temp.image1"></el-input>
        </el-form-item>
        <el-form-item label="商品副图2">
          <el-input v-model="temp.image2"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="temp.price"></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="temp.stock"></el-input>
        </el-form-item>
        <el-form-item label="商品类型号">
          <el-input v-model="temp.type_id"></el-input>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input v-model="temp.intro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeSubmit">提交</el-button>
        </el-form-item>
      </el-form>


    </div>
</div>

</template>
<script>
//引入axios
import axios from 'axios'
export default {
    name: 'goodsView',
    data() {
        return {
           tableData: [
               
           ],
            search: '',
             multipleSelection: [],
          temp:[],
        }
    }, 
    methods: {
     handleEdit(item) {
        this.temp = item;
        console.log(this.temp);
        document.getElementById('changeInfo').style.display = 'block';
      },
      close() {
        document.getElementById('changeInfo').style.display = 'none';
      },
       handleDelete(id) {
      //删除
      this.$http.get("/goodsDelServlet?id="+id  ).then(res => {

        if(res.data.code == "删除成功"){
          //重新获取数据
          this.getData();
          alert(res.data);
        }else{
         alert(res.data);
        }
      })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
   handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      changeSubmit() {
        //提交修改
       this.$http({
                     method: 'post',
                     url: '/goodsUpdateServlet',
                     data: {
                       id:this.temp.id,
                          name:this.temp.name,
                          cover:this.temp.cover,
                          image1:this.temp.image1,
                          image2:this.temp.image2,
                          price:this.temp.price,
                          stock:this.temp.stock,
                          type_id:this.temp.type_id,
                        intro:this.temp.intro,       
                     },
                  }).then(function (response) {
                      console.log(response.data);
                      if(response.data=="success"){
                          alert("修改成功");
                      }else{
                          alert("修改失败");
                      }
                  }).catch(function (error) {
                      console.log(error);
                  });
    }
    },
    mounted(){
      this.$http.post('/goodsServlet',{
            }).then(res=>{
             var rett=JSON.stringify(res.data);
                for(var i=0;i<10;i++){
                    this. tableData.push(res.data[i]);
                }

            })
              
        },
    
    }
 </script>   
<style  scoped>
#changeInfo{
  display: none;
    position: absolute;
    width: 347px;
  top: 60%;
  left: 55%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   background-color: rgba(255,255,255,.9);
    z-index: 999;
}
  #changeInfo  .ico{
      position: absolute;
      top: -18px;
      right: -15px;
      cursor: pointer;
    }
    .el-form-item {
    margin-bottom: 0px;
}


</style>