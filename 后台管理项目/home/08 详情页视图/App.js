// 引入核心库
import React, { Component } from 'react';
// 引入路由模块
import { Switch, Route } from 'react-router-dom';

// 引入页面组件
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Buy from './pages/Buy/Buy';

// 引入组件
import NavBar from './components/NavBar/NavBar';

// 定义组件类
class App extends Component {
	render() {
		// console.log('app', this.props);

		// 解构数据
		let { history } = this.props;

		return (
			<div className="app">
				<NavBar
					leftContent="返回"
					rightContent="搜索"
					onLeftClick={ e => history.goBack() }
					// 传递方法
					onSearch={e => history.push('/search/' + e)}
				>	
					{/* <Link to="/">移动端项目</Link> */}
					<h1 onClick={ e => history.push('/') }>移动端项目</h1>
				</NavBar>

				
				{/* 配置路由 */}
				<Switch>
					{/* 购买页 */}
					<Route path="/buy" name="buy" component={Buy}></Route>
					{/* 详情页 */}
					<Route path="/detail/:id" name="detail" component={Detail}></Route>
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
