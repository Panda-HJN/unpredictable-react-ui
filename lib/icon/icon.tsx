import React from 'react';
import classNameTool from '../Tools/classNameTool';
import './importAllSvg.js';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
    type: string;
    //onClick:(e:React.MouseEvent)=>void
    // 改为默认的鼠标事件处理函数
    onClick?: React.MouseEventHandler<SVGElement>
}

// 为了让 IconProps 能支持更多的事件
// 需要 onTouch ...... 更多的处理函数
// 但是二三十个东西都写在 IconProps 里会很蠢
// 有什么操作能让它全都支持呢??

// 查看 MouseEventHandler 相关的源码最终可追溯到
// DOMAttributes 这个类
// 这里面几乎有所有的事件

// 再搜索 HTMLAttributes 继承了 DOMAttributes
// 还有一个 SVGAttributes 继承了 DOMAttributes
// 显然 Icon 这个使用svg 的组件 需要 SVGAttributes
// 所以 只需要让  IconProps  继承 SVGAttributes 就可以了
const Icon: React.FunctionComponent<IconProps> =
    ({className, type, ...restProps}) => {
        return (
            <svg
                //className={`unp-icon ${className}`}
                className={classNameTool('unp-icon', className)}
                {...restProps}
            >
                <use xlinkHref={`#${type}`}/>
            </svg>
            );
    };

export default Icon;

