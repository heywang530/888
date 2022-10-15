// 引入核心库
import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入store
import store, { deal } from './store';
// 引入Provider
import { Provider } from 'react-redux';
// 引入路由模块
import { HashRouter, withRouter } from 'react-router-dom';
// 引入App
import App from './App';

// 拓展store数据
let DealStoreApp = deal(App);

// 再次拓展路由数据
let DealRouterApp = withRouter(DealStoreApp);


// 渲染
render(
    <HashRouter>
        <Provider store={store}>
            <DealRouterApp></DealRouterApp>
        </Provider>
    </HashRouter>
, document.getElementById('app'));