// 引入核心库
import React, { Component } from 'react';
// 引入Link组件
import { Link } from 'react-router-dom';
// 引入ui库模块
import { Pagination, Card, Button } from 'antd-mobile';
// 引入axios
import axios from 'axios';

// 引入样式文件
import './List.less';

// 定义组件类
export default class LessonList extends Component {

    // 定义构造函数
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    // 发送请求
    getData() {
        // 解构数据
        let { params } = this.props.match;
        axios.get('/admin/lesson/list', { params })
            .then(({ data }) => this.setState(data))
    }

    // 组件构建完毕
    componentDidMount() {
        this.getData();
    }

    // 组件数据更新的时候
    componentDidUpdate(props) {
        console.log(666, props);
        if (props.match.url !== this.props.match.url) {
            this.getData();
        }
    }


    // 定义改变页码的方法
    changePage(e) {
        console.log(111, e);
        // 改变路由
        this.props.history.push('/lesson/list/' + e);
    }

    // 点击删除课程
    showAlert(title, id) {

        // 注意: 如果点击删除的时候 同时点击到了模态框的确定或者是取消的按钮 此时可以延迟300ms出现模态框
        Modal.alert(
            `温馨提示`,
            `您确定删除${title}课程吗?`,
            [
                {
                    text: '确定',
                    onPress: () => {
                        // 发送请求
                        axios.post('/admin/lesson/remove', { id })
                            .then(({ data }) => {
                                if (!data.errno) {
                                    // 刷新页面
                                    // location.reload();

                                    // 全局的history
                                    // history.go(0);

                                    // 路由中的history
                                    this.props.history.go(0);
                                }
                            })
                    },
                },
                {
                    text: '取消',
                    onPress() {
                        console.log(111, '取消');
                    },
                }
            ]
        )
    }


    createCard() {
        return this.state.data && this.state.data.map(item => {
            return (
                <Card key={item._id} className="card_item">
                    <Card.Body>
                        <img src={item.img} alt="" />
                        <h2 className="title">{item.title}</h2>
                        <div className="price-part">
                            <span className="price">￥{item.price}</span>
                            <span className="num">{item.sales}与你一起学习</span>
                        </div>
                        <div className="btns">
                            {/* <Button inline size="small" type="primary">编辑信息</Button> */}
                            {/* <Button inline size="small" type="primary">编辑视频</Button>
                        <Button inline size="small" type="primary">修改</Button> */}

                            <Link to={"/lesson/intro/" + item._id} className="am-button am-button-primary am-button-small am-button-inline">编辑信息</Link>
                            <Link to={"/lesson/movies/" + item._id} className="am-button am-button-primary am-button-small am-button-inline">编辑视频</Link>
                            <Link to={"/lesson/edit/" + item._id} className="am-button am-button-primary am-button-small am-button-inline">修改</Link>
                            {/* 点击删除 */}
                            <Button inline size="small" type="warning" onTouchEnd={e => this.showAlert(item.title, item._id)}>删除</Button>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        console.log('lessonlist', this.props);
        return (
            <div className="lessonList">

                {/* 创建卡片 */}
                {this.createCard()}

                {/* 分页器 */}
                <Pagination
                    total={Infinity}
                    current={+this.props.match.params.page}
                    // 点击时候执行的回调
                    onChange={e => this.changePage(e)}
                    simple
                ></Pagination>
            </div>
        );
    }
}