// import App from './App'

const app = Vue.createApp({
  template:`
  <h1>Vue js</h1>
  <h1>Hello with CDN<h1>
  `
});
app.mount("#app");

const Counter =Vue.createApp({
  data() {
    return {
      counter: 0
    }
  }
});

Counter.mount('#counter');
