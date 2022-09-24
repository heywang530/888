// 引入React
import React, { Component } from 'react';
// 引入混合类
import Start from '../Start/Start';

// 定义组件类
export default class Css extends Start {
    // 重写构造函数
    constructor(props) {
        super(props);
        this.state = {
            title: '全局 CSS 样式',
            intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
            url: '/data/css.json',
            // 数据变量
            arr: []
        }
    }
}





// // 引入React
// import React, { Component } from 'react';

// // 引入Banner
// import Banner from '../../components/Banner/Banner';
// // 引入Content
// import Content from '../../components/Content/Content';

// // 引入axios
// import axios from 'axios';



// // 定义组件类
// export default class Start extends Component {
//     // 定义构造函数
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '全局 CSS 样式',
//             intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
//             url: '/data/css.json',
//             // 数据变量
//             arr: []
//         }
//     }

//     // 组件创建完毕之后
//     componentDidMount() {
//         axios.get(this.state.url)
//             .then(({ data }) => this.setState({ arr: data }))
//     }
    
    

//     render() {
//         // 解构数据
//         let { style } = this.props;
//         // 解构数据
//         let { title, intro, arr } = this.state;
//         return (
//             <div className="start-page" style={{ display: style ? '' : 'none' }}>
//                 <Banner title={title} intro={intro}></Banner>
//                 <Content arr={arr}></Content>
//             </div>
//         );
//     }
// }



