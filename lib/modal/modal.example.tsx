import React, {useState} from 'react';
import Modal from './modal'
export default function () {
    const [visible,changeVisible]=useState(false);
    return <div>
        <div onClick={()=>changeVisible(!visible)}>点我</div>
        <Modal
            visible={visible}
        >
            111
        </Modal>
    </div>;
}

