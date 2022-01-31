import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css' // ant design navbar css


ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));



// npm i react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2 react-router-dom antd @ant-design/icons

