import React, {Fragment, ReactElement, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {classNamePrefix,joinBySpace} from '../Tools/strTool';
import './style.scss';

interface Props {
    visible: boolean;
    width?: number | string;
    title?: string;
    onNo: () => void;
    onYes?: () => void | undefined;
    noText?: string;
    yesText?: string;
    className?: string;
    // 点击mask 是否关闭
    closeOnClickMask?: boolean;
    // mask 是否透明
    maskInvisible?: boolean;
    footer?: boolean;
    header?: boolean;
    //
    buttons?: Array<ReactElement>;
}

interface AlertProps {
    title?: string;
    content?: string;
    onYes?: () => void;
    buttons?: Array<ReactElement>;
}
// 优化思路
// alert 调用 Modal
// Modal 的 prefix 可穿  这样灵活
// 准备多个 className 函数


// modalC is modalClassNamePrefix  for short
// alertC is alertClassNamePrefix  for short
const modalC = classNamePrefix('und-modal');
const alertC = classNamePrefix('und-alert');
const renderFooter =(onNo:()=>void, onYes?:()=>void, buttons?: Array<ReactElement>, noText?:string, yesText?:string)=>{
    const handleButtonKeyUp = (e: React.KeyboardEvent, flag: boolean) => {
        if (e.key === 'Enter' || e.key === 'enter') {
            flag ?
                onNo() :
                onYes && onYes()
        }
    };
    return <footer className={modalC('footer')}>
        {
            buttons && buttons.length ? buttons.map((btn, index) => {
                    React.cloneElement(btn, {key: index});
                }) :
                <Fragment>
                    <button onClick={onNo} onKeyUp={(e) => handleButtonKeyUp(e, false)}>{noText || 'no'}</button>
                    <button onClick={onYes} onKeyUp={(e) => handleButtonKeyUp(e, true)}>{yesText || 'yes'}</button>
                </Fragment>
        }
    </footer>;
};
const Modal: React.FunctionComponent<Props> = (props) => {
    const {
        visible, title, footer, children, header, width,
        closeOnClickMask, maskInvisible,className,
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
        if (key === 'Escape' || key === 'Esc' || key === 'esc') {
            e.preventDefault();
            onNo()
        }
    };

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
            <div className={maskInvisible ? modalC(['mask', `mask-invisible`]) : modalC(`mask`)} onClick={onClickMask}/>
                <div className={className?joinBySpace('und-modal',className):'und-modal'} style={{width}}>
                {
                    header &&
                    (<header className={modalC('header')}>
                        {title}
                        <div className={modalC('close-icon')}><Icon type='close' onClick={onNo}/></div>
                    </header>)
                }
                {/*closeBtn不应该放进header里 放进去就暗示着 想有closeBtn就必须有header*/}
                <main className={joinBySpace(modalC(['main']))}>
                    {children}
                </main>
                {footer ? renderFooter(onNo,onYes,buttons,noText,yesText) : null}
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
    onYes: () => {
    },
    width: 360,
};

const confirm = function (config: AlertProps) {
    const {title, content, buttons, onYes} = config;
    const div = document.createElement('div');
    const close = () => {
        ReactDOM.render(React.cloneElement(modal, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const mainNode = (
        <div className={alertC('main')}>
            {title ? <div className={alertC('title')}>
                <Icon type='code'/>
                {title}
            </div> : null}
            {content ? <div className={alertC('content')}>{content}</div> : null}
        </div>
    );
    const modal = (<Modal
        visible={true}
        header={false}
        buttons={buttons}
        className='und-alert'
        onNo={close}
        onYes={()=>{
            close();
            onYes&&onYes()
        }}
    >
        {mainNode}
    </Modal>);
    document.body.append(div);
    ReactDOM.render(modal, div);
};

export {confirm};
export default Modal;
// visible: boolean;
// title?: string;
// onNo:() => void;
// onYes?: () => void|undefined;
// noText?: string;
// yesText?: string;
// // 点击mask 是否关闭
// closeOnClickMask?: boolean;
// // mask 是否透明
// maskInvisible?: boolean;
// footer?: boolean;
// header?: boolean;
// //
// buttons?: Array<ReactElement>;