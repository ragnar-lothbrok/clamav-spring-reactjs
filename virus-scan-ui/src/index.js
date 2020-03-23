import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileUploadComponent from './fileUploadM';
import axios from 'axios';

window['axios'] = axios;

ReactDOM.render(
    <div>
        <FileUploadComponent/>
    </div>
    , document.getElementById('root'));
