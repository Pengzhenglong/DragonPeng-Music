<template>
  <div class="song">
    <div class="tar">
      <span class="item" @click="tag = 0" :class="{ active: tag == 0 }"
        >全部</span
      >
      <span class="item" @click="tag = 7" :class="{ active: tag == 7 }"
        >华语</span
      >
      <span class="item" @click="tag = 96" :class="{ active: tag == 96 }"
        >欧美</span
      >
      <span class="item" @click="tag = 8" :class="{ active: tag == 8 }"
        >日本</span
      >
      <span class="item" @click="tag = 16" :class="{ active: tag == 16 }"
        >韩国</span
      >
    </div>
    <div class="center">
      <th></th>

      <th>音乐标题</th>
      <th>歌手</th>
      <th>专辑</th>
      <th>时长</th>
    </div>

    <!-- 最新音乐 -->
    <div class="news">
      <div class="songs">
        <!--v-for -->
        <div class="items" v-for="(item, index) in song" :key="index">
          <div class="number">
            {{ index + 1 }}
          </div>

          <!-- <div class="num">
            <span>{{ index+1}}</span>
          </div> -->
          <div class="right">
            <div class="img-a">
              <img :src="item.album.blurPicUrl" alt="" />
              <div class="iconfont icon-play" @click="playMusic(item.id)"></div>
            </div>
          </div>
          <div class="right-r">
            <span class="song-name">{{ item.name }}</span>
            <span class="singer">{{ item.album.artists[0].name }}</span>
            <span class="album-name">{{ item.album.name }}</span>
            <span class="timer">{{ item.duration }}</span>
          </div>
        </div>
        <!-- 分页器
      total 总条数
      current-page 当前页
      page-size 每页多少条数据
      current-change 页码改变事件
     -->
        <div class="footer">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: [],
      // 分类
      tag: '0'
    }
  },
  watch:{
tag(){
  this.getSongs()
}
  },
  methods: {
    async getSongs() {
      const { data: songs } = await this.$axios.get('/top/song', {
        params: {
          type: this.tag,
        limit: 20,
          offset: 1,
        }
      })

      if (songs.code == 200) {
        this.song = songs.data
      }
      for (let i = 0; i < this.song.length; i++) {
        // 获取  总毫秒数
        let duration = this.song[i].duration;
        // 假定 	350750 毫秒
        // 秒 350750/1000  350秒
        // 分 350 /60
        // 秒 350 % 60

        let min = parseInt(duration / 1000 / 60)
        if (min < 10) {
          min = '0' + min
        }
        let sec = parseInt((duration / 1000) % 60)
        if (sec < 10) {
          sec = '0' + sec
        }
        this.song[i].duration = `${min}:${sec}`
      }
      // console.log(this.song)
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
  },
  async created() {
    this.getSongs()
  }
}
</script>

<style  lang='scss'  >
.song  .tar .item.active {
  color: #dd6d60;
}
.song .news .footer .el-pagination {
  margin: 30px 10px;
  text-align: right;
  margin-bottom: 75px;
}
.song {
  max-width: 1100px;
  margin: 0 auto;
  // overflow: hidden;
}

.song .tar {
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.song .tar span {
  margin-right: 20px;
  font-size: 15px;
  cursor: pointer;
}

.center {
  /* color: #f9f9f9; */

  height: 31px;
  padding: 10px 0 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  color: #909399;
  font-weight: 500;
}
.news {
  margin-bottom: 40px;
  max-width: 1100px;
  position: relative;
  .songs {
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    margin-left: 15px;
    .items {
      color: #4a4a4a;
      display: flex;
      align-items: center;
      width: 100%;
      height: 90px;
      position: relative;
      .number {
        margin: 0 15px;
      }


      .right {
        display: flex;
        .img-a {
          position: relative;
          img {
            width: 70px;
            height: 70px;
            border-radius: 5px;
          }
          .icon-play {
            width: 25px;
            height: 25px;
            position: absolute;
            top: 50%;
            left: 50%;

            color: #dd6d60;
            font-size: 12px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.8);
            opacity: 1;
            &::before {
              transform: translateX(3px);
              content: "";
              width: 0;
              height: 0;
              border-width: 9px 0 9px 9px;
              border-style: solid;
              border-color: transparent #dd6d60 transparent;
              margin-right: 3px;
            }
          }
        }
      }
      .right-r {
        display: flex;
        justify-content: flex-start;
        /* justify-content: center; */
        padding-left: 100px;
        align-items: center;
        flex: 1;
        font-size: 16px;
        .song-name {
          width: 200px;
          margin-left: 50px;
          font-size: 14px;
          color: #606266;
        }
        .singer {
          width: 190px;
          margin-left: 50px;
        }
        .album-name {
          width: 235px;
          margin-left: 20px;
        }
      }

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
.song .el-pagination {
  // margin: 30px 10px;
  text-align: right;
  // margin-bottom: 136px;
}
</style>