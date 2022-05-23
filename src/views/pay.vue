<template>
<div class="app">
   <top></top>
   <header>
       <h3>确认收获地址</h3>
       <div class="info" >
           <p>姓名:{{List.name}}</p>
           <p>电话:{{List.phone}}</p>
           <p>地址:{{List.address}}</p>
          <p @click="change">修改</p>     
       </div>
   </header>
   <div id="changeInfo">
       <el-button type="danger" icon=el-icon-close circle class="ico1" @click="close"></el-button>
      <h2 style="margin: 0;margin-top: -5px;margin-left: -11px;margin-bottom: 9px;">修改信息</h2>
      <el-form :model="temp" label-width="120px" class="demo-ruleForm">
        <el-form-item label="姓名">
          <el-input v-model="temp.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="temp.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="temp.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeSubmit">提交</el-button>
        </el-form-item>
      </el-form>
 
</div>
<section>
  <h3>确认商品信息</h3>
    <el-table
    :data="data"
    style="width: 100%"
   >

    <el-table-column
      label="订单号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.goods_name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
     <el-table-column
      label="单价"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.price }}</el-tag>
          </div>
        </el-popover>
      </template>
       </el-table-column>
       <el-table-column
      label="数量"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag class="word" >{{ scope.row.num }}</el-tag>
          </div>
        </el-popover>
      </template>
       </el-table-column>
       <el-table-column
      label="总价格"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" class="sum">￥{{ scope.row.sum}}</el-tag>
          </div>
        </el-popover>
      </template>
     
          </el-table-column>
      
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="del(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
      
</section>
<section class="p2">
  <h3>请选择付款方式</h3>
  <el-radio-group v-model="radio" @change="change">
    <el-radio label="1" @click="change1 " ><img src="../assets/wechat.png" alt=""></el-radio>
    <el-radio label="2"><img @click="change2" src="../assets/zfb.png" alt=""></el-radio>
    <el-radio label="3"><img @click="change3 " src="../assets/huodao.png" alt=""></el-radio>
  </el-radio-group>
  <div class="box1">
     <el-button type="danger" icon="el-icon-close" class="ico1" @click="close1" circle></el-button>
    <img src="../assets/wechat1.jpg" alt="">
  </div>
   <div class="box2">
       <el-button type="danger" icon="el-icon-close" class="ico1" @click="close2" circle></el-button>
    <img src="../assets/zfb1.jpg" alt="">
  </div>
</section>
 <bottom></bottom> 
</div>
  
</template>

<script>
import axios from 'axios'
import top from '@/components/top.vue'
import Bottom from '@/components/bottom.vue'
import router from '@/router'
export default {
  components: { top, Bottom },
    data() {
        return {
        List: [],
        temp:[],
        data: [],
        order: [],
        pic:[   {
            wechat: '../assets/wechat1.png'
        },
        {
            zfb: '../assets/zfb1.png'
        }

              
          
        ]
        }
    },
    methods: {
        change(){
          
            var box=document.getElementById('changeInfo')
            box.style.display='block'
            //倒计时
           
        },
          change1(){
            if (this.data.length == 0) {
                alert('商品为空,请先添加商品')
                return
            }
          let box=document.getElementsByClassName('box1')
          box[0].style.display='block'
            var time=setInterval(function(){
                alert('支付成功')
               this.$http.get('//ItmDelAllServlet',{
               
                }).then(res=>{
                  console.log(res);
                  
                })
                clearInterval(time)
                 localStorage.removeItem('typeName')
                localStorage.removeItem('type')
                localStorage.removeItem('goods')
          
                router.push('/indexView')
               

            },5000)
        },
         change2(){
            if (this.data.length == 0) {
                alert('商品为空,请先添加商品')
                return
            }
          let box=document.getElementsByClassName('box2')
          box[0].style.display='block'
          this.$http.post('/orderAddServlet', {
            params: {
                id:0,
                goods_id:this.List.goods_id,
                user_id:this.List.user_id,
                number:this.List.num,
                price:this.List.price,
                ispay:1,
                issend:0,
                pay_time:new Date(),
                sen_time:null,
                sum:this.List.sum,
                address:this.List.address,
                phone:this.List.phone,
                name:this.List.name,
            }
        }).then(res => {
          console.log(res);
            this.data = res.data.data
            this.order = res.data.data
            console.log(this.order)
        })
          this.$http.get('//ItmDelAllServlet',{
               
                }).then(res=>{
                  
                })
            var time=setInterval(function(){
                alert('支付成功')
                clearInterval(time)
                localStorage.removeItem('typeName')
                localStorage.removeItem('type')
                localStorage.removeItem('goods')
                router.push('/indexView')
          

            },5000)
        },
        change3(){
           if (this.data.length == 0) {
                alert('商品为空,请先添加商品')
                return
            }
            var time=setInterval(function(){
                alert('支付成功')
                clearInterval(time)
                 localStorage.removeItem('typeName')
                localStorage.removeItem('type')
                localStorage.removeItem('goods')
                router.push('/indexView')
                 this.$http.get('/ItmDelAllServlet',{
               
                }).then(res=>{
                  
                })
               

            },1000)
        },
        
        changeSubmit() {
          this.$http({
                    method: 'post',
                     url: '/UserUpdateServlet',
                    data: {
                        id:this.temp.id,
                        username: this.temp.name,
                        email: this.temp.email,
                        isadmin: this.temp.isadmin,
                        isvalid: this.temp.isvalid,
                        name: this.temp.name,
                        phone: this.temp.phone,
                        address: this.temp.address,
                        pwd: this.temp.pwd,
                    }
                        }).then(res => {
                            if(res.data==="修改成功"){
                                alert("修改成功")
                                this.close()
                            }
                        })
    
      
    },  
  
            close() {
        document.getElementById('changeInfo').style.display = 'none';
        },
        close1() {
           let box=document.getElementsByClassName('box1')
            box[0].style.display='none'

        },
         close2() {

           let box=document.getElementsByClassName('box2')
            box[0].style.display='none'

        },
         del (id) {
        this.$http.get("/itemDelServlet?id="+id  ).then(res => {
       
        if(res.data=== "删除成功"){
              this.data.splice(this.data.findIndex(item => item.id === id), 1)
     
          alert(res.data);
        }
      })
    },
    },
    mounted(){
        let info=localStorage.getItem('user');
        this.List=JSON.parse(info);
       this.temp=this.List;
        this.$http.get('/itemAllServlet',{
            }).then(res=>{
             var rett=JSON.stringify(res.data);
                for(var i=0;i<res.data.length;i++){
                    this. data.push(res.data[i]);
                    this.order.push(res.data[i]);
                }
          
            })
  
    },

}
</script>

<style  scoped>
.p2 img{
  cursor: pointer;
}
.ico1{
    position: absolute;
    top: 0;
    right: 0;

}
.box1{
  display: none;
    width: 500px;
    height: 500px;
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
   z-index: 9999;
}
  .box img{
    width: 100%;
    height: 100%;
 
   }
.box2{
  display: none;
    width: 500px;
    height: 500px;
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  padding: 20px;
   z-index: 9999;
}
.box2   img{
    width: 100%;
    height: 100%;
 
   }
.info{
    width: 240px;
    height: 115px;
    background: url(../assets/ba.png) no-repeat;
    padding: 14px;
}
 .info p{
        margin: 0;
        font-size: 14px;

 
    }

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
 #changeInfo   .ico{
        display: block;
      position: absolute;
      top: -18px;
      right: -15px;
      cursor: pointer;
    }
  #changeInfo  .el-form-item {
    margin-bottom: 0px;
}
 main{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
    padding-bottom:50px;
    overflow:hidden;
    position:relative;
    padding: 20px 20px;
    font-size:20px;
     color:rgb(12, 9, 9);
 }
     main   span{
          float: left;
          font-size: 24px;
            margin-bottom:10px;
            font-weight: 700;
     }
          span  i{
              font-size: 28px;
              font-weight: normal;
              color: red;
            }
      
      #pay{
       float: right;
           font-weight: 400;
      }
      #pay  button{
          background-color: red;
          color: #fff;
          border: none;
          border-radius: 35px;
          padding: 5px 10px;
          margin-left: 10px;
          cursor: pointer;
 
        }
         
        
       #pay .line{
          width: 104%;
    height: 2px;
    background-color: #ccc;
    margin-top: 55px;
    margin-left: -18px;
        }
  
    .noproduct{
        width:100%;
        height:100%;
        background-color: #f5f5f5;
        padding-top:50px;
        padding-bottom:50px;
        overflow:hidden;
        position:relative;
    }
    .noproduct .nothing{
        width:100%;
        height:100%;
        background-color: #f5f5f5;
        padding-top:50px;
        padding-bottom:50px;
        overflow:hidden;
        position:relative;
    }
    .word{
        font-size: 24px;
    position: absolute;
    top: 12px;
    left: 14px;
    }
    .sum{
        font-size: 24px;
        color: red;
    }


</style>