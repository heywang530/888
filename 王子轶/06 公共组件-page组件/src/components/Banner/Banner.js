// 引入React
import React, { Component } from 'react';

// 引入样式文件
import './Banner.less';

// 定义组件类
export default class Banner extends Component {
    render() {
        // 解构数据
        let { title, intro } = this.props;
        return (
            <div className="banner-com">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <p className="intro">{intro}</p>
                </div>
            </div>
        );
    }
}


