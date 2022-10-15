// 引入常量
import { ADD_LESSON, DEL_LESSON } from '../consts/';

// 定义消息对象
export let addlesson = data => ({ type: ADD_LESSON, data });
export let dellesson = data => ({ type: DEL_LESSON, data });