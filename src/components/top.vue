<template>
      <nav class="navbar navbar-default ">
            <div class="container-fluid top ">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt=""></a>
                </div>
                <div class="collapse navbar-collapse  c" id="bs-example-navbar-collapse-1">
                    <ul class=" nav navbar-nav  ">
                        <li><router-link to="/indexView" active-class="active"  >首页</router-link></li>
                        <li style="margin:17px 5px 0 5px">
                       <el-dropdown class="dropdown" @command="handleCommand" >
                         <span class="el-dropdown-link" style="color:white"  @click="test" >
                         商品分类<i class="el-icon-arrow-down el-icon--right"></i>
                         </span>
                         <el-dropdown-menu slot="dropdown" >
                           <el-dropdown-item v-for="i in tableData" :key="i.id" :command=i>{{i.name}}</el-dropdown-item>
                         </el-dropdown-menu>
                       </el-dropdown>
                        </li>
                        <li @click="go(1)" ><router-link to="/sale"   >热销</router-link></li>
                        <li @click="go(2)"> 
                            <router-link to="/sale"   >新品</router-link>
                        </li>
                        <li><router-link to="/register" v-show=" !userToken"  >注册</router-link></li>
                        <li><router-link to="/login"    v-show=" !userToken" >登录</router-link></li>
                    </ul>
                    <form class="navbar-form navbar-left ">
                        <div class="form-group ">
                            <input type="text " class="form-control " placeholder="奶油蛋糕 ">
                        </div>
                        <button type="submit " class="btn btn-default ">搜索</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right " v-show="userToken">               
                        <el-dropdown @command="thing">
                       <span class="el-dropdown-link">
                        <span class="nav-ritem "><img src="../assets/user.png" alt=""></span>
                       </span>
                       <el-dropdown-menu slot="dropdown" colo>
                         <el-dropdown-item >会员名:{{userToken.username}}</el-dropdown-item>
                         <el-dropdown-item command="1"><router-link to="#"   >切换账号</router-link></el-dropdown-item>
                         <el-dropdown-item  command="2">退出</el-dropdown-item>
                       </el-dropdown-menu>
                     </el-dropdown>
                    </ul>
                </div>
            </div>
          <div class="right-nav" v-if="userToken" >
				<div class="nav-ritem"><a target="#" href="http://wpa.qq.com/msgrd?v=3&uin=1006781619&site=qq&menu=yes"><img border="0" width="30px" height="30px" src="../assets/QQ.png" alt="点击这里给我发消息" title="点击这里给我发消息"/><p>QQ咨询</p></a>
				
			</div>
			<div class="nav-ritem "><router-link to="/portal"><img border="0" src="../assets/person.png" alt="点击这里进入个人中心" title="点击这里进入个人中心"/><p>个人中心</p></router-link>
				
			</div>
			<div class="nav-ritem ">
        
             <router-link to="/cart"><img border="0" src="../assets/shop.png" alt="点击这里进入购物车" title="点击这里进入购物车"/>	<p>购物车</p></router-link>
			
		
			<div class="nav-ritem ">
					<a href="#"><img border="0" src="../assets/down.png" alt="点击这里下载客户端" title="点击这里下载客户端" @click="khd">	<p>下载客户端</p></a>
			
			</div>
			<div class="nav-ritem ">
                <a href="#"><img border="0" src="../assets/back.png" alt="点击这里回到顶部" title="点击这里回到顶部"/>	<p>回到顶部</p></a>
			
			</div>
            </div>
		</div>
        </nav>
</template>

<script>
import axios from 'axios'
import router from '@/router'
export default {
  name: 'top',
     data() {
        return {
            userToken:false,
            tableData:[],
        }
    
    },
    mounted(){
         this.$http.get('/TypeAllServlet',{
            }).then(res=>{
             var rett=JSON.stringify(res.data);
                for(var i=0;i<res.data.length;i++){
                    this.tableData.push(res.data[i]);
                }
            })
          let userToken=localStorage.getItem('user');
            this.userToken=JSON.parse(userToken);  
      
              
    },
    methods: {
        test(){
           var token1=localStorage.getItem('user');
           if(token1==null){
               alert('请先登录');
               router.push('/login');
           }
        },

        handleCommand(command) {
               localStorage.setItem('type',JSON.stringify(command.id));
                localStorage.setItem('typeName',JSON.stringify(command.name));
                this.$router.push('/type');
               
        },
        thing(command){
            console.log(command);
            localStorage.removeItem('user');
            if(command==1){
                this.$router.push('/login');
               
            }else{
                this.userToken=false;
            }
        },
        change(){
            alert('切换账号');
        },
        exit(){
            localStorage.removeItem('user');
            this.$router.push('/indexView');
        },
        person(){
            this.$router.push('/portal');
        },
        khd(){
            alert('暂无客户端');
        },
        go(num){
             let token = localStorage.getItem('user')
            if(token===null){
                alert('请先登录')
                this.$router.push('/login')
            }else{;
            if(num==1){
                localStorage.setItem('gName',JSON.stringify("热销"));
                this.$router.push('/sale');
            }else if(num==2){
                localStorage.setItem('gName',JSON.stringify("新品"));
                this.$router.push('/sale');
            }
            }

        }
    }


}
</script>

<style>
.top{
   position: fixed;
   width: 100%;
    top: 1px;
    left: 189px;
    width: 1057px;
    z-index: 100;

}
.navbar-collapse {
    background-color: #fa9dac;
}
.c{
   line-height: 15px;
}
.navbar-default{
    border: none;
   background-color: none ;
   z-index: 9999;
}
.navbar-default .navbar-nav>li>a {
    color: white;
}

.navbar-brand {
    margin-top: -23px;
}

.navbar-brand img {
    width: 10.2667rem;
    height: 8.8rem;
}
.ico{
   
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: -10px;
    right: -10px;
    border: 1px solid #fff;

}
html,
body {
    width: 100%;
    position: relative;
    height: 100%;
    margin: 0 auto;
    padding: 0;
}
.containe{
    width: 100%;
    height: 100%;
}

.container-fluid {
    padding: 0;
}
.rec {
    width: 100%;
    height: 50px;
    background-color: pink;
    line-height: 50px;
    font-size: 24px;
    color: white;
    font-weight: 700;
    padding-left: 10px;
    margin-top: 30px;
}

.navbar-right {
    margin-right: 43px;
    font-size: 18px;
    color: white
}
#user{
      position: absolute;
   top: 12px;
    right: 168px;
    color: #fff;
    font-size: 19px;
    margin-top: 10px;

   }
   #other1{
    position: absolute;
          top: 29px;
    right: 64px;
    color: #409eff;
    font-size: 13px;}
    #other2{
    position: absolute;
          top: 29px;
          color: #409eff;
    right: 8px;
    font-size: 4px;}
    .right-nav{
  width:78px;
  height:395px;
  position:fixed;
  color:#fa9dac;
  text-align: center;
  right:0;
  top:260px;
  background-color: white;
  border-bottom:1px solid rgb(240, 141, 141);
}
.nav-ritem:hover > .big-png{
left:-105px;
opacity: 1;
}
.nav-ritem{
  border:1px solid rgb(240, 141, 141);
  height:78px;
  border-bottom: 0px ;
  cursor:pointer;
  position: relative;
}
.nav-ritem img{
display:inline-block;
}
.nav-ritem img {
   margin-right: -10px;
    height: 34px;
    margin-top: 8px;
}
.nav-ritem p{
      font-size: 12px;
    line-height: 26px;
    color: pink;
}
.nav-ritem a{
    text-decoration: none;
}

</style>