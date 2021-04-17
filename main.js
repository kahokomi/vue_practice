var app = new Vue({
  el: '#app',
  data: {
    message: '初期メッセージ',
    list: ['りんご', 'いちご'],
    show: true
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})

new Vue({
  el: '#app1',
  computed: {
    computedMessage: function(){
      return this.message + '!'
    }
  }
})