import React, {Fragment} from 'react';
import {Icon} from '../index'
import {classNamePrefix} from '../Tools/classNameTool';
import './style.scss';

interface Props {
    visible: boolean;
    title?: string;
}

const Modal: React.FunctionComponent<Props> = (props) => {
    const {visible,title,children} = props;
    const c =classNamePrefix('und-modal');
    const onClickMask= ()=>{};
    return (visible ?
        <Fragment>
            <div className={c('mask')} onClick={onClickMask}/>
            <div className='und-modal'>
                <header className={c('header')}>
                    {title}
                    <div className={c('close-icon')}><Icon type='close'/></div>
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
        </Fragment>
        :
        null);
};
export default Modal;
