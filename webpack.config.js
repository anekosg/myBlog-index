const path = require('path');
//引入这行 ,必须加 渲染vue组件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 导入自动生成HTMl文件的插件
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production 生产 如果不配置则无法生成 bundle.js文件
    watch: true, //监听main.js 改变后自动打包
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({ //在动生成Html
            template: path.resolve(__dirname, './src/index.html'), //模板路径
            filename: 'index.html' //自动生成的HTML文件的名称
        }),
        new VueLoaderPlugin() //new一个实例
    ],
    module: {
        rules: [

            { test: /.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件的规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
            //  { test: /\.(png|jpg|gif)$/, use: 'url-loader' }, //处理css路径
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=43960' }, // 处理 图片路径的 loader
            // { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' }, //处理指定大于指定字节的图片进行base64编码；
            { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {} }] },
            // { test: /\.js$/, use: 'babel-loader' }, // 处理 .vue 文件的 js 以及兼容ES6语法（将ES6语法转ES5）
            //需要安装babel 的运行时 @babel/core；
            //以及 babel-preset-es2015
            { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
};