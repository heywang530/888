// 引入React
import React, { Component } from 'react';
// 引入Header组件
import Header from './components/Header/Header';
// 引入Home页面
import Home from './pages/Home/Home';
// 引入Start页面
import Start from './pages/Start/Start';
// 引入Css页面
import Css from './pages/Css/Css';
// 引入公共组件页面
import Page from './pages/Page/Page';

// 定义组件类
export default class App extends Component {
    // 定义构造函数
    constructor(props) {
        super(props);
        this.state = {
            // 该字段表示应该显示哪个页面
            // page: 'component'

            // 可以将属性作为状态存在
            page: props.page
        }
    }

    // 定义渲染的方法
    renderView(page) {
        switch (page) {
            case 'start':
                return <Start>起步</Start>
            case 'css':
                return  <Css >全局 CSS 样式</Css>
            case 'component':
                return <Page title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="/data/component.json"></Page>
            case 'js': 
                return <Page  title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="/data/js.json"></Page>
            case 'marker':
                return <Page title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="/data/marker.json"></Page>

            default:
                return <Home></Home>;
        }
    }
    

    render() {
        return (
            <div>
                {/* header组件 */}
                {/* 父向子传递数据 还要实现 子向父通信 */}
                <Header page={this.state.page} method={ page => this.setState({ page }) }></Header>
                {/* 执行方法 */}
                {this.renderView(this.state.page)}
            </div>
        );
    }
}

// 定义默认数据
App.defaultProps = {
    page: 'home'
}












// // 引入React
// import React, { Component } from 'react';
// // 引入Header组件
// import Header from './components/Header/Header';
// // 引入Home页面
// import Home from './pages/Home/Home';
// // 引入Start页面
// import Start from './pages/Start/Start';
// // 引入Css页面
// import Css from './pages/Css/Css';
// // 引入公共组件页面
// import Page from './pages/Page/Page';

// // 定义组件类
// export default class App extends Component {
//     // 定义构造函数
//     constructor(props) {
//         super(props);
//         this.state = {
//             // 该字段表示应该显示哪个页面
//             // page: 'component'

//             // 可以将属性作为状态存在
//             page: props.page
//         }
//     }
    

//     render() {
//         return (
//             <div>
//                 {/* header组件 */}
//                 {/* 父向子传递数据 还要实现 子向父通信 */}
//                 <Header page={this.state.page} method={ page => this.setState({ page }) }></Header>
//                 {/* 模拟页面 */}
//                 <Home style={ this.state.page === 'home'}></Home>
//                 <Start style= {this.state.page === 'start' }>起步</Start>
//                 <Css style={ this.state.page === 'css'}>全局 CSS 样式</Css>

//                 {/* 使用公共组件 */}
//                 <Page style={ this.state.page === 'component'} title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="/data/component.json"></Page>
//                 <Page style={ this.state.page === 'js'} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="/data/js.json"></Page>
//                 <Page style={ this.state.page === 'marker'} title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="/data/marker.json"></Page>
//                 {/* <h1 style={{ display: this.state.page === 'component' ? '' : 'none' }}>组件</h1> */}
//                 {/* <h1 style={{ display: this.state.page === 'js' ? '' : 'none' }}>JavaScript 插件</h1> */}
//                 {/* <h1 style={{ display: this.state.page === 'marker' ? '' : 'none' }}>定制</h1> */}
//             </div>
//         );
//     }
// }

// // 定义默认数据
// App.defaultProps = {
//     page: 'home'
// }