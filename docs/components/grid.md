---
title: Grid 
---
# 网格

## 无缝网格
### 预览
---
<ClientOnly>
  <grid-demo1/>
</ClientOnly>

### 代码

```html
  * {
    box-sizing: border-box;
  }
  <g-row class="demoRow">
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
  </g-row>

```

##  间隙网格
### 设置 gutter
### 预览
---

<ClientOnly>
  <grid-demo2/>
</ClientOnly>

### 代码
```html
  * {
    box-sizing: border-box;
  }
  <g-row class="demoRow" gutter="10">
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
  </g-row>
  <g-row class="demoRow" gutter="10">
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
  </g-row>

```

## 空隙网格
### 设置 offset
### 预览
---

<ClientOnly>
  <grid-demo3/>
</ClientOnly>

### 代码
```html
* {
  box-sizing: border-box;
}
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
```