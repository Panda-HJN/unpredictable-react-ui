import React from 'react';
import '../../icons/code.svg';
interface IconProps {
    name: string
}
const Icon:React.FunctionComponent<IconProps>=(props)=> {
    return (<span>
        <svg>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    </span>)
};

export default Icon;

