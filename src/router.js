import VueRouter from 'vue-router';

//定义组件
//nav导航组件
import navbar from "./components/index/navbar.vue";
import carouselPic from "./components/index/carouselPic.vue";
import contentTas from "./components/index/contentTas.vue";
import userBox from "./components/index/userBox.vue";
import commentBox from "./components/index/commentBox.vue";
var router = new VueRouter({
    routes: [{
            path: '/',
            components: {
                index_navbar: navbar,
                index_carouselPic: carouselPic,
                index_contentTas: contentTas,
                index_userBox: userBox,
                index_commentBox: commentBox,
            }
        }
        // { path: '/index', components: { index_navbar: navbar } },
        // { path: '/index/carouselPic', components: carouselPic },
        // { path: '/index/contentTas', components: contentTas },
        // { path: '/index/userBox', components: userBox },
        // { path: '/index/commentBox', components: commentBox },
    ]
})
export default router;