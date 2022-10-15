// 引入常量
import { UPDATE_USER } from '../consts/';

// 定义默认数据
let defaultState = { username: '' };
// 定义reducer
function reducer(state = defaultState, action) {
    // 定义结果对象
    let result = Object.assign({}, state);
    

    // 捕获消息
    switch (action.type) {
        case UPDATE_USER:
            result.username = action.data;
            break;
        default:
            break;
    }

    // 返回结果对象
    return result;
}

// 暴露接口
export default reducer;