import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './http'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios) // 安装插件
import { Button, Select,Carousel, CarouselItem,Form,FormItem,Input,Menu,MenuItem,Submenu, Row,Container,Aside,Header,Dropdown,DropdownMenu,DropdownItem,
         Main,Table,TableColumn,MenuItemGroup,Checkbox,Card,Avatar,breadcrumb,BreadcrumbItem,} from 'element-ui';
import router from './router'
import { Col } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Col)
Vue.use (Row)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(MenuItemGroup)
Vue.use(Checkbox)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(breadcrumb)
Vue.use(BreadcrumbItem)




Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
