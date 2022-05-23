const BASE_URL = '';
import axios from "axios";import Vue from "vue";
axios.defaults.timeOut=2000
axios.defaults.baseURL='http://localhost:8080/api/CakeShopBackground_war'
Vue.prototype.$http=axios
