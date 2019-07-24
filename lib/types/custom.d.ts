// 声明所有的svg文件 至少导出一个玩意
// 没有下面这段
//  import code from '../../icons/code.svg';
// 会报错  因为根本找不到
declare module '*.svg'{
    const content :any;
    export default content
}

declare module '*.md'{
    const content :any;
    export default content
}
