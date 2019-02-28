module.exports = {
  base:'/fan-UI/',
  title: '凡人 UI ',
  description: '一个好用的 UI 框架',

  themeConfig:{
    sidebar: [
      {
        title:'入门',
        collapsable: false,
        children:[
           '/install/',
            '/get-started/'
        ]
      },
      {
        title:'组件',
        collapsable: false,
        children:[
            '/components/button.md',
            '/components/input.md',
            '/components/grid.md',
            '/components/layout.md',
            '/components/toast.md',
            '/components/tab.md',
            '/components/popover.md',
            '/components/collapse.md',
        ]
      }
    ]
  }
}