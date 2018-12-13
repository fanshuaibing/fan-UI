---
title: Input 
---

# 输入框


## 普通用法
<br>

### 预览
<ClientOnly>
  <input-demo1/>
</ClientOnly>

### 代码

```html
<g-input value="这是value"></g-input> 
<g-input value="readonly" readonly></g-input> 
<g-input value="disabled" disabled></g-input>
<g-input error="error"></g-input>
```
 
## 双向绑定
### 预览

<ClientOnly>
  <input-demo2/>
</ClientOnly>

### 代码
```html
data () {
  value: '双向绑定',
}
<g-input v-model="value"></g-input>
<div>value: {{value}}</div>

```