# 这是一个Vue的UI框架
[![Build Status](https://travis-ci.org/fatfanfan/fan-UI.svg?branch=master)](https://travis-ci.org/fatfanfan/fan-UI)
## 介绍
这是我在学习 Vue 过程中做得一个 UI框架
## 开始使用
 1.添加 CSS
 使用本框架前，请在 CSS 中开启 border  
 ```
 * ,*::before ,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 ``` 
 你还需要设置颜色等变量（后续会改为 SCSS 变量）
 ```
 html {
    --button-height: 32px;
 	--font-size: 14px;
	--button-bg: white;
 	--button-active-bg: #eee;
 	--border-radius: 4px;
 	--color: #333;
 	--border-color: #999;
 	--border-color-hover: #666;
 }
 ```
 IE 15 以上浏览器支持此样式
2.安装
```
npm i --save fan-ui
```
引入
```
import {Button,ButtonGroup,Icon} from  'fan-ui'
import 'fan-ui/dist/index.css'
export default {
  name: 'App',
  components: {
    HelloWorld,
    'g-button':Button
  }
}
```
## 文档

