const path = require('path')
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
    }
}
