//初始化
import './css/normalize.css'
import './css/index.css'
//加载 Vue 相关组件
import Vue from 'vue'
import axios from "axios"
//Vue.use(axios);
axios.defaults.baseURL = 'http://localhost:3000' //'http://www.baidu.com/'; //
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//加载自定义路由
import router from './router.js'
//加载首页组件
import app from './App.vue'
//加载element ui
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);
// 加载帮助类
import common from './js/common.js'
Vue.prototype.common = common


// // 或者

// Vue.prototype.$axios = axios


var vm = new Vue({
    el: "#app",
    render: h => h(app),
    router: router
})