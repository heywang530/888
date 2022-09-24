// 引入React
import React, { Component } from 'react';

// 引入样式文件
import './Home.less';

// 定义组件类
export default class Home extends Component {
    // 定义原型数据
    get firstData() {
        return [
            {
                img: 'img/sass-less.png',
                h2: '预处理脚本',
                intro: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
            },
            {
                img: 'img/devices.png',
                h2: '一个框架、多种设备',
                intro: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
            },
            {
                img: 'img/components.png',
                h2: '特性齐全',
                intro: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
            }
        ]
    }

    // 定义数据
    get secondData() {
        return ['01.png', '02.jpg', '03.png', '04.png']
    }

    // 创建第一个列表的方法
    createFirstList() {
        return this.firstData.map((item, index) => (
            <li key={index} className="item">
                <img src={item.img} alt="" />
                <h2>{item.h2}</h2>
                <p className="item_intro">{item.intro}</p>
            </li>
        ))
    }
    
    // 创建第二个列表的方法
    createSecondList() {
        return this.secondData.map((item, index) => (
            <li key={index} className="item">
                <img src={'img/' + item} alt="" />
            </li>
        ))
    }

    render() {
        // 解构数据
        // let { style } = this.props;
        return (
            // <div className="home-page" style={{ display: style ? '' : 'none' }}>
            <div className="home-page">
                {/* banner部分 */}
                <div className="banner">
                    <div className="container">
                        <h1 className="logo">B</h1>
                        <p className="intro">Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</p>
                        <span className="btn">下载BootStrap</span>
                        <p className="text">当前版本： v3.3.7 | 文档更新于：2017-05-22</p>
                    </div>
                </div>

                {/* first部分 */}
                <div className="first-module">
                    <div className="container">
                        <h1>为所有开发者、所有应用场景而设计。</h1>
                        <p className="intro">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用</p>
                        <p className="line"></p>
                        {/* 创建列表 */}
                        <ul>{this.createFirstList()}</ul>
                        <p className="line"></p>
                        <p className="text">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
                        <span className="btn">查看 GitHub 项目首页</span>
                    </div>
                </div>


                {/* second部分 */}
                <div className="second-module">
                    <div className="container">
                        <h1>基于 Bootstrap 构建的网站。。</h1>
                        <p className="intro">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
                        <p className="line"></p>
                        {/* 创建列表 */}
                        <ul>{this.createSecondList()}</ul>
                        <p className="line"></p>
                        <p className="text">我们在“优站精选”里展示了许多精美的 Bootstrap 网站</p>
                        <span className="btn">逛一逛“优站精选”</span>
                    </div>
                </div>


            </div>
        );
    }
}



