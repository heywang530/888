// 引入核心库
import React, { Component } from 'react';

// 引入Card
import Card from '../../components/Card/Card';
// 引入store
import { deal } from '../../store'
// 引入axios
import axios from 'axios';
// 引入样式文件
import './Buy.less';


// 定义组件类
 class Buy extends Component {

	// 渲染卡片
	createCard() {
		return this.props.state.lesson.map(item => <Card key={item._id} {...item}></Card>)
	}

	// 购买
	buy() {
		axios.post('/buy', { arr: this.props.state.lesson.map(item => item._id)})
	}

	render() {
		console.log('buy', this.props);
		return (
			<div className="buy">
				<div className="item">
					<div className="price-part">
						<div className="total">
							<span>商品总价:</span>
							<span className="price">￥{this.props.getPrice()}</span>
						</div>
					</div>

					<div className="btns">
						<span onTouchEnd={ e => this.props.history.goBack() }>取消购买</span>
						<span onTouchEnd={ e => this.buy() }>立即购买</span>
					</div>

					<h2>已购课程</h2>
				</div>

				{/*Card组件  */}
				{this.createCard()}
			</div>
		);
	}
}

// 处理并返回接口
export default deal(Buy);