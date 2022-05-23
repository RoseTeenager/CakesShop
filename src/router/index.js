import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import indexView from '../views/indexView.vue'
import backView from '../views/backView.vue'
import axios from 'axios'
Vue.use(VueRouter)

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
const routes = [
  {
    path:'/',
    redirect:'/indexView'  //重定向到Home
},
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/indexView',
    name: 'indexView',
    component: indexView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/backView',
    name: 'backView',
    component: backView,
    children:[
      {
        path:'goods',
        name:'goods',
      components:{
        table:() => import('../views/goodsView.vue'),
      }
      },
      {
        path:'users',
        name:'users',
      components:{
        table:() => import('../views/userView.vue')
      }
      },
      {
        path:'addGoods',
        name:'addGoods',
      components:{
        table:() => import('../views/Addgoods.vue')
      }
      },
      {
        path:'goodsType',
        name:'goodsType',
      components:{
        table:() => import('../views/goodsType.vue')
      }
      },
      {
        path:'addGoodsType',
        name:'addGoodsType',
      components:{
        table:() => import('../views/AddgoodsType.vue')
      }
      },
      {
        path:'Addusers',
        name:'Addusers',
      components:{
        table:() => import('../views/Addusers.vue')
      }
      },
      {
        path:'orderView',
        name:'orderView ',
      components:{
        table:() => import('../views/orderView.vue')
      }
      },
    ]
  },
  {
    path:'/portal',
    component:() => import('../views/PortalRouter.vue'),
    children: [
      { 
        path: '', 
        component: () => import('../views/protal-all/Pro-personal') 
      },

      {
        path: 'my-details',
        component: () => import('../views/protal-all/Pro-mydetails')
      },
      {
        path:'my-order/:state?',
        name: 'myOrder',
        component:() => import('../views/protal-all/Pro-myorder')
      },
    ],
  },
  {
    path:'/detail',
    component:() => import('../views/Detail.vue')
  },
  {
    path:'/cart',
    component:() => import('../views/cart.vue')
  },
  {
    path:'/order',
    component:() => import('../views/Order.vue')
  },
  {
    path:'/type',
    component:() => import('../views/type.vue')
  },
  {
    path:'/pay',
    component:() => import('../views/pay.vue')
  },
  {
    path:'/sale',
    component:() => import('../views/sale.vue')
  },
  ]
  

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
if (to.path === '/indexView') {
return next()
}  else if (to.path === '/register') {
return next()
} else if (to.path === '/login') {
return next()
} else if (to.path === '/portal') {
return next()
} 
else{	
// 获取token
const user=JSON.parse(localStorage.getItem('user'));
const tokenStr = user.token;
       if (!tokenStr) {
         alert('您无权访问该页面，请先登录！');
          next({path:'/login'})
     } else {
          axios({
      url:"http://localhost:8080/api/CakeShopBackground_war/checkTokenServlet",
      method:'get',
      headers:{
        Authorization:tokenStr
    }	 			
  }).then((response)=>{
  console.log(response.data);
  if(!response.data){
   alert("登录超时，请重新登录"); 
   localStorage.removeItem('user');
   next({path:'/login'}) 

  }else{
    next()
  }
  }).catch((error)=>{
    console.log(error);
  }
  )
}
}
})


export default router
