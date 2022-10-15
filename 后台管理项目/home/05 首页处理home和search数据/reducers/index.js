// 引入常量
import { ADD_LESSON, DEL_LESSON } from '../consts';

// 定义默认数据
let defaultState = { lesson: [] };
// 定义reducer
function reducer(state = defaultState, action) {
    // 定义结果对象
    let result = Object.assign({}, state);

    // 捕获消息类型
    switch (action.type) {
        case ADD_LESSON:
            console.log('add_lesson');
            break;
        case DEL_LESSON:
            console.log('del_lesson');
            break;
        default:
            break;
    }

    // 返回结果对象
    return result;
}

// 暴露接口
export default reducer;
