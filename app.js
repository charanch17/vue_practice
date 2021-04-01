new Vue({
    el:".baby",
    data:{"name":"babu"},
    methods:{
        greet:function(times){
            return 'good '+times+' '+this.name;
             }
    }
})