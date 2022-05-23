<template>

      <div class="personal">
        <top></top>
          <div class="main-personal">
            <div class="personal-left">
              <p>快捷导航</p>
              <ul>
                <router-link tag="li" to="/portal">个人中心</router-link>
                <router-link tag="li" to="/portal/my-order">我的订单</router-link>
                <router-link tag="li" to="/cart">我的购物车</router-link>
                <router-link tag="li" to="/list">随便逛逛</router-link>
                <router-link tag="li" to="/list">优惠产品</router-link>
              </ul> 
              <p>账户管理</p>
              <ul>
                <router-link tag="li" to="/portal/my-details">个人信息</router-link>
              </ul>
            </div>
           <router-view></router-view>
            <div class="clearfix"></div>
          </div>
           <bottom></bottom>
        </div>
       

</template>
<script>
import axios from 'axios'
import proMydetails from './protal-all/Pro-mydetails'
import proMyOrder from './protal-all/Pro-myorder'
import proPersonal from './protal-all/Pro-personal'
import top from '../components/top'
import bottom from '../components/bottom'

export default{
  data(){
    return{

    }
  },
  methods:{},
  components:{
    "pro-mydetails":proMydetails,
    "pro-myorder":proMyOrder,
    "pro-personal":proPersonal,
    "top":top,
    "bottom":bottom

  },
}
</script>
<style scoped>
 .bar {
    padding-top: 100px;}

.router-link-exact-active{
  color:#fa9dac;
}
</style>