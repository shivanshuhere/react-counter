import React from "react";
import ReactDom from 'react-dom/client';
import Counter from './Counter'
import './index.css'


ReactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
    <Counter/>
    </React.StrictMode>
)