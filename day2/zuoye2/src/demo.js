const Vue = require('vue/dist/vue');


//组件2
Vue.component( 'my_Header' ,{
    props : ['abc','change'],
    data (){
        return {
            name : 'first',
            show : true,
            // change : false,
        }
    },
    template :`
        <header @click = "doChange()"  :class = "{myhead : this.change}">
            头部组件{{name}}
            <p v-show = "show" >{{abc}}</p>
        </header>
    ` ,methods :{
        doChange(){
            this.change = true;
            this.show = false;
            // this.change = false;
        }
    }
});


//容器
 new Vue({
    el : '#demo',
    data : {
         name : 'two',
         show : 1,
         change : false
    }
    ,
    template : `
    <div>
    <my_Header :abc = "name" :change = "change"></my_Header>
    </div>
    `
})
