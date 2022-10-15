// 引入核心库
import React, { Component } from 'react';
// 引入样式文件
import './NavBar.less';


// 定义组件类
export default class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShow: false,
			msg: ''
		}
	}
	

	// 定义搜索方法
	search(e) {
		// 按下回车再处理
		if (e.keyCode === 13) {
			// 1 触发父组件的方法
			this.props.onSearch(this.state.msg);

			// 2 隐藏输入框
			this.setState({ isShow: false })
		}
	}


	render() {
		// console.log('nav', this.props);
		// 解构数据
		let { leftContent, rightContent, onLeftClick, children, placeholder, cancelText  } = this.props;

		// console.log(333, this.state.msg);

		return (
			<div className="navbar-com">
				<div className="left" onClick={ onLeftClick }>{leftContent}</div>
				<div className="content">{children}</div>
				{/* 点击搜索出现输入框 */}
				<div className="right" onClick={ e => this.setState({ isShow: true }) }>{rightContent}</div>

				{/* 搜索框 */}
				<div className="inp" style={{
					display: this.state.isShow ? '' : 'none'

				}}>
					{/* 实现数据双向绑定 */}
					<input onKeyDown={ e => this.search(e) }  type="text" placeholder={placeholder}  value={this.state.msg} onChange={ e => this.setState({ msg: e.target.value }) }  />
					{/* 点击取消隐藏输入框 */}
					<span onClick={ e => this.setState({ isShow: false }) }>{cancelText}</span>
				</div>
			</div>
		);
	}
}

// 定义默认值
NavBar.defaultProps = {
	leftContent: '',
	rightContent: '',
	onLeftClick() {},
	placeholder: '请输入搜索词',
	cancelText: '取消',
	onSearch() {}
	
}