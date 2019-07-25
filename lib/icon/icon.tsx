import React from 'react';
import './importAllSvg.js';
interface IconProps {
    type: string
}
const Icon:React.FunctionComponent<IconProps>=(props)=> {
    return (<span>
        <svg>
            <use xlinkHref={`#${props.type}`}/>
        </svg>
    </span>)
};

export default Icon;

