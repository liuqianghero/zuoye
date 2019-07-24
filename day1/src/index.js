const Vue = require('../node_modules/vue/dist/vue');
require('../dist/index.css');
const vm = new Vue({
    el : '#box',
    data:{
        arr:[{
            title:'篮球',
            index:0,
            show:true
        }, 
        {
            title:'足球',
            index:1,
            show:false
        },
        {
            title:'音乐',
            index:2,
            show:false
        }]
    },
    template:`
    <div id="box">
    <ul id="mulu">
        <li v-for="(item,idx) in arr" v-text="item.title" :class="idx==item.index?'hover':''"  v-on:click="son(idx)" ></li>
    </ul>
    <ul id="neirong">
        <li v-for="(item,idx) in arr" v-text="item.title" v-show="item.show"></li>
    </ul>
    </div>
    `,
    methods: {
        son(idx){
            for(var i= 0;i<this.arr.length;i++){
                this.arr[i].show =false;
            }
            this.arr[idx].show =true;
        }
    }
})