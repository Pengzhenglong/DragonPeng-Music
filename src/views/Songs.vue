<template>
  <div class="songs">
    <!-- 最新音乐 -->
    <div class="news">
      <div class="songs">
        <!--v-for -->
        <div class="items" v-for="(item, index) in song" :key="index">
          <!-- <div class="num">
            <span>{{ index+1}}</span>
          </div> -->
          <div class="right">
            <div class="img-a">
              <img :src="item.picUrl" alt="" />
            </div>
          </div>
          <div class="right-r">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: []
    }
  },
  async created() {
    const { data: songs } = await this.$axios.get('/top/song', {
      params: {
        limit: 10
      }
    })
    console.log(songs)
    // if (songs.code == 200) {
    //   this.song= songs.data
    // }
  }
}
</script>

<style  lang='scss'>
.songs {
  max-width: 1100px;
  margin: 0 auto;

  .news {
    margin-bottom: 40px;
    .songs {
      display: flex;
      flex-wrap: wrap;
      height: 500px;
      margin-left: 15px;
      .items {
        color: #4a4a4a;
        display: flex;
        align-items: center;
        width: 50%;
        height: 100px;
        .right {
          display: flex;
          .img-a img {
            width: 80px;
            height: 80px;
          }
        }
        .right-r {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 10px;
          height: 80%;
          .song-name {
            font-size: 16px;
          }
          .singer {
            font-size: 14px;
            color: #808080;
          }
        }

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>