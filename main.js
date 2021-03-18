// Component-1 counter component

Vue.component('increase-count', {
template: '#click-counter-template',
data(){
  return{
    count: 0,
  }
}
}),

// Component-2 plan component using props
Vue.component('plan',{
  template:'#plan-template',
  props:['name']
})

new Vue({
  el: '#app',
  data:{
    plans:['The Hacker', 'title1', 'title2', 'title3']
  }
})