// 引入React
import React, { Component } from 'react';

// 引入Atricle
import Atricle from '../Article/Article';
// 引入Aside
import Aside from '../Aside/Aside';


// 引入样式文件
import './Content.less';

// 定义组件类
export default class Content extends Component {
    render() {
        // 解构数据
        let { arr } = this.props;
        return (
            <div className="content-com">
                <div className="container" style={{ display: 'flex' }}>
                    <Atricle arr={arr}></Atricle>
                    <Aside arr={ arr.map(({ id, title }) => ({ id, title })) }></Aside>
                </div>
            </div>
        );
    }
}


