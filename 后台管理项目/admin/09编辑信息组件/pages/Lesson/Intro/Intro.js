// 引入核心库
import React, { Component } from 'react';
//引入ReactQuill
import ReactQuill from 'react-quill';
import { WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

//引入三个样式文件
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

// 定义组件类
export default class LessonIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    //发送请求,在服务器端发送getintro
    getData() {
        //解构数据
        let { params } = this.props.match;
        axios.get('/admin/lesson/getintro', { params })
            .then(({ data }) => {
                if (data.errno === 0) {
                    this.setState(data);
                } else {
                    Toast.info(data.msg);
                }
            })

    }

    //组件构建完毕
    componentDidMount() {
        this.getData();
    }

    //组件数据更新的时候
    componentDidUpdate(props) {
        if (props.match.url !== this.props.match.url) {
            this.getData();
        }
    }

    //定义提交的方法
    subMit() {
        let { data } = this.state;

        //判断是否具备lesson字段（数据库查找该数据的依据）
        if (!data.lesson) {
            data.lesson = this.props.match.params.id;
        }
        // console.log(111, data);

        axios.post('/admin/lesson/saveintro', data)
            .then(({ data }) => {
                if (!data.errno) {
                    //返回上一个页面
                    this.props.history.goBack();
                } else {
                    Toast.info(data.msg);
                }
            })
    }

    render() {
        //解构状态数据 (不要解构数据  不是一个严格约束控件)
        // let { data } = this.state;
        // console.log(111, data);
        return (
            <div>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>

                {/* 使用组件 */}

                <WingBlank>
                    <ReactQuill
                        value={this.state.data.content}
                        //修改content, ...this.state.data之前的数据
                        onChange={content => this.setState({ data: { ...this.state.data, content } })}
                    >
                    </ReactQuill>
                </WingBlank>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>

                <WingBlank>
                    <Button type="primary" onTouchEnd={e => this.subMit(e)}>提交</Button>
                </WingBlank>
            </div>
        );
    }
}