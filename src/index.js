import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css' // ant design navbar css
import { Provider } from 'react-redux';
import store from './app/store'; // Redux store

ReactDOM.render(
    <Router>
        <Provider store={store}> 
        {/* Provide store variable to all components in our app */}
            <App/>
        </Provider>
    </Router>, 
    document.getElementById('root'));



// npm i react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2 react-router-dom antd @ant-design/icons

// 1:05:20