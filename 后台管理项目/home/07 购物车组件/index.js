// 引入核心库
import React from 'react';
// 引入渲染库
import ReactDOM from 'react-dom';
// 引入全局样式文件
import './base.less';
// 引入应用程序文件
import App from './App';
// 引入路由模块
import { HashRouter, withRouter } from 'react-router-dom';
// 引入Provider
import { Provider } from 'react-redux';
// 引入store
import store, { deal } from './store';


// 1先拓展store数据
let DealStoreApp = deal(App);
// 2再拓展路由数据
let DealRouterApp = withRouter(DealStoreApp);

// 渲染
ReactDOM.render(
    <Provider store={store}>
         <HashRouter>
            <DealRouterApp />    
        </HashRouter>
    </Provider>
   
, document.getElementById('root'));
