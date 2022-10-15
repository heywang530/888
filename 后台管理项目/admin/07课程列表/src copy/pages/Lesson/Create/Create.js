// 引入核心库
import React, { Component } from 'react';
// 引入组件模块
import { WingBlank, WhiteSpace, Button, InputItem, Picker, ImagePicker, List, Toast } from 'antd-mobile';
// 引入校验方法
import { required, notEmpty, invalid } from '../../../tools';
// 引入axios
import axios from 'axios';


// 定义组件类
export default class LessonCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                "title": "",
                "sales": "",
                "price": "",
                "type": "",
                "teacher": "",
                // "img": '/static/img/lesson/01.jpg',
                "img": '',
            },
            // 错误信息对象
            errors: {
                "img": "",
                "title": "",
                "sales": "",
                "price": "",
                "type": "",
                "teacher": "",
            }
        }
    }
    


    // 定义原型数据
    get getData() {
        return [
            { label: '初级课程', value: 'easy' },
            { label: '中级课程', value: 'middle' },
            { label: '高级课程', value: 'super' }
        ]
    }


    // 上次图片
    uploadImage(arr) {
        // 获取最新上传的图片数据
        let file = arr[arr.length - 1].file;
        // console.log(file);

        // 使用ajax2.0技术 
        let fd = new FormData();

        // 追加数据
         fd.append('file', file);

        // 发送请求
        axios.post('/admin/upload', fd)
            .then(({ data }) => {
               if (data.errno === 0) {
                   // 更新数据
                   this.setState({ form: { ...this.state.form,  img: data.url  } })
               } 
            })

    }

    // 点击提交
    submit() {
        // 解构数据
        let { form, errors } = this.state;

        // 定义结果对象
        let result;

        // 判断是否填写呢
        if (result = notEmpty(form)) {
            return Toast.info(result);
        }

        // 判断是否合法
        if (result = invalid(errors)) {
            return Toast.info(result);
        }

        // 点击提交了
        axios.post('/admin/lesson/create', form)
            .then(({ data }) => {
                if (data.errno === 0) {
                    this.props.history.push('/lesson/list/1')
                } else {
                    Toast.info(data.msg);
                }
            })        
    }

    render() {
        let { form, errors } = this.state;
        return (
            <div className="lessonCreate">
                <WhiteSpace style={{ height: 40 }}></WhiteSpace>
                <InputItem 
                    placeholder="请输入课程标题"
                    value={form.title}
                    onChange={ title => {
                        this.setState({ 
                            form: { ...form, title },
                            errors: { ...errors, title: required(title) }
                        })

                    } }
                    error={errors.title}
                    onErrorClick={e =>  Toast.info(errors.title) }
                >课程标题</InputItem>
                <WhiteSpace></WhiteSpace>
                <InputItem 
                
                    placeholder="请输入课程讲师"
                    value={form.teacher}
                    onChange={ teacher => {
                        this.setState({ 
                            form: { ...form, teacher },
                            errors: { ...errors, teacher: required(teacher) }
                        })

                    } }
                    error={errors.teacher}
                    onErrorClick={e =>  Toast.info(errors.teacher) }    
                >课程讲师</InputItem>
                <WhiteSpace></WhiteSpace>
                <InputItem 
                    placeholder="请输入课程价格"
                    value={form.price}
                    onChange={ price => {
                        this.setState({ 
                            form: { ...form, price },
                            errors: { ...errors, price: required(price) }
                        })

                    } }
                    error={errors.price}
                    onErrorClick={e =>  Toast.info(errors.price) }        
                >课程价格</InputItem>
                <WhiteSpace></WhiteSpace>
                <InputItem 
                    placeholder="请输入课程销量"
                    value={form.sales}
                    onChange={ sales => {
                        this.setState({ 
                            form: { ...form, sales },
                            errors: { ...errors, sales: required(sales) }
                        })

                    } }
                    error={errors.sales}
                    onErrorClick={e =>  Toast.info(errors.sales) }            
                >课程销量</InputItem>
                <WhiteSpace></WhiteSpace>
                <Picker
                    cols={1}
                    data={this.getData}
                    extra="请选择课程列表"
                    value={[form.type]}
                    onChange={ e => this.setState({ form: { ...form, type: e[0] } }) }
                >
                    <List.Item>课程分类</List.Item>
                </Picker>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>

                <ImagePicker
                    files={form.img ?  [{ url: form.img }] : []}
                    onChange={ e => this.uploadImage(e) }
                ></ImagePicker>

                <WhiteSpace style={{ height: 50 }}></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onTouchEnd={ e => this.submit(e) }>提交</Button>
                </WingBlank>





            </div>
        );
    }
}