// 引入核心库
import React, { Component } from 'react';
// 引入路由模块
import { withRouter } from 'react-router-dom';
// 引入deal方法
import { deal } from '../../store/';

// 引入样式文件
import './ShoppingCar.less';




// 定义组件类
 class ShoppingCar extends Component {

	

	// getPrice() {
	// 	return (this.props.state.lesson.reduce((prev, item) => prev + +item['price'], 0)).toFixed(2);
	// }

	// 调整页面
	showBuyPage() {
		if (this.props.getPrice() > 0) {
			// 跳转页面
			// console.log(this.props);
			this.props.history.push('/buy')

		} else {
			alert('请购买商品')
		}
	}

	render() {
		// console.log('shop', this.props);
		return (
			<div className="ShoppingCar">
				{/* <span>￥{this.getPrice()}</span> */}
				<span>￥{this.props.getPrice()}</span>
			
				<span onTouchEnd={ e => this.showBuyPage(e) }>选好了</span>
			</div>
		);
	}
}

// 处理并暴露接口
export default withRouter(deal(ShoppingCar));