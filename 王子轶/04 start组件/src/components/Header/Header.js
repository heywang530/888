// 引入React
import React, { Component } from 'react';

// 引入样式文件
import './Header.less';



// 既然父组件和子组件使用的数据源是同一份 就可以优化为函数组件：

// 定义组件类
export default props => 
    <div className="header-com">
        {/* 版心类 */}
        <div className="container">
            <div className="navbar-header"> <a onClick={ e => props.method('home') } className="navbar-brand" href="#" >Bootstrap</a></div>
            <ul className="nav navbar-nav">
                <li onClick={ e => props.method('start')} className={ props.page === 'start' ? 'choose' : '' }><a href="#">起步</a></li>
                <li onClick={ e => props.method('css')} className={ props.page === 'css' ? 'choose' : '' }><a href="#">全局 CSS 样式</a></li>
                <li onClick={ e => props.method('component')} className={ props.page === 'component' ? 'choose' : '' }><a href="#">组件</a></li>
                <li onClick={ e => props.method('js')} className={ props.page === 'js' ? 'choose' : '' }><a href="#">JavaScript 插件</a></li>
                <li onClick={ e => props.method('marker')} className={ props.page === 'marker' ? 'choose' : '' }><a href="#">定制</a></li>
                <li><a href="#">网站实例</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Bootstrap 中文网</a></li>
            </ul>
        </div>
    </div>











// // 引入React
// import React, { Component } from 'react';

// // 引入样式文件
// import './Header.less';

// // 定义组件类
// export default class Header extends Component {
//     // 定义构造函数
//     constructor(props) {
//         super(props);
//         this.state = {
//             // page: 'js'

//             // 将属性作为状态数据存在
//             ...props
//         }
//     }
    

//     // 定义方法
//     sendMsg(page) {
//         // 1 修改自己的状态数据
//         this.setState({ page })

//         // 2 传递数据给父组件
//         this.props.method(page);
//     }


//     render() {
//         return (
//             <div className="header-com">
//                 {/* 版心类 */}
//                 <div className="container">
//                     <div className="navbar-header"> <a onClick={ e => this.sendMsg('home') } className="navbar-brand" href="#" >Bootstrap</a></div>
//                     <ul className="nav navbar-nav">
//                         <li onClick={ e => this.sendMsg('start')} className={ this.state.page === 'start' ? 'choose' : '' }><a href="#">起步</a></li>
//                         <li onClick={ e => this.sendMsg('css')} className={ this.state.page === 'css' ? 'choose' : '' }><a href="#">全局 CSS 样式</a></li>
//                         <li onClick={ e => this.sendMsg('component')} className={ this.state.page === 'component' ? 'choose' : '' }><a href="#">组件</a></li>
//                         <li onClick={ e => this.sendMsg('js')} className={ this.state.page === 'js' ? 'choose' : '' }><a href="#">JavaScript 插件</a></li>
//                         <li onClick={ e => this.sendMsg('marker')} className={ this.state.page === 'marker' ? 'choose' : '' }><a href="#">定制</a></li>
//                         <li><a href="#">网站实例</a></li>
//                     </ul>
//                     <ul className="nav navbar-nav navbar-right">
//                         <li><a href="#">Bootstrap 中文网</a></li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }


