new Vue({
  el: ".ba",
  data: {
    number: 0,
    name: "",
    age: 0,
    red: true,
    green: false,
    chars:["charan","kiran","ramuji"],
    nodes:[{name:'char',age:'10'},{name:'kir',age:'10'}]
  },
  methods: {
    greet: function (times) {
      return "good " + times + " ";
    },
    ager: function () {
      this.age = document.getElementById("ages").value;
    },
    add: function (num) {
      this.number += num;
    },
    red_toggle:function(){
      this.red=!this.red;
    },
    green_toggle:function(){
      this.green=!this.green;
    }
  },
});
