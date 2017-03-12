import Vue from 'vue';
import app from './app';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#vue-root',
  template: '<app></app>',
  components: { app },
});
