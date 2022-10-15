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

    //封装
    update() {
        //更新数据（触发diff）能将更改的数据返回到屏幕上
        this.setState({ data: this.state.data });

    }

    //创建模块
    createModule() {
        //追加数据对象
        this.state.data.push({});
        this.update();

        console.log(333, this.state);
    }

    //改变添加视频的标题,一输入返回内容拿着内容返回title
    changeTitle(title, item) {
        // console.log(111, e, item);
        //修改数据对象的title字段
        item.title = title;
        this.update();

    }

    //添加视频模块
    addMoviesModule(e, item) {
        // console.log(111, e, item);
        //判断item是否具备movies
        if (item.movies) {
            item.movies.push({});
        } else {
            item.movies = [{}];
        }
        //触发diff
        this.update();

    }

    //创建视频模块
    createMoviesModule(movies) {
        return movies && movies.map((item, index) =>
            <UploadMovie
                key={index}
                {...item}//数据都拿到了
                onChangeTitle={e => this.changeUploadtitle(e)}
            ></UploadMovie>
        )
    }
    // 创建提交模块
    createSubMitModule() {// 引入核心库
        import React, { Component, Fragment } from 'react';
        // 引入组件模块
        import { WingBlank, WhiteSpace, Button, InputItem, Picker, ImagePicker, List, Toast } from 'antd-mobile';

        // 引入组件
        import UploadMovie from '../../../components/UploadMovie/UploadMovie';
        // 引入axios
        import axios from 'axios';


        // 定义组件类
        export default class LessonMovies extends Component {
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
                axios.get('/admin/lesson/getmovies', { params })
                    .then(({ data }) => {
                        if (data.errno === 0) {
                            this.setState(data);
                        } else {
                            Toast.info(data.msg);
                        }
                    })
            }

            // 组件构建完毕
            componentDidMount() {
                this.getData();
            }

            // 组件数据更新的时候
            componentDidUpdate(props) {
                if (props.match.url !== this.props.match.url) {
                    this.getData();
                }
            }

            // 封装
            update() {
                // 更新数据 (触发diff)
                this.setState({ data: this.state.data });
            }

            // 创建模块
            createModule() {
                // 追加数据对象
                this.state.data.push({});
                this.update();
            }

            // 改变添加视频的标题
            changeTitle(title, item) {
                // 修改数据对象的title字段
                item.title = title;
                this.update();
            }


            // 添加视频模块
            addMovieModule(e, item) {
                // console.log(111, e, item);
                // 判断item是否具备movies
                if (item.movies) {
                    item.movies.push({});
                } else {
                    item.movies = [{}];
                }

                // 触发diff
                this.update();
            }

            // 修改uploadMovie组件中的标题
            changeUploadtitle(title, item) {
                item.title = title;

                this.update();
            }

            // 上传视频方法
            onUploadMovie(movie, item) {
                item.movie = movie;
                this.update();
            }

            // 创建视频模块
            createMoviesModule(movies) {
                return movies && movies.map((item, index) =>
                    <UploadMovie
                        key={index}
                        {...item}

                        // 修改添加视频的标题
                        onChangeTitle={e => this.changeUploadtitle(e, item)}

                        // 上传图片和视频
                        onUploadMovie={e => this.onUploadMovie(e, item)}
                    ></UploadMovie>
                )
            }

            // 创建提交模块
            createSubMitModule() {
                return this.state.data && this.state.data.map((item, index) => {
                    return (
                        // 注意: 新创建的数据对象是空的 因此要使用index作为key
                        <Fragment key={index}>
                            <InputItem
                                placeholder="请输入模块标题"
                                value={item.title}
                                onChange={e => this.changeTitle(e, item)}
                            >
                                <Button size="small" inline type="primary" onTouchEnd={e => this.addMovieModule(e, item)}>添加视频</Button>
                            </InputItem>
                            <WhiteSpace></WhiteSpace>

                            {/* 视频模块 */}
                            {this.createMoviesModule(item.movies)}


                            <WingBlank>
                                <Button type="warning">提交模块</Button>
                            </WingBlank>
                            <WhiteSpace style={{ height: 40 }}></WhiteSpace>
                        </Fragment>


                    )
                })
            }


            render() {
                return (
                    <div>
                        <WhiteSpace style={{ height: 30 }}></WhiteSpace>

                        {/* 创建提交模块 */}
                        {this.createSubMitModule()}

                        <WingBlank>
                            <Button type="warning" onTouchEnd={e => this.createModule()}>创建模块</Button>
                        </WingBlank>
                        <WhiteSpace style={{ height: 30 }}></WhiteSpace>
                    </div>
                );
            }
        }
        return this.state.data && this.state.data.map((item, index) => {
            return (
                //注意：新创建的数据对象是空的 因此要使用index作为key  
                <Fragment key={index}>
                    <InputItem
                        placeholder="请输入模块标题"
                        value={item.title}
                        onChange={e => this.changeTitle(e, item)}
                    >
                        <Button size="small" inline type="primary" onTouchEnd={e => this.addMoviesModule(e, item)}>添加视频</Button>
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
                    <Button type="warning" onTouchEnd={e => this.createModule()}>创建模块</Button>
                </WingBlank>
                <WhiteSpace style={{ height: 30 }}></WhiteSpace>
            </div>
        );
    }
}
