import React, {Fragment} from 'react';
import './style.scss';
interface Props {
    visible: boolean;
}

const Modal: React.FunctionComponent<Props> = (props) => {
    const {visible,children} = props;
    const onClickMask= ()=>{};
    return (visible ?
        <Fragment>
            <div className="und-modal-mask" onClick={onClickMask}/>
            <div className='und-modal'>
                <header>
                    title
                </header>
                {/*closeBtn不应该放进header里 放进去就暗示着 想有closeBtn就必须有header*/}
                <div className="closeBtn">x</div>
                <main>
                    {children}
                </main>
                <footer>
                    <button>1</button>
                    <button>2</button>
                </footer>
            </div>
        </Fragment>
        :
        null);
};
export default Modal;
