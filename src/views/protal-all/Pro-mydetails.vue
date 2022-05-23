<template>
  <!-- 个人信息模块1 -->
  <div class="personal-right ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">我的基本信息</li>
      </ul>
      <form action="#">
        <ul class="myorder-myself">
          <li>
            <span>&emsp;用户名：</span>
            <input type="text" :value=data.name autofocus>
          </li>
          <li>
            <span>&emsp; &emsp;昵称：</span>
            <input type="text" :value=data.username autofocus>
          </li>
          <li>
            <span>&emsp; &emsp;密码：</span>
            <input type="number" :value=data.pwd min="5">
          </li>
          <li>
            <span>手机号码：</span>
            <input type="text" :value=data.phone autofocus>
          </li>
          <li>
            <span> &emsp; &emsp;邮箱：</span>
            <input type="email" :value=data.email autofocus>
          </li>
           <li>
            <span> &emsp; &emsp;地址：</span>
            <input type="text" :value=data.address autofocus>
          </li>
          <li class="up-submit">
            <input type="submit"  @click="go" value="提交修改">
          </li>
        </ul>

      </form>
    </div>
  </div>
  <!-- 个人信息模块2 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-mydetails",
    data() {
      return {
        data: [
      
        ],
      }
    },
    methods: {
      go() {
       this.$http.post('/UserUpdateServlet', {
          id: this.data.id,
          username: this.data.username,
          pwd: this.data.pwd,
              email: this.data.email,
               name: this.data.name,
          phone: this.data.phone,
          address: this.data.address,
        }).then(res => {
          console.log(res)
          if (res.data==='success') {
            alert('修改成功')
          }
        })
      }
    },
    mounted() {
    
       this.data = JSON.parse(localStorage.getItem('user'))
      console.log(this.data)

    
    },
  }
</script>
<style scoped>

</style>