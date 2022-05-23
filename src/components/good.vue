<template>
 <div > 
<p class="rec size2 ">精品推荐</p> 
  <div class="row ">
            <div class="col-xs-6 col-md-4 " v-for="i in List" :key="i.id">
                  <el-card shadow="hover">
                <div class="thumbnail "  >
                    <router-link to="/Detail"><img :src=i.image2  @click="put(i)"></router-link>
                    <div class="caption ">
                        <p>￥{{i.price}}</p>
                        <h3>{{i.name}}</h3>
                        <span></span>
                        <p><a href="# " class="btn btn-primary " role="button " @click="add(i)">加入购物车</a> <router-link to="/cart" class="btn btn-default " role="button " @click="add1(i)">立即购买</router-link></p>
                    </div>
                </div> 
                 </el-card>
            </div>
            </div>  
</div>
 
 
  
</template>

<script>
//引入axios
import axios from 'axios'
export default {
    name: 'good',
    data() {
        return {
           List: [
               
           ],
           temp: [],
       
        }
    },
    methods: {
        add(i) {
            let token = localStorage.getItem('user')
            if(token===null){
                alert('请先登录')
                this.$router.push('/login')
            }else{
          this.$http.post('/itemAddServlet', {
                goods_id: i.id,
                goods_name: i.name,
                name: i.name,
                price: i.price,
                image: i.image,
                sum:i.price,
                num: 1,
            }).then(res => {
                console.log(res);
                if (res.data=== 'success') {
                    alert('添加成功')
                }else{
                    alert('添加失败')
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
                for(var i=1;i<10;i++){
                    this.List.push(res.data[i]);
                }
            })
        },
    
    }
  

        
       
    
    
</script>

<style>
.size2{
    margin-top: 106px !important;
   
}
.thumbnail{
    border: none ;
}
.caption p{
    margin-top: 10px;
   color: red;
   font-size: 26px;
   font-weight: 700;
}
</style>