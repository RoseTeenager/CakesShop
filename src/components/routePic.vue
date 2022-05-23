<template>
   <div class="block">
    <el-carousel height="480px"  >
      <el-carousel-item >
        <a class="small"><img src="../assets/1-1.jpg" alt=""></a>
      </el-carousel-item>
       <el-carousel-item >
        <a class="small"><img src="../assets/2-1.jpg" alt=""></a>
      </el-carousel-item>
       <el-carousel-item >
        <a class="small"><img src="../assets/3-1.jpg" alt=""></a>
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'routePic',
    
}
</script>

<style>
.el-carousel--horizontal{
    margin-top: -20px;
}
.small img{
    width: 100%;
    height: 100%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{
    width: 100%;
    height: 400px;
    background-color: #fff;
    margin-top: 20px;
  }
</style>