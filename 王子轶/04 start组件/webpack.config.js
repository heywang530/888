// // 定义配置对象
const config = {
    // 定义环境
    mode: 'development',
    // 入口配置
    entry: './src/main.js',
    // 出口
    output: {
        filename: '[name].js'
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
                    presets: ['@babel/env', '@babel/react']
                }
            },

            // 配置less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}

// 暴露接口
module.exports = config;
