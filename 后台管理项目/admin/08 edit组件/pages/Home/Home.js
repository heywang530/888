// 引入核心库
import React, { Component } from 'react';
// 引入路由模块
import { Switch, Route } from 'react-router-dom';
// 引入组件模块
import { NavBar, Menu } from 'antd-mobile';

// 引入课程相关的路由
import LessonCreate from '../Lesson/Create/Create';
import LessonEdit from '../Lesson/Edit/Edit';
import LessonIntro from '../Lesson/Intro/Intro';
import LessonList from '../Lesson/List/List';
import LessonMovies from '../Lesson/Movies/Movies';

// 引入用户相关的路由
import UserCreate from '../User/Create/Create';
import UserEdit from '../User/Edit/Edit';
import UserList from '../User/List/List';

// 引入默认路由
import Main from '../Main/Main';


// 定义组件类
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuShow: false
        }
    }
    

    // 定义原型数据
    get getMenuData() {
        return [
            {
                label: '课程模块', value: '/lesson',
                children: [
                    { label: '创建课程', value: 'create',},
                    { label: '课程列表', value: 'list/1',},
                ]
            
            },
            {
                label: '用户模块', value: '/user',
                children: [
                    { label: '用户课程', value: 'create',},
                    { label: '用户列表', value: 'list/1',},
                ]
            }
        ]
    }

    // 切换路由
    changeRouter(arr) {
        // console.log(111, e);

        // 切换路由
        this.props.history.push(arr.join('/'));

        // 让菜单隐藏
        this.setState({ isMenuShow: false })

    }

    render() {

        // 解构数据
        let { isMenuShow } = this.state;
        return (
            <div>
                <NavBar
                    leftContent="菜单"
                    rightContent={this.props.state.username}
                    onLeftClick={ e => this.setState({ isMenuShow: !this.state.isMenuShow }) }
                >
                    <span onClick={ e => this.props.history.push('/') }>后台管理系统</span>

                </NavBar>


                {/* 菜单 */}
                {isMenuShow && <Menu
                    data={this.getMenuData}
                    onChange={ e => this.changeRouter(e) }
                ></Menu>}

                {/* 定义路由 */}
                <Switch>
                    {/* 课程路由相关 */}
                    <Route path="/lesson/create" component={LessonCreate}></Route>
                    <Route path="/lesson/list/:page" component={LessonList}></Route>
                    <Route path="/lesson/intro/:id" component={LessonIntro}></Route>
                    <Route path="/lesson/movies/:id" component={LessonMovies}></Route>
                    <Route path="/lesson/edit/:id" component={LessonEdit}></Route>

                    {/* 用户路由相关 */}
                    <Route path="/user/create" component={UserCreate}></Route>
                    <Route path="/user/list/:page" component={UserList}></Route>
                    <Route path="/user/edit/:id" component={UserEdit}></Route>
                    {/* 默认路由 */}
                    <Route path="*" component={Main}></Route>
                </Switch>
            </div>
        );
    }
}