new Vue({
  el: ".baby",
  data: { name: "babu" ,
    website:"https://vuejs.org/v2/guide/instance.html#Data-and-Methods",
    website_tag:'<a href="https://www.google.com/">google</a>',
    
},
  methods: {
    greet: function (times) {
      return "good " + times + " " + this.name;
    },
  },
});
