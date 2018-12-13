---
title: Toast
---
# Toast

## 默认
<ClientOnly>
  <toast-demo1/>
</ClientOnly>

```html
<style>
* {
  box-sizing: border-box;
}
  .toastWrapper{
    z-index: 30;
  }
</style>
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```



## 可关闭弹出
<ClientOnly>
  <toast-demo2/>
</ClientOnly>


```html
<style>
* {
  box-sizing: border-box;
}
  .toastWrapper {
    z-index: 30;
  }
</style>
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
  onClickButton () {
    this.$toast('弹出可以关闭的', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
```

## 支持HTML
<ClientOnly>
  <toast-demo3/>
</ClientOnly>

```html
<style>
* {
  box-sizing: border-box;
}
  .toastWrapper {
    z-index: 30;
  }
</style>
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
  onClickButton () {
     this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
     })
  }
},
```
