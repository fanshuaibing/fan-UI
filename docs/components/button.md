---
title: Button 
---

# 按钮

## 单个按钮

### 预览
---
<ClientOnly>
  <button-demo1/>
</ClientOnly> 

### 代码
```
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>

```

## 按钮组合

### 预览
---
<ClientOnly>
  <button-demo1/>
</ClientOnly> 

### 代码
```
<g-button-group>
   <g-button icon="left"></g-button>
   <g-button >默认</g-button>
   <g-button icon="right"></g-button>
</g-button-group>
      
```


