<template>
  <div class="about">
    <router-view></router-view>
    <tabbar />
  </div>
</template>
<script>
// @ is an alias to /src
import tabbar from "@/components/tabbar.vue";

export default {
  name: "about",
  components: {
    tabbar,
   
  }
};
</script>

