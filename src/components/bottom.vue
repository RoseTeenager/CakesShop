<template>
    <div>
	<footer>
      <!-- 页面底部开始 -->
      <div class="footer">
        <div class="wid">
            <ul class="clearfix">
              <li><a href="#">回到顶部</a></li>
              <li><a href="#">产品介绍</a></li>
              <li><a href="#">优惠产品</a></li>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">联系我们</a></li>
            </ul>
        </div>
      </div>
      <!-- 页面底部结束 -->
        </footer>
    </div>
</template>


<script>
export default {
    name:'bottom',
}
</script>

<style>
.footer {
       width: 99%;
    height: 92px; 
    text-align: center;
    background-color: #fa9dac;
    position: relative;
    margin-left: 9px;
}

.footer>.wid {
  padding: 20px;
}

.footer ul {
  margin: 10px auto;
}

.footer ul>li {
  display: inline-block;
  margin: 10px;
}

.footer ul a {
  color: white;
  font-size: 14px;
}

.footer ul a:hover {
  color: black;
}

.footer .hr {
  color: rgb(85, 59, 63);
  font-size: 12px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(246, 195, 203);
}

.footer i,
.footer i a {
  color: rgb(85, 59, 63);
  font-size: 12px;
  font-style: normal;
  display: inline-block;
  margin-top: 10px;
}

.footer i a:hover {
  color: white;
}

.footer .flower img {
  position: absolute;
  display: inline-block;
  /* width: 30px; */
  animation:flower 1.5s linear infinite;
}

</style>