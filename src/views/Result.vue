<template>
  <div class="result-all">
    <div class="title">
      <h2 class="title-h">{{ $route.query.q }}</h2>
      <span class="sub-title">共找到{{ count }}个结果</span>
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
            <tr
              v-for="(item, index) in songs"
              :key="index"
              @dblclick="playMusic(item.id)"
              class="tr-cursur"
            >
              <td>1</td>
              <td>{{ item.name }}</td>

              <!-- 歌手的名字 -->
              <td>{{ item.artists[0].name }}</td>
              <!-- 专辑名称 -->

              <td>{{ item.album.name }}</td>
              <td>{{ item.duration }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="lists">
        <!-- 推荐歌单 -->
        <div class="recommend">
          <!-- <h3 class="title">推荐歌单</h3> -->
          <div class="box">
            <div class="items" v-for="(item, index) in list" :key="index">
              <div class="item">
                <div class="hot">
                  播放量：
                  <span>{{ item.playCount }}</span>
                </div>
                <img class="imga" :src="item.coverImgUrl" alt="" />
              </div>
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="mvs">
          <!-- <h3 class="title">推荐MV</h3> -->
          <div class="mv">
            <div class="items" v-for="(item, index) in mv" :key="index">
              <div class="right">
                <div class="img-a">
                  <img :src="item.cover" alt="" />
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
import axios from 'axios'
export default {

  data() {
    return {
      activeIndex: 'songs',
      songs: [],
      count: 0,
      list: [],
      mv: []
    }
  },
  watch: {
    activeIndex() {
      // songs 歌曲
      // lists 歌单
      // mv    mv
      let type = 1;
      let limit = 10
      switch (this.activeIndex) {
        case 'songs':
          type = 1
          limit = 10
          break
        case 'lists':
          type = 1000
          limit = 10
          break
        case 'mv':
          type = 1004
          limit = 8
          break
        default:
          break
      }
      axios({
        url: 'https://autumnfish.cn/search',
        method: 'get',
        params: {
          keywords: this.$route.query.q,
          type, // type:type,
          // 获取的数据量
          limit // limit: limit
        }
      }).then(res => {
        console.log(res)
        // 获取歌曲
        if (type == 1) {
          // 歌曲
          this.songs = res.data.result.songs
          // 计算歌曲时间
          for (let i = 0; i < this.songs.length; i++) {
            let min = parseInt(this.songs[i].duration / 1000 / 60)
            let sec = parseInt((this.songs[i].duration / 1000) % 60)
            if (min < 10) {
              min = '0' + min
            }
            if (sec < 10) {
              sec = '0' + sec
            }
            // console.log(min + '|' + sec)
            this.songs[i].duration = min + ':' + sec
          }
          // 保存总数
          this.count = res.data.result.songCount
        }
        // 获取 歌单
        else if (type == 1000) {
          // 歌单的逻辑
          this.list = res.data.result.playlists
          // 总数
          this.count = res.data.result.playlistCount
          // 处理 播放次数
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].playCount > 100000) {
              this.list[i].playCount =
                parseInt(this.list[i].playCount / 10000) + '万'
            }
          }
        } else {
          // 保存mv数据
          this.mv = res.data.result.mvs
          // 总数
          this.count = res.data.result.mvCount
          // 处理数据
          for (let i = 0; i < this.mv.length; i++) {
            // 时间
            let min = parseInt(this.mv[i].duration / 1000 / 60)
            let sec = parseInt((this.mv[i].duration / 1000) % 60)
            if (min < 10) {
              min = '0' + min
            }
            if (sec < 10) {
              sec = '0' + sec
            }
            this.mv[i].duration = min + ':' + sec

            // 播放次数
            if (this.mv[i].playCount > 100000) {
              this.mv[i].playCount =
                parseInt(this.mv[i].playCount / 10000) + '万'
            }
          }
        }
      })
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
        // console.log(this.songs)
        for (let i = 0; i < this.songs.length; i++) {
          let min = parseInt(this.songs[i].duration / 1000 / 60)
          let sec = parseInt((this.songs[i].duration / 1000) % 6)
          if (min < 10) {
            min = '0' + min
          }
          if (sec < 10) {
            sec = '0' + sec
          }
          this.songs[i].duration = min + ':' + sec
        }
        // console.log(data.result)
        this.count = data.result.songCount
      }
    },









    // 点击按钮，播放音乐 
    async playMusic(id) {
      //  console.log(id)
      const { data: music } = await this.$axios.get('/song/url', {
        params: {
          id
        }
      })
      // console.log(music)
      let url = music.data[0].url
      console.log(url)
      this.$parent.musicUrl = url
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
.tr-cursur {
  cursor: pointer;
}
// 歌单样式
.recommend {
  margin-bottom: 30px;
  .box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .items {
      width: 200px;
      margin: 0 10px;
      position: relative;
      .item {
        position: relative;
        overflow: hidden;
        .hot {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 5px;
          transform: translateY(-100%);
          transition: all 0.3s;
          width: 100%;
          // display: none;
          // opacity: 0;
        }

        .imga {
          width: 200px;
          height: 200px;
          z-index: 1000;
        }
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
      }

      &:hover {
        .item .hot {
          transform: translateY(0);
          // display: block;
          // opacity: 1;
        }
      }
    }
  }
}
// mv样式

.mvs .mv {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
  .items {
    margin-right: 20px;
    .right {
      width: 250px;
      height: 140.5px;
      .img-a img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .right-r {
      .item-name {
        width: 200px;

        font-size: 16px;

        margin-bottom: 10px;
        margin-top: 10px;
      }
      .item-Name {
        width: 200px;
        height: 20px;
        font-size: 14px;
        color: #c5c5c5;
        line-height: 20px;
      }
    }
  }
}
</style>