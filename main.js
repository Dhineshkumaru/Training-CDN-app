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

Vue.component('plan-picker',{
  template:'#plan-picker-template',
  data(){
   return{
    plans:['The Hacker', 'title1', 'title2', 'title3']
   }
  }
})


new Vue({
  el: '#app'
})

// new app
var NewApp = new Vue({
  el: '#NewApp',
  data:{
    activeColor: 'red',
    fontSize:30,
    message: 'Test NewApp'  + new Date().toLocaleString(),
    DemoTest:'Demo test is working',
    seen: true,
    todos:[
      {name:"name1"},
      {name:"name2"},
      {name:"name3"},
    ]
  }
})