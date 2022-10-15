// 引入核心库
import React from 'react';
// 引入渲染库
import ReactDOM from 'react-dom';
// 引入全局样式文件
import './base.less';
// 引入应用程序文件
import App from './App';
// 引入路由模块
import { HashRouter } from 'react-router-dom';

// 渲染
ReactDOM.render(
    <HashRouter>
        <App />    
    </HashRouter>
, document.getElementById('root'));
