import React from 'react';
import ReactDOM from 'react-dom';
import WellForm from './component/WellForm';
import NotWellForm from './component/NotWellForm';
import AttentionForm from './component/AttentionForm';
import OtherForm from './component/OtherForm';
import './index.css';
import './component/App.scss'
import 'github-fork-ribbon-css/gh-fork-ribbon.css';

ReactDOM.render( <WellForm/> , document.getElementById('wellForm'));
ReactDOM.render(<NotWellForm/> , document.getElementById('notWellForm'));
ReactDOM.render(<AttentionForm/>,document.getElementById('attentionForm'));
ReactDOM.render(<OtherForm/>,document.getElementById('OtherForm'));