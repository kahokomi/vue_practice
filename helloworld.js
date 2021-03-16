// $function() {
//   $('#top-btn').click(function(){
//     $('html,body').animate({ 
//       'scrollTop': 0 
//     }, 'slow');
//   });
// };

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'あなたのページ' + new Date().toLocaleDateString()
  }
})

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Learn JavaScript'},
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: () => {
      app5.message = app5.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue ({
  el: '#app-6',
  data: {
    mess: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>This is a todo</li>'
})

var app = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
})