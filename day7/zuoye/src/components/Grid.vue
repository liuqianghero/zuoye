<template>
    <van-grid :column-num="5">
  <van-grid-item
    @click="Ipage(index)"
    v-for="(k,index) in liuqiang"
    :key="index"
    :icon="k.image_hash"
    :text="k.name"
  />
</van-grid>
</template>

<script>
export default {
    data(){
        return{
    liuqiang:[] 
        };
    },
    async created(){
        let data = await this.$axios("https://www.easy-mock.com/mock/5d403b66447df940a974acfb/liuqiang/liuqiang");
        
        this.liuqiang = data.data.data[0].entries;
    },
    methods:{
    Ipage(id) {
      this.$router.push({
        path: 'Ipage',
        params: { id }
      });
    },
    }
}
</script>

