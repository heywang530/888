// 引入核心库
// 引入forwardRef
import React, { Component, forwardRef } from 'react';

// 引入样式文件
import './Movie.less';

// 定义页面的高度
let height = window.innerHeight - 50;


// 定义组件类
 class Movie extends Component {
	render() {

		// console.log(111, this.props);
		// 解构数据
		let { movie, isShow, hide } = this.props;
		return (
			<div 
				onTouchEnd={ e => hide(e) }
				className="movie" 
				style={{
					height,
					lineHeight: height + 'px',
					maxHeight: height + 'px',
					display: isShow ? '' : 'none'
				}}>
				<div className="header">{movie.title}</div>
				<video src={movie.movie} autoPlay controls ref={this.props.aref}></video>
			</div>
		);
	}
}

// 处理并暴露 (取消ref指向)
export default forwardRef((props, ref) => <Movie {...props} aref={ref}></Movie>)