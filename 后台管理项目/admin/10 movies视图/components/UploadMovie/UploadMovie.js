//引入react
import React from 'react';
import { WingBlank, WhiteSpace, Button, InputItem, List } from 'antd-mobile';

//引入样式文件
import './UploadMovies.less'
//定义默认数据
let defaultState = {
    movie: '',
    title: '',
    delText: '--'
}

//定义并且暴漏组件
export default props => {
    console.log(111, props);

    //适配默认参数
    props = Object.assign({}, defaultState, props);
    return (
        <div className="uploadMovies">
            <List.Item extra={props.movie}>
                <Button type='primary' size="small" inline>上传视频</Button>
            </List.Item>
            <InputItem
                value={props.title}
            >
                <Button type="warning" size="small" inline>删除视频</Button>
            </InputItem>
            <WhiteSpace></WhiteSpace>
        </div>
    )
}
