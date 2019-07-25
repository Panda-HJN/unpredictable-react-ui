import React from 'react';
import './importAllSvg.js';
import './icon.scss';
interface IconProps {
    type: string;
    //onClick:(e:React.MouseEvent)=>void
    // 改为默认的鼠标事件处理函数
    onClick:React.MouseEventHandler<SVGElement>
}
const Icon:React.FunctionComponent<IconProps>=(props)=> {
    return (
        <svg  className='unp-icon' onClick={props.onClick}>
            <use xlinkHref={`#${props.type}`}/>
        </svg>)
};

export default Icon;

