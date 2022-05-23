<template>

  <div class="wid">
    <top></top>
    <main>
      <header>
       <span>购物车({{data.length}})</span> 
       <div id="pay" ><span>已选商品（不含运费）<i >{{total}}</i></span> 
             <span @click="pay"><button>结算</button></span> </div>
      </header>
      <div class="line"></div>
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
            <span class="el-icon-circle-plus-outline plus" @click="addN( scope.row.id, scope.row.num )"></span>
            <span class="el-icon-remove-outline minus"  @click="minN(scope.row.id, scope.row.num)"></span>
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
      
    </main>
    <div v-if="!token" class="noproduct">
      <nothing msg="购物车内暂时没有商品，登录后将显示您之前加入的商品">
      </nothing>
      <div style="width:100%;text-align:center;margin-bottom:20px">
        <a :href="`/login?redirect=${$route.path}`" style="display:inline-block; ">点击登录</a>
      </div>
  </div>
          <bottom></bottom>
    </div>

</template>
<script>
  import axios from 'axios'
  import CartState from './cart-all/Cart-state'
  import bottom from '../components/bottom'
  import Nothing from './pub-all/Nothing'
   import top from '../components/top'
  export default {
    name: "cart",
    props: {
      state: {
        default: "2"
      },
    },
    data() {
      return {
        data: [],
        token: '',
      }
    },
    computed: {
      total() {
        return this.data.reduce((sum, item) => sum + item.price * item.num, 0).toFixed(2)
      },

    },
    methods: {
      pay() {
       if (this.data.length == 0) {
          alert('请选择商品')
        
        }
    
      },
     del (id) {
       this.$http.get("/itemDelServlet?id="+id  ).then(res => {
       
        if(res.data=== "删除成功"){
              this.data.splice(this.data.findIndex(item => item.id === id), 1)
          alert(res.data);
        }else{
         alert(res.data);
        }
      })
    },
       
      
      addN(id,num) {
        //实现数量变动 价格变动
        let newData = this.data.map(item => {
          if (item.id == id) {
            item.num = item.num + 1
            item.sum = item.price * item.num
            axios.post('/itemCountServlet', {
              id: item.id,
             num:item.num,
             sum:item.sum,

            }).then(res => {
              if (res.data==='success') {
                console.log('success');
              }
            })
          }
          return item
        })
      },
      minN(id,num) {
        //实现数量变动 价格变动
        if(num>1){
        let newData = this.data.map(item => {
          if (item.id == id) {
            item.num = item.num - 1
              item.sum = item.price * item.num
            axios.post('//itemCountServlet', {
              id: item.id,
             num:item.num,
             sum:item.sum,

            }).then(res => {
              if (res.data==='success') {
                console.log('success');
              }
            })
            
          }
          return item
        })
        }else
        {
          alert("不能再减少了")
        }
      },
      },
    components: {
      CartState,
      bottom,
      Nothing,
      top,
      bottom
    },
    mounted() {
      this.token = localStorage.getItem('user')
    
       axios.get('/itemAllServlet',{
            }).then(res=>{
             var rett=JSON.stringify(res.data);
                for(var i=0;i<res.data.length;i++){
                    this. data.push(res.data[i]);
                }
                console.log(this.data);
            })
    }
  
  }
</script>
<style  scoped>
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
      main  span{
          float: left;
          font-size: 24px;
            margin-bottom:10px;
            font-weight: 700;
      }
        main  span     i{
              font-size: 28px;
              font-weight: normal;
              color: red;
            }
        
        #pay{
       float: right;
           font-weight: 400;
        }
       #pay button{
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
    .plus{
          position: absolute;
    top: 11px;
    left: -20px;
    }
    .minus{
          position: absolute;
    top: 11px;
    right: 116px;
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