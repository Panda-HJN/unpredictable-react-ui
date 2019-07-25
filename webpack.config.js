const path = require('path')
module.exports={
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
            },
            {
                test: /icons.+\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.s([ca])ss$/,
                // 这些 loader 的调用逻辑是 遇到 /\.s([ca])ss$/ 这类文件
                // 先使用 sass-loader 转成 css 文件
                // 再用 css-loader 把文件变成 对象/字符串 总之是 可用的数据
                // style-loader 再把上个环节处理完的东西变成 style 标签
                use:[
                    'style-loader', 'css-loader', 'sass-loader',
                ]
            },
        ]
    },
};
