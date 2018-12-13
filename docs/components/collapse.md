---
title: Collapse
---
# 手风琴

## 多开页
### 预览
<ClientOnly>
   <collapse-demo1/>
</ClientOnly>

### 代码
```html
data () {
  selectedTab:['1','2'],
}
<div style="padding: 50px 0 ">
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="1" name="1">
        第一层
      </g-collapse-item>
      <g-collapse-item title="2" name="2">
        第二层
      </g-collapse-item>
      <g-collapse-item title="3" name="3">
        第三层
      </g-collapse-item>
      <g-collapse-item title="4" name="4">
        第四层
      </g-collapse-item>
    </g-collapse>
  </div>
  
  
```

## 单开页


### 预览

<ClientOnly>
   <collapse-demo2/>
</ClientOnly>

### 代码
```html
data () {
 selectedTab:['1']
}
<div style="padding: 50px 0 ">
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="1" name="1">
        第一层
      </g-collapse-item>
      <g-collapse-item title="2" name="2">
        第二层
      </g-collapse-item>
      <g-collapse-item title="3" name="3">
        第三层
      </g-collapse-item>
      <g-collapse-item title="4" name="4">
        第四层
      </g-collapse-item>
    </g-collapse>
  </div>
```