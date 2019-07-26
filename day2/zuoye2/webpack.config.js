// 原生模块，处理路径
const path = require('path');
const newLocal = 'production';
// 导出模块
module.exports = {
    mode: newLocal,
    // 入口
    entry: './src/demo.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [{
                // 匹配后缀为css的文件
                test: /\.css$/,
                // 用两个加载器style-loader和css-loader
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};