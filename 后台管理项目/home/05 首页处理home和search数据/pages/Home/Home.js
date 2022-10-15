// 引入核心库
import React, { Component } from 'react';
// 引入SwiPer
import SwiPer from '../../components/SwiPer/SwiPer';
// 引入axios
import axios from 'axios';

// 定义组件类
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}
	

	// 定义获取数据的方法
	async getData() {

		// 解构数据
		let { match } = this.props;

		// 定义结果变量
		let url;

		// 判断是哪一个路由页面
		if (match.path === '/search/:id') {
			url = '/data/search?word=' + match.params.id; 
		} else {
			url = '/data/home';
		}


		// 此时是跨域请求数据: 
			// 解决方式: 1 在项目的public目录中模拟一份数据  2 使用proxy 跨域代理的方式来解决  
		let { data } = await axios.get(url);

		// 缓存数据
		this.setState(data);
	}

	// 组件构建完毕
	componentDidMount() {
		this.getData();
	}

	// 组件更新数据完毕
	componentDidUpdate(props) {
		// 如果参数数据和this中的数据不同 则发送新的请求
		if (props.match.url !== this.props.match.url) {
			this.getData();
		}
	}


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