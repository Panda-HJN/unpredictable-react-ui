import React from 'react';

interface Props {
    visible: boolean
    children: any
}

const Modal: React.FunctionComponent<Props> = (props) => {
    const {visible} = props;
    return (visible ?
        props.children :
        null);
};
export default Modal;
