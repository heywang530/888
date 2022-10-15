// 引入核心库
import React, { Component } from 'react';
// 引入Home
import Home from './pages/Home/Home';
// 引入Login
import Login from './pages/Login/Login';

// 引入getUserInfo消息
import { getUserInfo } from './actions';

// 定义组件类
export default class App extends Component {

    // 组件创建完毕之后 
    componentDidMount() {
        // 发送一个获取用户名称的消息
        this.props.dispatch(getUserInfo());
    }

    render() {

        // 判断store中的state
        if (this.props.state.username) {
            return <Home></Home>
        } else {
            // 说明没有登录
            return <Login dispatch={this.props.dispatch}></Login>
        }
       
    }
}