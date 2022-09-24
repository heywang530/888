// 引入React
import React, { Component } from 'react';

// 引入Banner
import Banner from '../../components/Banner/Banner';
// 引入Content
import Content from '../../components/Content/Content';

// 引入axios
import axios from 'axios';


// 定义组件类
export default class Page extends Component {
    // 定义构造函数
    constructor(props) {
        super(props);
        this.state = {
            // 数据变量
            arr: []
        }
    }

    // 封装获取数据的方法
    getData() {
        axios.get(this.props.url)
        .then(({ data }) => this.setState({ arr: data }))
    }

    // 组件创建完毕之后
    componentDidMount() {
       this.getData();
    }

    // 更新数据完毕之后
    componentDidUpdate(props) {
        // 判断参数和this中的数据是否相同
        if (props.url !== this.props.url) {
            this.getData();
        }
    }
    

    render() {
        // 解构数据
        // let { style, title, intro } = this.props;
        let { title, intro } = this.props;

        // 解构数据
        let {  arr } = this.state;
        return (
            // <div className="page-page" style={{ display: style ? '' : 'none' }}>
            <div className="page-page">
                <Banner title={title} intro={intro}></Banner>
                <Content arr={arr}></Content>
            </div>
        );
    }

 
}



