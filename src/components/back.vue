<template>
<div class="app">
    <el-menu
  :default-active="activeIndex1"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item id="line">后台管理系统管理</el-menu-item>
  <h4 id="p">您好,{{admin.username}}</h4>
</el-menu>
<el-row class="tac">
  <div>
    123
  </div>
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo side"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商1品管理</span>
        </template>
        <el-menu-item-group>
        <el-menu-item index="1-1">查看所有商品</el-menu-item>
         <el-submenu index="1-1">
          <template slot="title">商品类别</template>
          <el-menu-item index="1-4-1">查看所有商品类别</el-menu-item>
             <el-menu-item index="1-4-4">添加商品类别</el-menu-item>
        </el-submenu>
          <el-menu-item index="1-2">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理1111</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-5"> <router-link to="/backView/goodsView ">查看所有订单</router-link> </el-menu-item>
          <el-menu-item index="1-6">添加订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">查看所有用户</template>
          <el-menu-item index="1-8">添加用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
      </el-submenu>    

    </el-menu>
                
  </el-col>

</el-row>
</div>
    
</template>
<script>
export default {
  name: 'root',
  data() {
    return {
      admin: '',
      activeIndex: '1',
        activeIndex2: '1'
    }
  },  mounted(){
          let userToken=localStorage.getItem('user');
            this.admin=JSON.parse(userToken);     
    }, methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.app {
  position: relative;
}
#test{
  position: absolute;
  top: 100;
  right: 1px;
  width: 82.4%;
  height: 630px;
  background-color: rgb(84, 92, 100);
}
.side {
  overflow: hidden;
    float: left;
  width: 200px;
  height: 630px;
  margin-top: 0px;
  border-right: 2px solid #fff;
}
#header {
width: 135%;
margin-left: -194px;
  background-color: rgb(84, 92, 100);
}
#line {
  font-size: 24px;
  color: skyblue !important;
  margin-right: 100px;
}
#p {
  float: right;
  font-size: 20px;
  color: skyblue !important;
  margin-right: 10px;
  font-weight: normal;
  margin-top: 25px;
}
</style>