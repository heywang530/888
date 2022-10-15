// 引入redux
import { createStore, applyMiddleware } from 'redux';
// 引入react-rudex模块
import { connect } from 'react-redux';
// 引入中间件
import ReduxThunk from 'redux-thunk';

// 引入reducer
import reducer from '../reducers/';

// 使用connect
export let deal = connect(
    state => ({ state }),
    dispatch => ({ dispatch })
)

// 创建store (支持异步action)
export default applyMiddleware(ReduxThunk)(createStore)(reducer);