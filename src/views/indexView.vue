<template>
<div class=".container">
  <top></top>
     <route-pic></route-pic>
    <good></good>
    <hot></hot>
    <bottom></bottom>
</div>
  
</template>

<script>
import top from '@/components/top.vue'
import routePic from '@/components/routePic.vue'
import Good from '@/components/good.vue'
import Hot from '@/components/hot.vue'
import bottom from '@/components/bottom.vue'

export default {
  name: 'indexView',
  components: {top, routePic, Good, Hot ,bottom},
  data() {
    return {
     
    }
  },
  mounted(){
    
  },
}
</script>

<style>
.el-card__body {
   padding: 0;
}
.el-card{
  border: none;
}

</style>