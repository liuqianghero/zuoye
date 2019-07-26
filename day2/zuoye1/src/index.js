const Vue = require('vue/dist/vue');
const vm = new Vue({
    el: '#demo',
    data: {
        search: "",
        html: "liuqiang dengwenyan 123456789"
    },
    computed: {
        computedhtml: function () {
            var arr = this.html.split(this.search)
            var str = arr.join("<span style='color:red'>" + this.search + "</span>")
            return str
        }
    },
    template: `
    <div id="demo">
    <input v-model="search" />
    <div v-html="computedhtml"></div>
    </div>
    `
})