---
title: 快速上手
---
# 快速上手


## 引入 Element
> 你可以引入整个 UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 UI。
¶ 完整引入
在 main.js 中写入以下内容：
```javascript

import Vue from 'vue';
import Fan from 'fan-ui';
import 'fan-ui/dist/index.css';
import App from './App.vue';

Vue.use(Fan);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
## 添加 CSS
 由于在学习中习惯使用 border-box ,请在 CSS 中开启 border-box 
  
```
 * ,*::before ,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
```


