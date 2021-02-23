//  // 测试babel
//  document.querySelector('#root').addEventListener('click', () => {
//     import('./test.js').then(res => {
//       res.default()
//     })
//   })
  
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
