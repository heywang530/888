// 引入React
import React, { Component } from 'react';

// 引入样式文件
import './Aside.less';

// 定义组件类
export default class Aside extends Component {
    createList() {
        return this.props.arr.map(item => (
            <li key={item.id}>
               <a href={'#' + item.id}>{item.title}</a>
            </li>
        ))
    }


    render() {
        return (
            <div className="aside-com">
                <ul>{this.createList()}</ul>
            </div>
        );
    }
}


