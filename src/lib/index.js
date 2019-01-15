import vueRateShow from './vue-rate-show'

const rateShow = {
  install (Vue, options) {
    Vue.component(vueRateShow.name, vueRateShow)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(rateShow);
}

export default rateShow;
