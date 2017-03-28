import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import index from './router/index';
import App from './App';
import './common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter(index);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
router.push('/goods');

