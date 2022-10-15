// 引入核心库
import React, { Component } from 'react';
// 引入SwiPer
import SwiPer from '../../components/SwiPer/SwiPer';


// 定义组件类
export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				{/* 实现Swiper组件 */}

				{/* 为了使用服务端的数据: 可以在项目中的public目录下 模拟一份数据 */}
				<SwiPer
					urls={[
						'/static/img/banner/01.jpg',
						'/static/img/banner/02.jpg',
						'/static/img/banner/03.jpg',
						'/static/img/banner/04.jpg',
						'/static/img/banner/05.jpg',
					]}
				></SwiPer>
			</div>
		);
	}
}