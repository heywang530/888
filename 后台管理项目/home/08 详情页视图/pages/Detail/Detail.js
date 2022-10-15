// 引入核心库
import React, { Component } from 'react';
// 引入ShoppingCar
import ShoppingCar from '../../components/ShoppingCar/ShoppingCar';
// 引入axios
import axios from 'axios';

// 引入样式文件
import './Detail.less';


// 开发流程: 1 发送请求获取数据 2 根据数据书写视图  3 根据视图调整样式  4 写交互
// 定义组件类
export default class Detail extends Component {
	// 定义构造函数
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}

	// 定义获取数据的方法
	async getData() {
		// 获取动态路由
		let { params } = this.props.match;
		console.log(111, params);
		// let data = await axios.get('/data/detail', { params: { id: params.page  }});
		// let data = await axios.get('/data/detail', { params: params });
		let { data } = await axios.get('/data/detail', { params });

		// 缓存数据
		this.setState(data);

	}

	// 组件构建完毕之后
	componentDidMount() {
		this.getData();
	}
	
	// 更新完毕之后
	componentDidUpdate(props) {
		if (props.match.url !== this.props.match.url) {
			this.getData();
		}
	}


	// 创建二级列表
	secondList(arr) {
		return arr && arr.map((item, index) => (
			<li className="second_item" key={index}>{item.title}</li>
		))
	}
	// 创建课程列表
	createLessonList() {
		return this.state.data && this.state.data.list.map(item => (
			<li className={ item.isShow ? 'choose title_item' : 'title_item' } key={item._id} >
				<h3>{item.title}</h3>
				{/* 二级列表 */}
				<ul>{this.secondList(item.movies)}</ul>
			</li>
		))
	}

	render() {
		// 解构数据
		let { data } = this.state;

		if (!data._id) {
			return <h1>资源加载中......</h1>
		}

		return (
			<div className="detail-page" style={{ paddingBottom: 50 }}>
				{/* 顶部区域 */}
				<div className="top">
					{/* 图片部分 */}
					<div className="imgs">
						<img src={data.img} alt="" />
						<p className="title">{data.title}</p>
					</div>

					{/* 价格部分 */}
					<div className="price-part">
						<div className="user-part">
							<span className="user">{data.teacher}</span>
							<span className="buy">立即购买</span>
						</div>
						<div className="sales-part">
							<span className="price">￥{data.price}</span>
							<span className="sales">{data.sales}已经购买</span>
						</div>
					</div>


				</div>

				{/* 课程区域 */}
				<div className="main">
					{/* 课程内容 目录部分 */}
					<div className="lesson-part">
						<span className="choose">课程内容</span>
						<span>课程目录</span>
					</div>


					{/* 课程内容 */}
					{/* <div className="lesson-content" dangerouslySetInnerHTML={{ __html: data.intro }} ></div> */}

					{/* 课程列表部分 */}
					<ul className="title_part">{this.createLessonList()}</ul>
				</div>




				{/* 购物车组件 */}
				<ShoppingCar></ShoppingCar>
			</div>
		);
	}
}