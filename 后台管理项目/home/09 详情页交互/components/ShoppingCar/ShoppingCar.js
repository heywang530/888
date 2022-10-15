// 引入核心库
import React, { Component } from 'react';
// 引入deal方法
import { deal } from '../../store';

// 引入样式文件
import './ShoppingCar.less';




// 定义组件类
 class ShoppingCar extends Component {

	getPrice() {
		return (this.props.state.lesson.reduce((prev, item) => prev + +item['price'], 0)).toFixed(2);
	}

	render() {
		// console.log('shop', this.props);
		return (
			<div className="ShoppingCar">
				<span>￥{this.getPrice()}</span>
				<span>选好了</span>
			</div>
		);
	}
}

// 处理并暴露接口
export default deal(ShoppingCar);