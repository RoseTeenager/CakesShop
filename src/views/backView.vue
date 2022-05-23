<template>
<div class="root">
<header >
  <span>后台管理系统</span>
 <span href="#" id="user1">管理员{{userToken.username}},您好</span>
 <a href="#" id="other11" @click="index">返回首页</a>
  <a href="#" id="other22" @click="exit">退出</a>
</header>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu  :router="true">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-claim"></i>商品管理</template>
          <el-menu-item-group>
          <el-menu-item index="/backView/goodsType">查看商品类型号</el-menu-item>
           <el-menu-item index="/backView/AddgoodsType">添加商品类型号</el-menu-item>
            <el-menu-item index="/backView/goods">查看所有商品</el-menu-item>
            <el-menu-item index="/backView/addgoods">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-order"></i>订单管理</template>
          <el-menu-item-group>
            <el-menu-item index="/backView/orderView">查看所有订单</el-menu-item>
            <el-menu-item index="/backView/table">添加新的订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-custom"></i>人员管理</template>
          <el-menu-item-group>
            <el-menu-item index="/backView/users">查看所有会员</el-menu-item>
            <el-menu-item index="/backView/Addusers">添加管理员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
          <el-menu-item-group>
            <el-menu-item index="/backView/page">正在开发中...</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="table-div">
      <el-main>
        <router-view name="table"></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>

</template>
 
<style l scoped>
  .root {
    position: relative;
    background-color: #fff;
  }
.el-container{
  width: 1395px;
  margin-top: 0px;
}
.el-main{
  padding: 0;
   margin-top: 4px;
}

header {
  position: relative;
      top: 4px;
    left: -190px;
    width: 1526px;
  height: 75px;
  line-height: 75px;
  background-color: #545c64;
  color: #409eff;
  font-size: 28px;
  padding-left: 15px;
}

 header   #user1{
      position: absolute;
    top: 11px;
    right: 15px;
    margin-right: 105px;
    color: #fff;
    font-size: 14px;
    margin-top: 10px;
}

   
   #other11{
       position: absolute;
    top: 20px;
    color: #409eff;
    right: 60px;
    font-size: 13px;}
    #other22{
    position: absolute;
          top: 19px;
          color: #409eff;
    right: 24px;
    font-size: 13px;}
    
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
 .table-div {
    width: 100%;
  }
  .el-table {
    height: 100%;
  }
 
.el-aside {
  color: #333;
      margin-left: -191px;
    margin-top: 4px;
}
.el-menu{
  height: 100%;
}
</style>
 
<script>
export default {
  name: 'index',
  data() {
    return {
      userToken: '',
    }
  }, 
  mounted(){
          let userToken=localStorage.getItem('user');
            this.userToken=JSON.parse(userToken);
            if(this.userToken==null){
              this.$router.push('/login');
            }else{
              this.$router.push('/backView');
            }
    },
  methods: {
    index(){
      this.$router.push('/indexView');
    },
    exit(){
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }

}
</script>
 