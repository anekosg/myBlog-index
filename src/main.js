import Vue from 'vue'
import app from '././App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/normalize.css'
import './css/index.css'



Vue.use(ElementUI);

var vm= new Vue({
    el: '#app',
    render:h=>h(app)
})

 