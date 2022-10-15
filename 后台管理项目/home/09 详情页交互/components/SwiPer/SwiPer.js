// 引入核心库
import React, { Component, createRef } from 'react';
// 引入样式文件
import './SwiPer.less';

// 定义组件类
export default class Swiper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 0
		}

		// 定义一个开关
		this.lock = true;

		// 定义ref
		this.dom = createRef();
	}
	


	// 封装定时器
	startIntarval() {
		this.timer = setInterval(() => {
			// 改变page
			this.setState({ page: this.state.page + 1 })
		}, this.props.time);
	}

	// 组件构建完毕
	componentDidMount() {
		this.startIntarval();

		// 获取元素的引用
		this.dom.current.addEventListener('transitionend', () => {
			// console.log('过度完成了');
			// 开锁
			this.lock = true;
		})
	}

	// 组件即将销毁 关闭定时器
	componentWillUnmount() {
		clearInterval(this.timer);
	}


	
	// 获取真实索引值的方法
	getIndex() {
		// 解构数据
		let { page } = this.state;

		// 为了避免出现NaN 做判断
		if (this.props.urls.length) {
			return page % this.props.urls.length;
		} else {
			return 0;
		}
	}

	// 实现点击切换图片
	changeImage(num) {
		// 判断锁的状态
		if (!this.lock) return;

		// 关闭定时器
		clearInterval(this.timer);

		// 设置图片
		this.setState({ page: num })

		// 把锁关闭
		this.lock = false;

		// 开启定时器
		this.startIntarval();
	}



	// 定义渲染小圆点的方法
	createBtnList() {
		// 解构数据
		// let { page } = this.state;

		let idx = this.getIndex();

		return this.props.urls.map((item, index) => <li onClick={ e => this.changeImage(index) } className={ idx === index ? 'choose btn-item' : 'btn-item'  } key={item}></li>)
	}

	render() {
		// console.log('swiper', this.props);
		let { urls, width, height } = this.props;

		return (
			<div className="swiper-com" ref={this.dom} style={{
				width,
				height,
				// backgroundImage: `url(${urls[this.state.page]})`
				backgroundImage: `url(${urls[this.getIndex()]})`
			}}>

				{/* 创建列表 */}
				<ul className="list">{this.createBtnList()}</ul>
			</div>
		);
	}
}

// 定义默认值
Swiper.defaultProps = {
	width: '100%',
	height: 200,
	urls: [],
	time: 2000
}