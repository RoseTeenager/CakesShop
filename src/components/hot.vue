<template>
  <div > 
 <p class="rec size" > 热销产品</p>
 <div class="row three ">
            <div class="col-md-3  " v-for="i in List" :key="i.id">
                <el-card shadow="hover">
                <div class="thumbnail ">
                   <div class="caption ">
                         <router-link to="/Detail"><img :src=i.cover  @click="put(i)"></router-link>
                        <h3>{{i.name}}</h3>
                        <p>￥{{i.price}}</p>
                        <p><a href="# " class="btn btn-primary " role="button " @click="add(i)">加入购物车</a> <a href="# " class="btn btn-default " role="button " @click="add1(i)">立即购买</a></p>
                    </div>
                </div>
                </el-card>
            </div>
 </div>
 </div>
        
</template>

<script>
  import axios from 'axios'
import router from '@/router'
export default {
    name: 'hot',
    data() {
        return {
           List: [
               
           ],
        }
    },
    methods: {
         add(i) {
                if(token===null){
                alert('请先登录')
                this.$router.push('/login')
            }else{
            axios.post('/itemAddServlet', {
                 goods_id: i.id,
                goods_name: i.name,
                name: i.name,
                price: i.price,
                image: i.image,
                sum:i.price,
                num: 1,
            }).then(res => {
                console.log(res);
                if (res.data=== "success") {
                    alert("添加成功");
                } else {
                    alert("添加失败");
                }
            })
            }
        },
            add1(i) {
                  let token1 = localStorage.getItem('user')
                if(token1===null){
                alert('请先登录')
                this.$router.push('/login')
            }else{
            axios.post('/itemAddServlet', {
                 goods_id: i.id,
                goods_name: i.name,
                name: i.name,
                price: i.price,
                image: i.image,
                sum:i.price,
                num: 1,
            }).then(res => {
                console.log(res);
                if (res.data=== "success") {
                   router.push('/pay')
                } else {
                    alert("添加失败");
                }
            })
            }
        },
         
       
    },
    mounted(){
            this.$http .post('/goodsServlet',{
            }).then(res=>{
             var rett=JSON.stringify(res.data);
             //把前九个数据放入数组List中
                for(var i=10;i<18;i++){
                    this.List.push(res.data[i]);
                }
               
            })
        }
    }
  

</script>

<style>
.size{
    margin-top: 27px ;
   
}
</style>