// 默认axios 配置全局url：
const BASE_URL = 'http://localhost:3000';
// 配置导航菜单item
var navItem = [
    { id: 1, name: '我的技术栈' },
    { id: 2, name: '个人中心' }
];
// 配置导航菜单item
var contents = [
    { id: 21, title: '从零开始构建Vue项目', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' },
    { id: 22, title: '关于vue-router的使用详解', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' },
    { id: 23, title: '关于vue-router的使用问题汇总', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' },
    { id: 24, title: 'webpack怎么使用', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' },
    { id: 25, title: '关于打包工具的比较', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' },
    { id: 26, title: '关于前端的一点遐想', content: '从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目从零开始构建Vue项目' }
];
contents.forEach((item, index) => {
    item.sortNum = index + 1;
    item.active = false;
});
var common = {
    BASE_URL,
    navItem,
    contents
};
export default common