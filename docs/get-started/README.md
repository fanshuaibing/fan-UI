---
title: 快速上手
---
# 快速上手


## 引入组件
> 你可以引入整个 UI，或是根据需要仅引入部分组件。我们介绍如何引入部分的 UI 组件。
CSS 需要单独引入
```javascript


import {Button} from 'fan-ui'
import 'fan-ui/dist/index.css';

export default {
  components:{
    'g-button': Button
  }
}
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


