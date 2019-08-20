import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ModalExample from './lib/modal/modal.example';

import './example.scss';

ReactDOM.render(
    <Router>
        <div className="site-page">
            <h2>组件</h2>
            <ul>
                <li>
                    <NavLink to="/modal">弹窗</NavLink>
                </li>
            </ul>
            <div>
                <Route path="/modal" component={ModalExample}/>
            </div>
        </div>
    </Router>
    ,document.querySelector('#root'));
