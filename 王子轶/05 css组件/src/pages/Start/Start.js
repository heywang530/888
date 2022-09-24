// 引入React
import React, { Component } from 'react';

// 引入Banner
import Banner from '../../components/Banner/Banner';
// 引入Content
import Content from '../../components/Content/Content';

// 引入axios
import axios from 'axios';

// 引入样式文件
import './Start.less';

// 定义组件类
export default class Start extends Component {
    // 定义构造函数
    constructor(props) {
        super(props);
        this.state = {
            title: '起步',
            intro: '简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。',
            url: '/data/start.json',
            // 数据变量
            arr: []
        }
    }

    // 组件创建完毕之后
    componentDidMount() {
        axios.get(this.state.url)
            .then(({ data }) => this.setState({ arr: data }))
    }
    
    

    render() {
        // 解构数据
        let { style } = this.props;
        // 解构数据
        let { title, intro, arr } = this.state;
        return (
            <div className="start-page" style={{ display: style ? '' : 'none' }}>
                <Banner title={title} intro={intro}></Banner>
                <Content arr={arr}></Content>
            </div>
        );
    }
}



