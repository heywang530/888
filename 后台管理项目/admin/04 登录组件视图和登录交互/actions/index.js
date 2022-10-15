// 引入常量
import { UPDATE_USER } from '../consts';
// 消息对象
export let update_user = data => ({ type: UPDATE_USER, data });
// 引入axios
import axios from 'axios';

// 异步消息
export let login = data => disptach => {
    // 发送请求
    axios.post('/admin/login', data)
        .then(({ data }) => {
            if (data.errno === 0) {
                // 发布一个同步消息
                disptach(update_user(data.username))
            }
        })
}


// 异步消息 获取用户信息
export let getUserInfo = data => disptach => {
    // 发送请求
    axios.get('/admin/userinfo')
        .then(({ data }) => {
            if (data.errno === 0) {
                // 发布一个同步消息
                disptach(update_user(data.data))
            }
        })
}



