import React from 'react';
import ReactDom from 'react-dom';

import Icon from './icon/icon';

const fu:React.MouseEventHandler =(e)=>{
    // console.log(e);
    // console.log(e.target);
    // // target 可以是很多东西 他们可能没有href
    // // 所以这里做个断言 如果是 SVGUseElement 那就有 href
    // // 这里的操作 思路是
    // // 如果不想太早的确定类型  或者不能明确类型的话
    // // 可以先断言猜测下  当作什么类型来处理
    // // 坏处是 这么操作可能是错的
    // console.log((e.target as SVGUseElement).href)

    console.log(e)
};
ReactDom.render(<Icon type='code'  onClick={fu}/>, document.getElementById('root'));
