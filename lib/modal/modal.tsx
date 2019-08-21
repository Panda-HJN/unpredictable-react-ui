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
                    <div className="closeBtn">x</div>
                </header>
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
