// 引入核心库
import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入store
import store, { deal } from './store';
// 引入Provider
import { Provider } from 'react-redux';
// 引入App
import App from './App';

// 拓展store数据
let DealStoreApp = deal(App);


// 渲染
render(
    <Provider store={store}>
        <DealStoreApp></DealStoreApp>
    </Provider>
, document.getElementById('app'));