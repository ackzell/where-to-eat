import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    v: '3',
    key: 'AIzaSyDaFZYxlz2oIvQNrMWJKDCMGjhpDMPfBVY',
    libraries: 'geometry,places'
  }
})
