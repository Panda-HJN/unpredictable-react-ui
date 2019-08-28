import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {classNamePrefix} from '../Tools/classNameTool';
import './style.scss';

interface Props {
    visible: boolean;
    title?: string;
    onNo: React.MouseEventHandler;
    onYes?: React.MouseEventHandler;
    noText?: string;
    yesText?: string;
    // 点击mask 是否关闭
    closeOnClickMask?: boolean;
    // mask 是否透明
    maskInvisible?: boolean;
    footer?: boolean;
    //
    buttons?: Array<ReactElement>;
}

const c = classNamePrefix('und-modal');

const Modal: React.FunctionComponent<Props> = (props) => {
    const {
        visible, title, footer, children,
        closeOnClickMask, maskInvisible,
        buttons, noText, yesText, onNo, onYes
    } = props;
    const onClickMask = (e: React.MouseEvent<Element, MouseEvent>) => {
        if (closeOnClickMask) {
            onNo(e);
        }
    };
    const renderFooter = <footer className={c('footer ')}>
        {
            buttons && buttons.length ? buttons.map((btn, index) => {React.cloneElement(btn, {key: index});}) :
                <Fragment>
                    <button onClick={onNo}>{noText || 'no'}</button>
                    <button onClick={onYes}>{yesText || 'yes'}</button>
                </Fragment>
        }
    </footer>;
    const result = visible &&
        <Fragment>
            <div className={maskInvisible ? c(['mask' ,`mask-invisible`]): c(`mask`)} onClick={onClickMask}/>
            <div className='und-modal'>
                <header className={c('header')}>
                    {title}
                    <div className={c('close-icon')}><Icon type='close' onClick={onNo}/></div>
                </header>
                {/*closeBtn不应该放进header里 放进去就暗示着 想有closeBtn就必须有header*/}
                <main className={c('main')}>
                    {children}
                </main>
                {footer ? renderFooter : null}
            </div>
        </Fragment>;
    // 显然 modal 这种 mask 会占满全屏的的东西 要丢到body 下
    return ReactDOM.createPortal(result, document.body);
};
Modal.defaultProps = {
    closeOnClickMask: true,
    maskInvisible: false,
    footer: true,
};

//export {warning, confirm, error};
export default Modal;
