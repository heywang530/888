// 引入核心库
import React, { Component } from 'react';
// 引入路由模块
import { Switch, Route } from 'react-router-dom';

// 引入页面组件
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Buy from './pages/Buy/Buy';

// 定义组件类
class App extends Component {
	render() {
		console.log('app', this.props);
		return (
			<div>
				<h1>app part</h1>
				<hr />
				{/* 配置路由 */}
				<Switch>
					{/* 购买页 */}
					<Route path="/buy" name="buy" component={Buy}></Route>
					{/* 详情页 */}
					<Route path="/detail/:page" name="detail" component={Detail}></Route>
					{/* 由于该组件页面和home页是相似的所以 共用一个组件页面 */}
					<Route path="/search/:id" name="search" component={Home}></Route>
					{/* 首页 默认页面 */}
					<Route path="*" name="home" component={Home}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
