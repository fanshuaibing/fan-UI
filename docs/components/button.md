---
title: Button 
---
# 按钮

## 使用方法

### 预览
---
<ClientOnly>
  <button-demos/>
</ClientOnly>

   

### 单个按钮代码
```html
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>

```

### 按钮组合代码
```html
<g-button-group>
   <g-button icon="left"></g-button>
   <g-button >默认</g-button>
   <g-button icon="right"></g-button>
</g-button-group>
      
```


