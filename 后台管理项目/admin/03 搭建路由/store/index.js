// 引入redux
import { createStore } from 'redux';
// 引入react-rudex模块
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