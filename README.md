# 这是一个Vue的UI框架
[![Build Status](https://travis-ci.org/fatfanfan/fan-UI.svg?branch=master)](https://travis-ci.org/fatfanfan/fan-UI)
## 介绍
这是我在学习 Vue 过程中做的一个 UI框架,仅供学习交流，请勿在生产环境中使用
## 开始使用
 1.添加 CSS
 由于在学习中习惯使用 border-box ,请在 CSS 中开启 border-box  
 ```
 * ,*::before ,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

2.安装
```
> npm install fan-ui  -save

> $ yarn add fan-ui
```
引入需要用的组件,引入 CSS
```
import {Button,ButtonGroup,Icon} from  'fan-ui'
import 'fan-ui/dist/index.css'
export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-Icon': Icon
  }
}
```


