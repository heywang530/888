// 引入核心库
import React, { Component } from 'react';
// 引入路由模块
import { Switch, Route } from 'react-router-dom';

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
    render() {
        return (
            <div>
                <h1>home page</h1>
                <hr />
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