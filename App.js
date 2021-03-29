// document.writeln("<script type='text/javascript' src='./gsap.min.js'></script>");

Vue.component('new-app-component', {
    template: '#new-app-component-template',
    data(){
      return{
        // count: 0,
      }
    },
    methods:{
      anim(){
        gsap.from('.anim2', {
          opacity: 0, 
          duration: 0.5, 
          y: -50,
          // ease: 'elastic(3, 0.3)'
      })
      },
      anim1(){
        var tl = gsap.timeline();
        tl.to(".anim3", {duration: 1, rotation: 360});
      //   gsap.from('.anim3', {
      //     opacity: 0, 
      //     duration: 0.5, 
      //     y: -50,
      //     ease: 'elastic(3, 0.3)'
      // })
      }
    }
    }),

new Vue({
    el:'#App2',
    data:{
        message3:'import is working',
    }
})