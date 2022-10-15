// 引入store模块
import { createStore } from 'redux';
// 引入react-redux
import { connect } from 'react-redux';
// 引入reducer
import reducer from '../reducers/';


// 使用connect
export let deal = connect(
    state => ({ 
        state,
        // 获取价格
        getPrice() {
            return state.lesson.reduce((prev, item) => prev + +item['price'], 0).toFixed(2)
        }

     }),

    dispatch => ({ dispatch })
)


// 创建store
export default createStore(reducer);