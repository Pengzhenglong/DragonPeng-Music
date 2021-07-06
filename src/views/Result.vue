<template>
  <div class="result-all">
    <div class="title">
      <h2 class="title-h">{{ $route.query.q }}</h2>
      <span class="sub-title">{{count}}</span>
    </div>
    <el-tabs v-model="activeIndex" value="songs">
      <el-tab-pane label="歌曲" name="songs">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr  v-for="(item,index)  in  songs"  :key="index">
              <td>1</td>
             <td>{{item.name}}</td>
           
            <!-- 歌手的名字 -->   
              <td>{{item.artists[0].name}}</td>
  <!-- 专辑名称 -->  

              <td>{{item.album.name}}</td>
              <td>{{item.duration}}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
        <!-- 推荐歌单 -->
        <div class="recommend">
          <h3 class="title">推荐歌单</h3>
          <div class="box">
            <div class="items" v-for="(item, index) in list" :key="index">
              <div class="item">
                <div class="hot">
                  <span>{{ item.copywriter }}</span>
                </div>
                <img class="imga" :src="item.picUrl" alt="" />
              </div>
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="third">
        <div class="mvs">
          <h3 class="title">推荐MV</h3>
          <div class="mv">
            <div class="items" v-for="(item, index) in mvs" :key="index">
              <div class="right">
                <div class="img-a">
                  <img :src="item.picUrl" alt="" />
                </div>
              </div>
              <div class="right-r">
                <div class="item-name">{{ item.name }}</div>
                <div class="item-Name">{{ item.artistName }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!-- 推荐MV -->
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'songs',
      songs: [],
      count:''
    }
  },
  created() {
    this.getSongList()
  },
  methods: {
    async getSongList() {
      const { data: data } = await this.$axios.get('/search', {
        params: {
          keywords: this.$route.query.q,
          type: 1,
          limit: 10
        }
      })
      // console.log(data)
      if (data.code == 200) {
        this.songs = data.result.songs
        console.log(this.songs)
        for(let  i=0;i<this.songs.length;i++){
          let  min = parseInt(this.songs[i].duration/1000/60)
          let  sec  = parseInt((this.songs[i].duration/1000)%6)
          if(min<10){
            min='0'+min
          }
          if(sec<10){
            sec='0'+sec
          }
          this.songs.[i].duration=min+':'+sec
        }
        // console.log(data.result.songCount)
        this.count=data.result.songCount
      }
    }
  }
}

</script>

<style  lang="scss" >
.result-all {
  max-width: 1100px;
  .title {
    display: flex;
    align-items: flex-end;
    height: 32px;
    margin: 0;
    .title-h {
      font-family: Helvetica Neue;
      font-size: 24px;
      font-weight: 700px;
      margin: 0px 10px 0px 0px;
    }
    .sub-title {
      height: 20px;
      color: #bebebe;
      font-size: 15px;
    }
  }
}
</style>