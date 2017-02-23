// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import { router } from './config/router.config'
import './config/vue2-google-maps.config'
// import './config/vue-material.config'
import './config/vuetify.config'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
