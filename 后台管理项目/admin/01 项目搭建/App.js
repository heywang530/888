// 引入核心库
import React, { Component } from 'react';
// 引入Home
import Home from './pages/Home/Home';

// 定义组件类
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>app part</h1>
                <hr />
                {/* 首页 */}
                <Home></Home>
            </div>
        );
    }
}