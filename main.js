// import App from './App'

const app = Vue.createApp({
  data(){
    return {
      counter: 0,
      count:0
    }
  },
  mounted(){
    setInterval(()=>{
      this.counter++;
    }, 500)
  },
  
  // template:'<button v-on:click = "count++">you click me{{count}} times.</button>'  

});
app.mount("#app");


