const base = require('./webpack.config');
module.exports=Object.assign({},base,{
    mode: 'production',
    externals:{
        react:{
            // 这四个是对应兼容历史上各种各样的打包方案
            commonjs:'react',
            commonjs2:'react',
            amd:'react',
            root:'React',
        },
        'react-dom':{
            commonjs:'react-dom',
            commonjs2:'react-dom',
            amd:'react-dom',
            root:'ReactDom',
        },
    }
});
