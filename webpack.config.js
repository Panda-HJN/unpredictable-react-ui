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
            }
        ]
    },
};
