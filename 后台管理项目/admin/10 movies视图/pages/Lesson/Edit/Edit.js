// 引入核心库
import React, { Component } from 'react';

//引入混合类 
import LessonCreate from '../Create/Create'

//引入axios
import axios from 'axios'

// 继承混合类
export default class LessonEdit extends LessonCreate {
    //重写数据
    get url() {
        return '/admin/lesson/update '
    }

    //组件构建完毕
    componentDidMount() {
        let { params } = this.props.match;

        axios.get('/admin/lesson/detail', { params })
            .then(({ data }) => {
                console.log(111, data);

                //如果create组件中的数据叫做form 此时要对应数据名称。 继承混合类名称必须相同，否则需要对应一下

                this.setState({ from: data.data })
            })

    }


}