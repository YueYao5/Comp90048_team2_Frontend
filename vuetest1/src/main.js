import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import  VueResource  from 'vue-resource'
import './plugins/element.js'
import Spinner from 'vue-simple-spinner'
import uploader from 'vue-simple-uploader'

Vue.use(VueResource)
Vue.use(uploader)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
  components:{
    Spinner
  }
}).$mount('#app')
