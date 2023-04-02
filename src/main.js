import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'cesium/Widgets/widgets.css';
//加载element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from './store';
import { Store } from 'vuex';
// import './styles/index.less'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')