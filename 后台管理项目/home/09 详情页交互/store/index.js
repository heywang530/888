// 引入store模块
import { createStore } from 'redux';
// 引入react-redux
import { connect } from 'react-redux';
// 引入reducer
import reducer from '../reducers';


// 使用connect
export let deal = connect(
    state => ({ state }),

    dispatch => ({ dispatch })
)


// 创建store
export default createStore(reducer);