<template>
  <div class="all">
    <div class="header">
      <div class="left">
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="right">
        <div class="description">
          <span>{{ playlist.name }}</span>
        </div>
        <div class="user">
          <div class="image">
            <img :src="playlist.creator.avatarUrl" alt="" />
          </div>
          <div>
            <span class="name">{{ playlist.creator.nickname }} </span>
          </div>
          <div>
            <span class="create-name">{{ playlist.createTime }} 创建</span>
          </div>
          <!-- <div>
            <span></span>
          </div> -->
        </div>
        <div class="player">
          <span class="iconfont icon-circle-play"></span>
          <span>播放全部</span>
        </div>
        <div class="paly-tag">
          <span>标签:</span>
          <span v-for="(item, index) in playlist.tags" :key="index">
            {{ item }}/
          </span>
        </div>
        <div class="desc">
          <span>简介</span>
          <span> {{ playlist.description }} </span>
        </div>
      </div>
    </div>
    <div>
      <el-tabs v-model="activeIndex" value="songs" id="list">
        <el-tab-pane label="歌曲列表" name="songs"  >
          <div class="song">
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
                <div
                  class="items"
                  v-for="(item, index) in playlist.tracks"
                  :key="index"
                >
                  <div class="number">
                    {{ index + 1 }}
                  </div>

                  <!-- <div class="num">
            <span>{{ index+1}}</span>
          </div> -->
                  <div class="right">
                    <div class="img-a">
                      <img :src="item.al.picUrl" alt="" />
                      <div
                        class="iconfont icon-play"
                        @click="playMusic(item.id)"
                      ></div>
                    </div>
                  </div>
                  <div class="right-r">
                    <span class="song-name">{{ item.name }}</span>
                    <span class="singer">{{ item.ar[0].name }}</span>
                    <span class="album-name">{{ item.al.name }}</span>
                    <span class="timer">{{ item.dt | formatDuration }}</span>
                  </div>
                </div>
                <!-- 分页器
      total 总条数
      current-page 当前页
      page-size 每页多少条数据
      current-change 页码改变事件
     -->
                <div class="footer"></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="评论" name="lists" > </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'songs',
      playlist: []
    }
  },
  methods: {
    async getlist() {
      const { data: data } = await this.$axios.get('playlist/detail', {
        params: {
          id: this.$route.query.q
        }
      })
      // console.log(data);
      this.playlist = data.playlist
      console.log(this.playlist)
    }
  },
  async created() {
    this.getlist()
  }
}
</script>

<style lang="scss"  scoped>
.all {
  max-width: 1100px;
  margin: 0;
  position: relative;
  .header {
    width: 100%;
    height: 230px;
    display: flex;
    position: relative;
    .left {
      width: 230px;
      height: 100%;
      margin-right: 20px;
      position: relative;
      img {
        width: 230px;
        height: 230px;
        border-radius: 10px;
        position: absolute;
        // display: inline;
      }
    }
    .right {
      flex: 1;
      width: 840px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .description {
        width: 840px;
        height: 20px;
        color: #333333;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
        line-height: 20px;
        margin: 0 0 20px;
      }
      .user {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 840px;
        height: 35px;
        margin: 0 0 15px;

        .image {
          width: 30px;
          height: 30px;
          img {
            border-radius: 50%;
            margin: 0 10px 0 0;
          }
        }
        .name {
          width: 32px;
          height: 21px;
          margin: 0 10px 0 0;
        }
        .create-name {
          font-size: 14px;
        }
      }
      .player {
        width: 120px;
        height: 35px;
        border-radius: 4px;
        background: linear-gradient(to right, #e85e4d, #c6483c);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        .iconfont {
        }
      }
      .paly-tag {
        width: 257px;
        height: 21px;
        display: flex;
        margin: 0 0 15px;
      }
      .desc {
        height: 21px;
        font-size: 15px;
      }
    }
  }
}

.song {
  max-width: 1100px;
  margin: 0 auto;
  // overflow: hidden;
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
#list{
  overflow: visible;
  position: relative;
}
.el-tabs   .el-tabs__content{
  overflow:   visible;

}

.el-tabs__content {
    overflow: visible;
    position: relative;
}
</style>