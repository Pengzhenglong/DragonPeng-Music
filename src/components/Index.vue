<template>
  <div class="index">
    <div  class="left">
    <div class="nav">
      <ul>
 
          <router-link tag="li" to="/discovery">
          发现音乐
          </router-link>


          <router-link tag="li" to="/playlist">
          推荐歌单
          </router-link>


          <router-link tag="li" to="/songs">

          最新音乐
          </router-link>

          <router-link tag="li" to="/mvs">
          最新mv
          </router-link>
  
      </ul>
    </div></div>
    <div class="main">
   <router-view/>
    </div>
  </div>
</template>

<script>
import  discovery  from '../views/Discovery.vue'
import  playlist  from '../views/Playlist.vue'
import  songs  from '../views/Songs.vue'
import  mvs  from '../views/Mvs.vue'
export default {
    components:{
      discovery,
      playlist,
      songs,
      mvs
    }
}
</script>
<style>
.index{
 margin-top:46px;
  display: flex;
  height: 830px;
}
.index  .left{
  width: 200px;
    background-color: aliceblue; 
}
.index .nav{ 
  width: 200px;

    position: fixed;

}
.index .nav ul{
  width:200px;
  margin: 0;
  padding: 0;
  border: 0;
}
.index  .nav  li{
  list-style: none;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;

padding: .85714rem  1.28571rem;
cursor: pointer;
}

.router-link-active{
  color:red
}
.main{
z-index: 1000;
  flex:1;
}
</style>