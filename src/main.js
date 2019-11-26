import Vue from 'vue'
import app from '././App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/normalize.css'
import './css/index.css'




Vue.use(ElementUI);

// 定义组件
//nav导航组件
import navComponent from "./components/navComponent.vue";
import mainComponent from "./components/mainComponent.vue";
import userBoxComponent from "./components/userBoxComponent.vue";
import recordBoxComponent from "./components/recordBoxComponent.vue";
// mainTabs
import contantTabsComponent from "./components/main/contantTabsComponent.vue";

Vue.component('navComponent',navComponent);
Vue.component('mainComponent',mainComponent);
Vue.component('userBoxComponent',userBoxComponent);
Vue.component('recordBoxComponent',recordBoxComponent);
Vue.component('contantTabsComponent',contantTabsComponent);

var vm= new Vue({
    el: '#app',
    render:h=>h(app)
})

