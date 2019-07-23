const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //mode: 'production',
   // mode: 'development',
    entry:{
        index:'./lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
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
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html'
    //     })
    // ],
    // externals:{
    //     react:{
    //         // 这四个是对应兼容历史上各种各样的打包方案
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React',
    //     },
    //     'react-dom':{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:'ReactDom',
    //     },
    // }
}
