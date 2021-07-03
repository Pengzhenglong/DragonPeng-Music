<template>
  <div class="song">
    <div class="tar">
      <span>全部</span>
      <span>华语</span>
      <span>欧美</span>
      <span>日本</span>
      <span>韩国</span>
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
              <div class="iconfont icon-play"></div>
            </div>
          </div>
          <div class="right-r">
            <span class="song-name">{{ item.name }}</span>
            <span class="singer">{{ item.album.artists[0].name }}</span>
            <span class="album-name">{{ item.album.name }}</span>
            <span class="timer">04:22</span>
          </div>
        </div>
        <!-- 分页器
      total 总条数
      current-page 当前页
      page-size 每页多少条数据
      current-change 页码改变事件
     -->
      </div>
    </div>
<!-- <div  class="footer">
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination> </div> -->
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
  async created() {
    const { data: songs } = await this.$axios.get('/top/song', {
      params: {
        type: this.tag,
        limit: 20,
      }
    })

    if (songs.code == 200) {
      this.song = songs.data
    }
    console.log(this.song)
  }
}
</script>

<style  lang='scss'  >

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
      // .icon-play {
      //   width: 25px;
      //   height: 25px;
      //   position: absolute;
      //   top: 50%;
      //      left: 4%;
      //   color: #dd6d60;
      //   font-size: 12px;
      //   border-radius: 50%;
      //   transform: translate(-50%, -50%);
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   background: rgba(255, 255, 255, 0.8);
      //   opacity: 1;
      //   &::before {
      //     transform: translateX(3px);
      //     content: "";
      //     width: 0;
      //     height: 0;
      //     border-width: 9px 0 9px 9px;
      //     border-style: solid;
      //     border-color: transparent #dd6d60 transparent;
      //     margin-right: 3px;
      //   }
      // }
      // &:hover .icon-play {
      //   opacity: 1;
      // }

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