import Vue from 'vue'
import App from './App.vue'

// 중괄호 필요 여부는 export에 default를 쓰느냐의 차이
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
