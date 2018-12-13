---
title: Popover
---
# 弹出层
## Click 触发
### 预览
---

<ClientOnly>
  <popover-demo1/>
</ClientOnly>

### 代码
```html
<div style="padding-top: 16px;">
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出层
        <g-button>支持HTMl</g-button>
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
```


## Hover 触发
### 预览

<ClientOnly>
  <popover-demo2/>
</ClientOnly>

### 代码
```html
  <div style="padding-top: 16px;">
    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
```


