import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.4, 1],
  offset: -40,
})
