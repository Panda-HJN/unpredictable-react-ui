import React, {Fragment, ReactElement, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {classNamePrefix} from '../Tools/classNameTool';
import './style.scss';

interface Props {
    visible: boolean;
    width?: number | string;
    title?: string;
    onNo:() => void;
    onYes?: () => void|undefined;
    noText?: string;
    yesText?: string;
    // 点击mask 是否关闭
    closeOnClickMask?: boolean;
    // mask 是否透明
    maskInvisible?: boolean;
    footer?: boolean;
    header?: boolean;
    //
    buttons?: Array<ReactElement>;
}

const c = classNamePrefix('und-modal');

const Modal: React.FunctionComponent<Props> = (props) => {
    const {
        visible, title, footer, children, header, width,
        closeOnClickMask, maskInvisible,
        buttons, noText, yesText, onNo, onYes
    } = props;

    const onClickMask = (e: React.MouseEvent<Element, MouseEvent>) => {
        if (closeOnClickMask) {
            onNo();
        }
    };
    // 这里要注意
    // handleEsc 是用在原生dom 上的
    // 收到的是原生的 KeyboardEvent

    // handleNo  handleYes 是绑定在 React Node 上的/
    // 它的 e 其实是 一个 react 包装过的 KeyboardEvent
    // 所以声明为 e:React.KeyboardEvent
    const handleEsc = (e: KeyboardEvent) => {
        const key = e.key;
        if (key === 'Escape' || key === 'Esc'||key === 'esc') {
            e.preventDefault();
            onNo()
        }
    };
    const handleNo = (e:React.KeyboardEvent) => {
        if (e.key === 'Enter'||e.key === 'enter') {
            onNo()
        }
    };
    const handleYes = (e:React.KeyboardEvent) => {
        if (e.key === 'Enter'||e.key === 'enter') {
            onYes&&onYes()
        }
    };
    const renderFooter = <footer className={c('footer')}>
        {
            buttons && buttons.length ? buttons.map((btn, index) => {
                    React.cloneElement(btn, {key: index});
                }) :
                <Fragment>
                    <button onClick={onNo}  onKeyUp={handleNo}>{noText || 'no'}</button>
                    <button onClick={onYes} onKeyUp={handleYes}>{yesText || 'yes'}</button>
                </Fragment>
        }
    </footer>;
    useEffect(
        () => {
            window.addEventListener('keydown', e => {
                handleEsc(e)
            });
            return () => {
                window.removeEventListener('keydown', e => {
                    handleEsc(e)
                });
            };
        },
        []
    );
    const result = visible &&
        <Fragment>
            <div className={maskInvisible ? c(['mask', `mask-invisible`]) : c(`mask`)} onClick={onClickMask}/>
            <div className='und-modal' style={{width}}>
                {
                    header &&
                    (<header className={c('header')}>
                        {title}
                        <div className={c('close-icon')}><Icon type='close' onClick={onNo}/></div>
                    </header>)
                }
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
    header: true,
    onYes: ()=>{},
    width: 360,
};

//export {warning, confirm, error};
export default Modal;
