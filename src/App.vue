<template>
  <div id="app">
<top/>
<index/>
    <!-- <router-view/> -->
  </div>
</template>
<script>

import top  from  './components/Top.vue'
import index  from  './components/Index.vue'
export default{
name:'app',
components:{
top,
index
}
}
</script>
<style>
body{
  margin:0;

}

</style>
