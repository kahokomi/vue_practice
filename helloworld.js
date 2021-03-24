// $function() {
//   $('#top-btn').click(function(){
//     $('html,body').animate({
//       'scrollTop': 0
//     }, 'slow');
//   });
// };

var app = new Vue({
  el: "#app-1",
  data: {
    message: "Hello Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "あなたのページ" + new Date().toLocaleDateString(),
  },
});

const app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  },
});

const app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: () => {
      app5.message = app5.message.split("").reverse().join("");
    },
  },
});

const app6 = new Vue({
  el: "#app-6",
  data: {
    mess: "Hello Vue!",
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>This is a todo</li>",
});

var app = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});

var data = { a: 1 };

var vm = new Vue({
  data: data,
});

vm.b = "hi";

var obj = {
  foo: "bar",
};

// Object.freeze(obj)

new Vue({
  el: "#app",
  data: obj,
});

new Vue({
  el: ".js-component01",
  data: {
    text: "",
  },
});

new Vue({
  el: ".js-component02",
  data: {
    input: "",
    text: "",
  },
  methods: {
    output: function () {
      this.text = this.input;
    },
  },
});

new Vue({
  el: ".js-component03",
  data: {
    input: "",
    html: "",
  },
  methods: {
    hoge: function () {
      this.html = '<span style="color: #fc0;">' + this.input + "</span>";
    },
  },
});

new Vue({
  el: ".js-component04",
  data: {
    a: "",
    momo: "",
  },
});

new Vue({
  el: ".js-component05",
  data: {
    text: "",
  },
  filters: {
    toUpperCase: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
});

var app = new Vue({
  el: "#number",
  data: {
    price: 29800,
  },
  filters: {
    numberFormat: (value) => {
      return value.toLocaleString();
    },
  },
});

new Vue({
  el: '.js-component06',
  data: {
    number: '0'
  },
  computed: {
    calc3Times: function() {
      return this.number * 3;
    }
  }
})

new Vue({
  el: '.js-component07',
  data: {
    origin: '100'
  },
  computed: {
    withTax: {
      get: function () {
        return parseInt(this.origin * 1.08)
      },
      set: function (value) {
        this.origin = Math.ceil(value / 1.08);
      } 
    }
  }
})