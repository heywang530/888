// 引入核心库
import React, { Component } from 'react';
// 引入模块组件
import { Button, WingBlank, WhiteSpace, InputItem, List, Toast } from 'antd-mobile';
// 引入检验方法
import { CheckUsername, CheckPassword, notEmpty, invalid} from '../../tools';

// 引入异步消息
import { login } from '../../actions'

// // 定义检验用户名的方法
// function CheckUsername(value) {
//     // 用户名是2-8位数字 字母下划线
//     if (!/^\w{2,8}$/.test(value)) {
//         return '用户名是2-8位数字 字母下划线'
//     }
// }

// 定义组件类
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: '',
                password: ''
            },
            // 错误信息对象
            errors: {
                username: '',
                password: ''
            }
        }
    }


    // 点击登录
    submit() {
        // 解构数据
        let { data, errors } = this.state;

        // 定义一个结果变量
        let result;
        // 判断是否内容为空
        if (result = notEmpty(data)) {
            return Toast.info(result);
        }

        // 判断是否填写正确
        if (result = invalid(errors)) {
            return Toast.info(result);
        }

        // 发送异步消息
        this.props.dispatch(login(data))
    }

    
    render() {
        // 解构数据
        let { data, errors } = this.state;
        return (
            <div>
                <WhiteSpace style={{ height: 100 }}></WhiteSpace>
                <List>
                    <InputItem 
                        placeholder="请输入用户名"
                        value={data.username}
                        onChange={ username => {
                            this.setState({ 
                                data: { ...data, username },
                                // 修改错误信息对象
                                errors: { ...errors, username: CheckUsername(username) }
                            })
                        }}
                        error={errors.username}
                        onErrorClick={ e => Toast.info(errors.username)}
                    >用户名:</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem 
                        placeholder="请输入密码"
                        value={data.password}  
                        onChange={ password => {
                            this.setState({ 
                                data: { ...data, password } ,
                                errors: { ...errors, password: CheckPassword(password) }
                            })
                        }}  
                        error={errors.password}
                        onErrorClick={ e => Toast.info(errors.password) }
                        // type="password"
                    >密&emsp;码:</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onTouchEnd={ e => this.submit(e) }>登录</Button>
                </WingBlank>

            </div>
        );
    }
}