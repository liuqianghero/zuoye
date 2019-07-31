<template>
  <div id="app">
    <Header />
    <search />
     <Grid />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import search from './components/search.vue'
import Grid from './components/Grid.vue'


export default {
  name: 'app',
  components: {
   Header,
   search,
   Grid
  }
}
</script>

