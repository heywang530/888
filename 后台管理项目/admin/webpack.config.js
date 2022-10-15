// 引入path
const path = require('path');
// 定义根目录
const root = process.cwd();

// 发布html文件用html-webpack-plugin插件
let HtmlWebpackPlugin =  require('html-webpack-plugin');
// 引入拆分css的插件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css使用optimize-css-assets-webpack-plugin插件
// let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


// 定义配置对象
const config = {
    // 定义环境
    mode: 'development',
    // mode: 'production',
    // 入口配置 
    entry: './src/main.js',
    // 出口
    output: {
        // 将静态资源发布到外面的static目录中
        path: path.join(root, '../server/static/admin/'),
        // 发布文件名称
        filename: '[name].js',

        // 静态资源引入的相对位置
        publicPath: '/static/admin/'
    },
    // 配置加载机
    module: {
      // 定义规则
      rules: [
            // js | jsx
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                // 排除目录
                exclude: /node_modules/,
                // 配置
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    // 按需加载
                    plugins: [
                        ["import", { libraryName: "antd-mobile", style: "css" }] ]
                }
            },

            // 配置css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // 配置less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    // 使用插件
    plugins: [
        // 拆分html
        new HtmlWebpackPlugin({
            // template 	定义模板文件位置
            template: path.join(root, './public/index.html'),
            // filename		模板文件发布位置
            filename: path.join(root, '../server/views/admin.html'),
            // hash 		是否添加指纹（添加在query上）
            hash: true
        }),

        // 拆分css
        new MiniCssExtractPlugin({
            // 发布的位置 相对于path来说
            filename: './style.css'
        }),

        // 压缩css
        // new OptimizeCssAssetsWebpackPlugin()
    ],

    // 优化库文件
    optimization: {
        // 拆分文件
		splitChunks: {			
            // 公用缓存分组
			cacheGroups: {		
				lib: {
                    // 库文件名称
					name: 'lib',
                    // 初始化的时候
					chunks: 'initial',
					test: /node_modules/
				}	
            }	
        }	
    }
}

// 暴露接口
module.exports = config;
