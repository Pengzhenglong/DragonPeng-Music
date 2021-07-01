<template>
  <div id="app">
    <top />
    <index />
    <!-- <router-view/> -->
  </div>
</template>
<script>

import top from './components/Top.vue'
import index from './components/Index.vue'
export default {
  name: 'app',
  components: {
    top,
    index
  }
}
</script>
<style>
#app {
  height: 100%;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
