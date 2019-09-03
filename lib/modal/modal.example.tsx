import React, {useState} from 'react';
import Modal,{confirm} from './modal';

export default function () {
    const [visible1, changeVisible1] = useState(false);
    const [visible2, changeVisible2] = useState(false);
    const [visible3, changeVisible3] = useState(false);
    const showAConfirm = ()=>{
        confirm({
            title:'Title',
            content:'内容内容',
            onYes:()=>{
                console.log('afterClose')
            }
        })
    }
    return (
        <div>
            <div onClick={() => changeVisible1(!visible1)}>一号</div>
            <div onClick={() => changeVisible2(!visible2)}>二号</div>
            <div onClick={() => changeVisible3(!visible3)}>三号</div>
            <div onClick={showAConfirm}>confirm</div>
            <Modal
                visible={visible1}
                closeOnClickMask={false}
                header={false}
                footer={false}
                onNo={() => changeVisible1( false)}
                title='Title111'
            >
                111
            </Modal>
            <Modal
                visible={visible2}
                maskInvisible
                onNo={() => changeVisible2(false)}
                title='Title222'
                yesText='我看行'
                noText='我觉得不行'
            >
                222
            </Modal>
            <Modal
                visible={visible3}
                onNo={() => changeVisible3(false)}
                title='Title333'
            >
                333
            </Modal>
        </div>
    );
}

// z-index 应该做好管理
//
// 根据各模块性质做好z-index 数值划分

// 例如
// 背景区  1~5
// 内容 10~29
// 菜单  50~69
// modal 100~120
// 广告   150~170
// 区和区之间留下间隙 方便后面有新的类别
// 总的来说 数值越少 越好  对后续维护越友好
