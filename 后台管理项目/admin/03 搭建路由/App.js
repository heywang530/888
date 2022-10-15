// 引入核心库
import React, { Component } from 'react';
// 引入Home
import Home from './pages/Home/Home';
// 引入Login
import Login from './pages/Login/Login';

// 定义组件类
export default class App extends Component {
    render() {
        console.log('app', this.props);

        // 判断store中的state
        if (this.props.state.username) {
            return <Home></Home>
        } else {
            // 说明没有登录
            return <Login></Login>

            // return <h1>asd</h1>
        }
       
    }
}