export function datePlugin(Vue) {
  Vue.filter('findYear', value => value.split('-')[0]);
}
