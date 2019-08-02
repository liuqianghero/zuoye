<template>
  <div>
    <Header />
    <search />
    <Grid />
    <divider />
    <dropdown />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import search from "@/components/search.vue";
import Grid from "@/components/Grid.vue";
import divider from "@/components/divider.vue";
import dropdown from "@/components/dropdown.vue";

export default {
  name: "home",
  components: {
    Header,
    search,
    Grid,
    divider,
    dropdown
  }
};
</script>
