<template>

  <!-- 个人中心模块1 -->
  <div class="personal-right ">
                <div class="myorder ">
                  <ul class="myorder-top clearfix">
                    <li class="top-one">个人中心</li>
                  </ul> 
                  </div>
    <div class="personal-top">
      <ul>
            <img src="/src/assets/记录.jpg" alt="">
        <li class="personal-name">{{people.username}}</li>
        <router-link tag="li" to="/portal/my-details" class="text-gray"><span>修改个人信息&gt;</span></router-link>
      </ul>
      <ul>
        <li>账户安全：<span>普通</span></li>
        <li>绑定手机：<span>{{people.phone}}</span></li>
        <router-link tag="li" to="/portal/my-details">绑定邮箱：<span>{{people.email}}</span></router-link>
      </ul>
    </div>
    <div class="personal-bottom">
      <div class="bottom-item">
        <ul>
           <img src="/src/assets/记录.jpg" alt="">
          <li>待支付订单：<span>0</span></li>
          <li><span>查看待支付订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <ul>
          <li>待评价订单：<span>0</span></li>
          <li><span>查看待评价订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <ul>
          <li>待收货订单：<span>1</span></li>
          <li><span>查看待收货订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <ul>
          <li>到处去看看：<span>go</span></li>
          <li><span>到处去看看&gt;</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-personal",
    data() {
      return {
        people: [
          
        ],
      }
    },
    methods: {

    },mounted(){
           this.people=JSON.parse(localStorage.getItem('user'))
           console.log(this.people);
        },

    }

</script>
<style scoped>
.myorder ul.myorder-top {
    margin-bottom: 40px;
}
</style>