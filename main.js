// document.write('<script type="text/javascript" src="./App.js" ></script>');
document.writeln("<script type='text/javascript' src='./App.js'></script>");
document.writeln("<link rel='stylesheet' href='./styles.css'>");

// var imported = document.createElement('script');
// imported.src = './App.js';
// document.head.appendChild(imported);


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
    },
    
  })
  // Component-3 New component using props
  
  
  new Vue({
    el: '#app'
  })
  
  // new app
  var NewApp = new Vue({
    el: '#NewApp',
    data:{
      styleObject:{
        color: 'red',
        fontSize:'30px',
        padding:'10px 10px 10px 10px',
        width:'50%'
      },
      styleObject2:{
        backgroundColor:'yellow',
      },
      
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