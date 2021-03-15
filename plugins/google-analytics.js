import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

Vue.use(vueAnalytics, {
  id: 'UA-173896946-1',
  disabled: false,
  debug: {
    enabled: false,
    trace: true,
    sendHitTask: true
  }
})


/* const getGDPR = localStorage.getItem('GDPR:accepted')

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
  Vue.use(vueAnalytics, {
    id: 'UA-173896946-1',
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  Vue.use(vueAnalytics, {
    id: 'UA-173896946-1',
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  })
} */