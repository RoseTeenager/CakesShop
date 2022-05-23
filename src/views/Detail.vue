<template>
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <top></top>
     <div class="bar">
        <img :src=tabledata.image2 alt="">
    </div>
    <div class="p-main clearfix">
      <div class="p-main-right">
        
        <h1 id="cake_name">{{ tabledata.name  }}</h1>
        <h2 style="color:red">￥{{tabledata.price}}</h2>
        <hr>
        <div class="details clearfix">
          <div><img  alt="">&emsp;直径6~14寸</div>
          <div><img  alt="">&emsp;适合多人分享</div>
          <div><img  alt="">&emsp;含多人份餐具</div>
          <div><img alt="">&emsp;至少需提前一天预约</div>
        </div>
        <hr>
        <div class="count">
          <h3 class="iconfont icon-jianhaoshouqi" @click="changeCount(-1)"></h3>
          <div></div>
          <h3><input type="text" v-model="myCount" id="p_count"></h3>
          <div></div>
          <h3 class="iconfont icon-jiahaozhankai" @click="changeCount(1)"></h3>
        </div>
        <div class="buy">
          <span @click="addCartCount">加入购物车</span>
          <span>立即购买</span>
        </div>
      </div>

    </div>
    <div class="p-details">
      <div class="detail-one">
        <h5 class="pink1">商品详情</h5>
        <h5>商品评论（0条）</h5>
        <i class="xian"></i>
      </div>
      <hr>
      <div class="detail-two">
        <span>品牌：糖豆豆</span>
        <span>口味：醇香奶油</span>
        <span>适合人群：所有人群</span>
        <span>商品产地：中国大陆</span>
        <span>是否含糖：含糖</span>
        <span>类别：蛋糕</span>
        <span>保质期：1天</span>
        <span>保存温度：0℃~8℃</span>
        <span>口味：原味</span>
        <span>国产/进口：国产</span>
        <div class="text-center">
          <h5>
            图片仅供参考，请以实物为准
          </h5>
          <h3>幸福就是甜品的味道；每一道甜品都有一个故事；</h3>
          <h3 class="pink1">生活就像一道道甜品，不品尝怎么知道哪道更适合自己?</h3>
          <h3>似腻还成爽，才凝又欲飘；玉来盘底碎，雪到口边销。</h3>
          <h3>风是透明的，雨是滴答的，</h3>
          <h3>云是流动的，歌是自由的，</h3>
          <h3>爱是用心的，恋是疯狂的，</h3>
          <h3>天是永恒的，</h3>
          <h3 class="pink1">你是难忘的。</h3>
          <h4>That is the sweetest cake in the world,
            That is the most delicious cake in the world.</h4>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import top from '../components/top.vue'
import bottom from '../components/bottom.vue'
  export default {
    data() {
      return {
        myCount:1,
			products:[],
			pics:[],
        price1: 0,
        curIndex: 0,
        product_id:{
          default:1
        },
        tabledata:[],
      }
    },
    components: {
      top,
      bottom
    },
    methods: {
      addCartCount(){
        let formdata={}
        formdata.p_id=this.products.product_id
        formdata.product_kinds_name=this.products.product_kinds_name
        formdata.cake_name=this.products.cake_name
        formdata.count=this.myCount
        formdata.price=this.products.price
        this.axios.post('/cart/adds',formdata).then((data)=>{console.log(data)})
      },
      changeCount(n){
        this.myCount=Math.max(this.myCount+n,1)
      },
    },
    mounted() { 
         let userToken=localStorage.getItem('goods');
            this.tabledata=JSON.parse(userToken);  
            console.log(this.tabledata);
      
      },
    }
</script>
<style socped>

  .p-main {
    padding-bottom: 20px;
    margin-top: 30px;
  }

  .p-main-left,
  .p-main-right {
    /* display:inline-block; */
    float: left;
  }

  .p-main-left {
    width: 716px;
  }

  .left-img>img {
    cursor: pointer;
  }

  .p-main-right {
    width: 435px;
    text-align: left;
    margin-left: 40px;
        position: absolute;
    top: 81px;
    right: 226px;
  }

  .p-main-left>div:nth-child(2)>img {
    width: 164px;
    display: inline-block;
    margin-top: 15px;
  }

  .p-main-left>div>img+img {
    margin-left: 15px;
  }

  /* 第一部分右边1 */
  .p-main-right h1 {
    font-size: 35px;
    color: #fa9dac;
    font-weight: 560;
    position: relative;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .p-main-right h1 img {
    position: absolute;
    width: 20px;
  }

  .p-main-right h4 {
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    margin-bottom: 20px;
  }

  .p-main-right h2 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 20px;
    
  }

  .p-main-right>span:nth-child(1) {
    color: #ccc;
  }

  .p-main-right .cweight>div {
    display: inline-block;
    position: relative;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 15px;
    padding: 3px 7px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    background-color: #fa9dac;
  }

  .cweight {
    margin-bottom: 15px;
  }

  .p-main-right .cweight>div>i {
    position: absolute;
    color: white;
    background-color: #fa9dac;
    /* border:2px solid white; */
    border-radius: 50%;
    left: -6px;
    top: -6px;
  }

  .p-main-right .details>div {
    display: inline-block;
    width: 213px;
    line-height: 22px;
    /* float:left; */
    margin-bottom: 18px;
  }

  .details {
    margin-top: 20px;

  }

  .count {
    margin-top: 20px;
  }

  .count>h3 {
    display: inline-block;
    padding: 5px 10px;
    font-size: 30px;
    padding: 0;
    margin-bottom: 20px;

  }

  .count>h3.iconfont:before {
    cursor: pointer;
    color: #fa9dac;
  }

  .count>div {
    display: inline-block;
    width: 20px;
    height: 30px;
  }

  .count {
    /*双击文字、input等，出现的蓝色底色，如何去除*/
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    /*-khtml-user-select:none;!*早期浏览器*!*/
    user-select: none;
  }

  .count>h3>input {
    padding: 0;
    font-size: 27px;
    font-weight: 500;
    /* margin:0 15px; */
    color: #fa9dac;
    text-align: center;
    width: 65px;
  }

  .buy>span {
    cursor: pointer;
    border: 1px solid #fa9dac;
    display: inline-block;
    text-align: center;
    padding: 6px;
    width: 130px;
    margin: 10px 20px 0 0;
    border-radius: 5px;
  }

  .buy>span:nth-child(2) {
    background-color: #fa9dac;
    color: white;
  }

  /* 第一部分右边2 */
  /* 第一部分2 */
  hr {
    border: 0.5px solid #ccc;
  }

  /* 第二部分商品详情开始1 */
  .p-details {
    padding-top: 80px;
  }

  .p-details .detail-one>h5 {
    display: inline-block;
    color: #878787;
    margin-left: 50px;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
  }

  .detail-one {
    position: relative;
  }

  .p-details .detail-one .xian {
    border: 1.5px solid #fa9dac;
    width: 50px;
    position: absolute;
    left: 50px;
    top: 36px;
    background:#fa9dac;
    transition: all .6s linear;
    /* height:50px; */
    display: inline-block;
  }

  .p-details .detail-one>h5:nth-child(2):hover+.xian {
    left: 180px;
  }

  .detail-two {
    margin-top: 40px;
    display: block;
    margin-left: 100px;
  }

  .detail-two>span {
    display: inline-block;
    width: 200px;
    color: #878787;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .detail-two h5 {
    color: red;
    /* text-align: center; */
    margin: 20px;
    font-size: 15px;
    letter-spacing: 5px;
  }

  .detail-two h3 {
    color: #333;
    line-height: 3;
    /* text-align: center; */
    font-size: 15px;
    letter-spacing: 5px;
  }

  /* 图片区域开始1 */
  .pro-img {
    margin-top: 50px;
  }

  .pro-img>img,
  #lg_img>img {
    width: 100%;
  }

  /* 图片区域开始2 */
  /* 配送区域开始1 */
  .distribution {
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 1px solid #fa9dac;
  }

  .distribution>div>i {
    display: inline-block;
    background-color: #fa9dac;
    color: white;
    padding: 2px 8px;
    border-radius: 5px;
    margin-right: 10px;
    /* line-height:1.6; */
    margin-bottom: 15px;
  }

  /* 配送区域开始2 */
  /* 第二部分商品详情开始2 */
</style>