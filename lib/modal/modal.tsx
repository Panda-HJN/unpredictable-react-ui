import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {classNamePrefix} from '../Tools/classNameTool';
import './style.scss';

interface Props {
    visible: boolean;
    title?: string;
    onCancel: React.MouseEventHandler;
    onOk?: React.MouseEventHandler;
    closeOnClickMask?: Boolean;
    footer?: ReactElement;
}

const Modal: React.FunctionComponent<Props> = (props) => {
    const {visible,title,closeOnClickMask,children,onCancel} = props;
    const c =classNamePrefix('und-modal');
    const onClickMask= (e: React.MouseEvent<Element, MouseEvent>)=>{
        if (closeOnClickMask){
            onCancel(e);
        }
    };
    const result = visible &&
        <Fragment>
            <div className={c('mask')} onClick={onClickMask}/>
            <div className='und-modal'>
                <header className={c('header')}>
                    {title}
                    <div className={c('close-icon')}><Icon type='close' onClick={onCancel}/></div>
                </header>
                {/*closeBtn不应该放进header里 放进去就暗示着 想有closeBtn就必须有header*/}
                <main className={c('main')}>
                    {children}
                </main>
                <footer className={c('footer')}>
                    <button>1</button>
                    <button>2</button>
                </footer>
            </div>
        </Fragment>;
    // 显然 modal 这种 mask 会占满全屏的的东西 要丢到body 下
    return ReactDOM.createPortal(result,document.body)
};
Modal.defaultProps = {
    closeOnClickMask: false
};
export default Modal;
