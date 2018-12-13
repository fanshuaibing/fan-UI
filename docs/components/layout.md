---
title: Layout
---
# 布局

##  默认布局

### 预览
<ClientOnly>
  <layout-demo1/>
</ClientOnly>

### 代码
```html
* {
  box-sizing: border-box;
}
<div style="padding-top: 16px;">
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
  </div>
```

## 中间层分割布局

### 预览
---

<ClientOnly>
  <layout-demo2/>
</ClientOnly>

### 代码

```html
* {
  box-sizing: border-box;
}
<div style="padding-top: 16px;">
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
  </div>
```

## 两栏布局

### 侧边栏可关闭
### 预览

<ClientOnly>
  <layout-demo3/>
</ClientOnly>

### 代码
```html
* {
  box-sizing: border-box;
}
<div style="padding-top: 20px; ">
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-sider close style=" background:#ddd; width:200px; color: black;">
        sider
      </g-sider>
      <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
          header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>
  </div>
```