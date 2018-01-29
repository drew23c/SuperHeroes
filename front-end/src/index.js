import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const PageStyle = props =>(
    <div className="bg">{props.children}</div>
)
ReactDOM.render(
<BrowserRouter>
<PageStyle>
    <App />
</PageStyle>
</BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
