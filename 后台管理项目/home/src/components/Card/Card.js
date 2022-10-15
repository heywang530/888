// 引入核心库
import React  from 'react';
// 引入Link组件
import { Link } from 'react-router-dom';
// 引入样式文件
import './Card.less';


// 定义组件类
export default props => {
	return (
		<Link to={"/detail/" + props._id} >
			<div className="card">
				<img src={props.img} alt="" />
				<div className="card-bottom">
					<h3 className="title">{props.title}</h3>
					<div className="intro">
						<span>{props.sales}人与你一起学习</span>
						<span className="price">￥{props.price}</span>
						<span className="nowBuy">立即购买</span>
					</div>
				</div>
			</div>
		</Link>
	);
}