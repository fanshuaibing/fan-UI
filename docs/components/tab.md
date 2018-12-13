---
title: Tabs
---
# 标签


## 简单用法

<ClientOnly>
  <tabs-demo1/>
</ClientOnly>

### 代码
```html
data() {
  selected: '1',
}
<div style="padding-top: 16px;">
    <g-tabs :selected="selected" style="border: 1px solid #00ccff;">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>

```