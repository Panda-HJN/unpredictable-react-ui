const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode: 'production',
    entry:{
        index:'./lib/index.tsx'
    },
    output:{
        path:path.resolve(__dirname, 'dist/lib'),
        library: 'unpredictable-react-ui', // 这个库叫啥
        libraryTarget: 'umd', // 设置模块类型 UMD为兼容模块
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
