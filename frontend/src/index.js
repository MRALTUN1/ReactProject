import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export { default as Create } from "./Create";
export { default as List } from "./List";


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);