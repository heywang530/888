// 引入核心库
import React, { Component, Fragment } from 'react';

import { WingBlank, WhiteSpace, Button, InputItem, Picker, ImagePicker, List, Toast } from 'antd-mobile';

import UploadMovie from '../../../components/UploadMovie/UploadMovie'
import axios from 'axios';
// 定义组件类
export default class LessonMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    //发送请求
    getData() {
        //解构数据
        let { params } = this.props.match;
        axios.get('/admin/lesson/getmovies', { params })
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

    //组件更新的时候
    componentDidUpdate() {
        if (this.props.match.url !== this.props.match.url) {
            this.getData();
        }
    }

    //创建视频模块
    createMoviesModule(movies) {
        return movies && movies.map((item, index) =>
            <UploadMovie
                key={index}
                {...item}//数据都拿到了
            ></UploadMovie>
        )
    }
    // 创建提交模块
    createSubMitModule() {
        return this.state.data && this.state.data.map(item => {
            return (
                <Fragment key={item._id}>
                    <InputItem
                        placeholder="请输入模块标题"
                        value={item.title}
                    >
                        <Button size="small" inline type="primary">添加视频</Button>
                    </InputItem>
                    <WhiteSpace></WhiteSpace>

                    {/* 视频模块 */}
                    {this.createMoviesModule(item.movies)}

                    <WingBlank>
                        <Button type="warning">提交模块</Button>
                    </WingBlank>
                    <WhiteSpace style={{ height: 40 }}></WhiteSpace>

                </Fragment>

            );
        })
    }


    render() {
        return (
            <div>
                <WhiteSpace style={{ height: 30 }}></WhiteSpace>

                {/* 创建提交模块 */}
                {this.createSubMitModule()}
                <WingBlank>
                    <Button type="warning">创建模块</Button>
                </WingBlank>
                <WhiteSpace style={{ height: 30 }}></WhiteSpace>
            </div>
        );
    }
}
