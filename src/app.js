import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from  './layout'
import Header  from './header'
import Footer from  './footer'
import Sider from  './sider'
import Content from  './content'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-col', Col);
Vue.component('g-row', Row);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-content',Content)
Vue.component('g-toast', Toast)
Vue.use(plugin)

import createElement from 'vue'
const h = createElement

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: true,
    message: '双向绑定'
  },
  created(){
    this.$toast('message',{
      enableHtml:false
    })
  },
  methods: {
    showToast(){
      this.$toast('message 测试测试测试测试测试测试测试测试测试测试' +
          '测试测试测试测试测试测' +
          '试测试测试测试测试测试测试测试',{
        enableHtml:false
      })
    }
  }
});


