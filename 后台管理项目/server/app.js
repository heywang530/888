// 引入express
const express = require('express');
// 引入https
const https = require('https');
// 引入http
const http = require('http');
// 引入fs
const fs = require('fs');
// 引入ejs
const ejs = require('ejs');

// 获取应用程序
const app = express();

// 配置引擎
app.engine('html', ejs.__express);

// 静态化
app.use('/static', express.static('./static/'));
app.use('/manifest.json', express.static('./static/home/manifest.json'));

// mock数据
app.use('/data', (req, res, next) => {
    // 先以?切割数据
    let arr = req.url.split('?');

    arr[0] += '.json';
    // 再以?拼接字符串
    req.url = arr.join('?');

    // 执行放行函数
    next();
}, express.static('./static/data/'));


// 路由
// 移动端的项目
app.get('/', (req, res) => {
    // res.render('index.html');
    // 移动端项目文件
    res.render('home.html');
})


// 后台管理系统页面
app.get('/admin', (req, res) => {
    res.render('admin.html');
})
// 模拟数据
app.post('/admin/login', (req, res) => res.json({ errno: 0, username: 'admin' }))
// 上传图片的接口
app.post('/admin/upload', (req, res) => res.json({ errno: 0, url: '/static/img/lesson/01.jpg' }))
// 创建课程列表
app.post('/admin/lesson/create', (req, res) => res.json({ errno: 0 }))
//删除课程
app.post('/admin/lesson/remove', (req, res) => res.json({ errno: 0 }))
//修改课程
app.post('/admin/lesson/update', (req, res) => res.json({ errno: 0 }))
// 编辑信息
app.post('/admin/lesson/saveintro', (req, res) => res.json({ errno: 0 }))


// mock数据 后台管理系统
// 注意: mock的数据要放在 模拟数据的下方配置
app.use('/admin', (req, res, next) => {
    // 先以?切割数据
    let arr = req.url.split('?');

    arr[0] += '.json';
    // 再以?拼接字符串
    req.url = arr.join('?');

    // 执行放行函数
    next();
}, express.static('./static/data/'));





// 定义端口
let httpPort = 3000;
let httpsPort = 3001;

// 创建http服务器应用
http.createServer(app)
    .listen(httpPort, () => console.log(httpPort))

// 创建https服务器应用
// 定义key cert
let key = fs.readFileSync('./ssl/private.pem');
let cert = fs.readFileSync('./ssl/file.crt');

https.createServer({ key, cert }, app)
    .listen(httpsPort, () => console.log(httpsPort))