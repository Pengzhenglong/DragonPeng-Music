<template>
  <div class="index">
    <div class="left">
      <div class="nav">
        <ul>
          <router-link tag="li" to="/discovery"
            ><span>发现音乐</span>
          </router-link>

          <router-link tag="li" to="/playlists"
            ><span>推荐歌单</span>
          </router-link>

          <router-link tag="li" to="/songs"><span>最新音乐</span></router-link>

          <router-link tag="li" to="/mvs"><span>最新mv</span> </router-link>
            <router-link tag="li" to="/playlist"><span>专辑列表</span> </router-link>
        </ul>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="bottom">
      <audio :src="musicUrl"  controls  ></audio>
      <!-- <aplayer
        ref="aplayer"
        :audio="audioInfo"
        :lrcType="1"
        :volume.sync="volume"
        :mini.sync="mini"
        :loop.sync="loop"
        :order.sync="order"
        :listFolded.sync="listFolded"
        :fixed="fixed"
        :autoplay="autoplay"
        @playing="play"
      /> -->
    </div>
        <!-- 回到顶部 -->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import discovery from '../views/Discovery.vue'
import playlists from '../views/Playlists.vue'
import songs from '../views/Songs.vue'
import mvs from '../views/Mvs.vue'
import playlist from '../views/Playlist.vue'
export default {
  data() {
    return {
      musicUrl:'http://m801.music.126.net/20210702174302/fbe2aafe5c00f402df761abbc88ca65b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/9524435525/2897/d82f/77aa/f9a4a521bf1985b6156e780b0024beb3.mp3',
      // 播放列表最大高度
      // listMaxHeight: '130',
      // 设置播放器的音量
      volume: 0.7,
      // 迷你模式
      mini: false,
      // 音频循环播放, 可选值: 'all', 'one', 'none'
      loop: 'all',
      // 音频循环顺序, 可选值: 'list', 'random'
      order: 'random',
      // 自动播放
      autoplay: false,
      // 吸底模式
      fixed: true,
      // 是否显示音乐控制面板
      listFolded: true,
      state: true,
      // 是否显示导航栏 nav
      hideNav: true,

    }
  },
  components: {
    discovery,
    playlists,
    songs,
    mvs,
    playlist
  }
}
</script>
<style >
.el-backtop{
  margin-bottom: 30px;
}
.index {
  margin-top: 46px;
  display: flex;
  height: 100%;
}
.index .left {
  width: 200px;

  height: 100%;
}
.index .nav {
  width: 200px;

  position: fixed;
  color: #000;
left: 0;
  font-size: 18px;
  height: 100%;
   background-color: #e7e7e7;
}
.index .nav ul {
  width: 200px;
  margin: 0;
  padding: 0;
  border: 0;
}
.index .nav li {
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  width: 200px;
}
.nav ul span {
  margin-left: 30px;
}
.index .nav li:hover {
  background-color: #b8b1b1;
}

.router-link-active {
  color: red;
}
.main {
  z-index: 1000;
  flex: 1;
 
  /* overflow-y: scroll; */
}
.index .main > div {
  max-width: 1100px;
  margin: 0 auto;
}
.bottom {
  /* 显示在上 */
  z-index: 1001;
  height: 60px;
  width:100%;
   background: #f1f3f4;
   position: fixed;
   bottom: 0;
   left: 0;

}
audio{
  width:100%;
  border-radius: 0;
  outline: 0;
}
</style>