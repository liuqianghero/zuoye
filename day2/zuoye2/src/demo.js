const Vue = require('vue/dist/vue');
const vm = new Vue({
    data:{
        tiete1: '未能获取地址',
        title2: '选择收货地址'
    },
    template:`
        <div id="demo">
            <p v-text="'title1'" :style="{
                fontSize: 15 +'px';
                color: white
            }"></p>
            <input type="text" placeholder="搜索饿了么商家,商品" :style=
            "{
                width: 200px;
                text-align: center;
                height:30px
            }">
        </div>
    `,

})