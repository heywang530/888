// 引入React
import React, { Component } from 'react';
// 引入Header组件
import Header from './components/Header/Header';
// 引入Home页面
import Home from './pages/Home/Home';

// 定义组件类
export default class App extends Component {
    // 定义构造函数
    constructor(props) {
        super(props);
        this.state = {
            // 该字段表示应该显示哪个页面
            // page: 'component'

            // 可以将属性作为状态存在
            page: props.page
        }
    }
    

    render() {
        return (
            <div>
                {/* header组件 */}
                {/* 父向子传递数据 还要实现 子向父通信 */}
                <Header page={this.state.page} method={ page => this.setState({ page }) }></Header>
                {/* 模拟页面 */}
                <Home style={ this.state.page === 'home'}></Home>
                <h1 style={{ display: this.state.page === 'start' ? '' : 'none' }}>起步</h1>
                <h1 style={{ display: this.state.page === 'css' ? '' : 'none' }}>全局 CSS 样式</h1>
                <h1 style={{ display: this.state.page === 'component' ? '' : 'none' }}>组件</h1>
                <h1 style={{ display: this.state.page === 'js' ? '' : 'none' }}>JavaScript 插件</h1>
                <h1 style={{ display: this.state.page === 'marker' ? '' : 'none' }}>定制</h1>
            </div>
        );
    }
}

// 定义默认数据
App.defaultProps = {
    page: 'home'
}