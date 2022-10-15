// 引入常量
import { ADD_LESSON, DEL_LESSON } from '../consts';

// 定义默认数据
let defaultState = { lesson: [
    // {
    //     "_id": 1,
    //     "img": "/static/img/lesson/06.jpg",
    //     "title": "爱创课堂Javscript进阶课程",
    //     "sales": "12345",
    //     "price": "200.00",
    //     "type": "super"
    // },
    // {
    //     "_id": 2,
    //     "img": "/static/img/lesson/07.jpg",
    //     "title": "爱创课堂Javscript进阶课程",
    //     "sales": "12345",
    //     "price": "200.00",
    //     "type": "super"
    // },
    
] };
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
