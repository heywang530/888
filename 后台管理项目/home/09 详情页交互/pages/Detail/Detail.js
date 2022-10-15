// 引入核心库
import React, { Component, createRef } from 'react';
// 引入ShoppingCar
import ShoppingCar from '../../components/ShoppingCar/ShoppingCar';
// 引入Movie
import Movie from '../../components/Movie/Movie';


// 引入消息
import { addlesson, dellesson } from '../../actions';

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
			// 请求的数据对象
			data: {},
			// 控制课程的切换
			intro: 'lesson',
			// 控制movie的显隐
			isMovieShow: false,
			// 定义movie的数据对象
			movie: {},
		}

		// 创建ref
		this.movieDom = createRef();

		// 定义开关
		this.lock = false;

	}

	// 定义获取数据的方法
	async getData() {
		// 获取动态路由
		let { params } = this.props.match;
		// console.log(111, params);
		// let data = await axios.get('/data/detail', { params: { id: params.page  }});
		// let data = await axios.get('/data/detail', { params: params });
		let { data } = await axios.get('/data/detail', { params });



		// 判断是否购买过商品
		if (this.props.state.lesson.find(item => item._id === data.data._id)) {
			// 为data添加一个字段
			data.data.hasBuy = true;
		}


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


	// 隐藏movie
	hideMovie(e) {
		// console.log(111, 'hide', e);
		// console.log(e.target.tagName);
		if (e.target.tagName.toUpperCase() === 'DIV') {
			// 更新数据
			this.setState({ isMovieShow: false })
		}

		// 关闭音频
		this.movieDom.current.pause();
	}

	// 显示movie
	showMovie(item) {
		// 更新movie数据
		this.setState({
			movie: item,
			// 显示movie
			isMovieShow: true
		})

		if (this.lock) {
			// 播放音频
			this.movieDom.current.play();
		}

		// 开锁
		this.lock = true;
	}

	// 控制列表的显隐
	showList(item) {
		// console.log(111, item);
		// 取反处理
		item.isShow = !item.isShow;
		// 更新数据 触发diff算法 让react帮我们找到改变的数据
		this.setState({ data: this.state.data });
	}

	// 创建二级列表
	secondList(arr) {
		return arr && arr.map((item, index) => (
			// 点击当前li 控制movie的显隐
			<li onTouchEnd={ e => this.showMovie(item) } className="second_item" key={index}>{item.title}</li>
		))
	}
	// 创建课程列表
	createLessonList() {
		return this.state.data && this.state.data.list.map(item => (
			<li className={ item.isShow ? 'choose title_item' : 'title_item' } key={item._id} >
				{/* 点击标题 控制列表的显隐 */}
				<h3 onTouchEnd={ e => this.showList(item) }>{item.title}</h3>
				{/* 二级列表 */}
				<ul>{this.secondList(item.movies)}</ul>
			</li>
		))
	}


	render() {
		// 解构数据
		let { data, intro } = this.state;

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
							<span className={data.hasBuy ? 'nowBuy buy' : 'buy'} onTouchEnd={ e => this.props.dispatch(data.hasBuy ? dellesson(data) : addlesson(data)  ) }>{ data.hasBuy ? '取消购买' : '立即购买' } </span>
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
						<span onClick={ e => this.setState({ intro: 'content' }) } className={ intro === 'content' ? 'choose' : '' }>课程内容</span>
						<span onClick={ e => this.setState({ intro: 'lesson' }) } className={ intro === 'lesson' ? 'choose' : '' }>课程目录</span>
					</div>


					{/* 课程内容 */}
					{intro === 'content' && <div className="lesson-content" dangerouslySetInnerHTML={{ __html: data.intro }} ></div>}

					{/* 课程列表部分 */}
					{intro === 'lesson' && <ul className="title_part">{this.createLessonList()}</ul>}
				</div>


				{/* movie组件 */}
				<Movie movie={this.state.movie} isShow={this.state.isMovieShow} hide={ e => this.hideMovie(e)} ref={this.movieDom} ></Movie>

				{/* 购物车组件 */}
				<ShoppingCar></ShoppingCar>
			</div>
		);
	}
}