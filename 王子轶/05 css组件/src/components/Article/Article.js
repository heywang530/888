// 引入React
import React, { Component } from 'react';

// 引入样式文件
import './Article.less';

// 定义组件类

export default class Article extends Component {


    createList() {
        return this.props.arr.map(item => (
            <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </li>
        ))
    }

    render() {
        console.log('Article', this.props);
        return (
            <div className="article-com">
                <ul>{this.createList()}</ul>
            </div>
        );
    }
}


