// 引入React
import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入应用程序文件
import App from './App';

// 渲染
// render(<App></App>, document.getElementById('app'));
render(<App page="start"></App>, document.getElementById('app'));
