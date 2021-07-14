<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img class="banner-img" :src="item.imageUrl" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="box">
        <div class="items" v-for="(item, index) in list" :key="index"  @click="toPlaylist(item.id)">
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
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="songs">
        <!--v-for -->
        <div class="items" @click="playMusic(item.id)" v-for="(item, index) in news" :key="index">
         
          <!-- <div class="num">
            <span>{{ index+1}}</span>
          </div> -->
          <div class="right">
            <div class="img-a">
              <img :src="item.picUrl" alt="" /> 
              <div  class="iconfont icon-play"></div>
            </div>
          </div>
          <div class="right-r">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐MV -->
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
    <!-- 回到顶部 -->
    <!-- <el-backtop></el-backtop> -->
  </div>
</template>

<script>
// 导入辅助函数
// import  {mapActions}  from  'vuex'
export default {
  data() {
    return {
      list: [],
      banner: [],
      news: [],
      mvs: []
    }
  },
  methods:{
     async toPlaylist(id){
          this.$router.push(`/playlist/?q=${id}`)
     },
    // 点击按钮，播放音乐
      async   playMusic(id){
      //  console.log(id)
      const  {data:  music}  =await  this.$axios.get('/song/url',{
        params:{
              id
        }
      })
      // console.log(music)
      let  url=music.data[0].url
      console.log(url)
      this.$parent.musicUrl=url
      }
  },
  async created() {
    const { data: data } = await this.$axios.get('/banner')
    // console.log(data)
    if (data.code == 200) {
      this.banner = data.banners
    }
    //  推荐歌单   /personalized
    const { data: Playlist } = await this.$axios.get('/personalized', {
      params: {
        limit: 10
      }
    })
    if (Playlist.code == 200) {
      this.list = Playlist.result
    }
    // // 3.最新音乐  /personalized/newsong
    const { data: newsongs } = await this.$axios.get('/personalized/newsong')
    // console.log(newsongs)
    if (newsongs.code == 200) {
      this.news = newsongs.result
    }
    //    // 4.最新MV  /personalized/mv
    const { data: mvs } = await this.$axios.get('/personalized/mv')
    // console.log(mvs)
    if (mvs.code == 200) {
      this.mvs = mvs.result
    }

  }
}
</script>


<style lang='scss'   >
.discovery-container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  .el-carousel__container {
    height: 230px;
    .banner-img {
      height: 100%;
      width: 100%;
    }
  }
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
        position: relative;


        .right {
          display: flex;
          .img-a{
            position: relative;
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
          opacity: 0;
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
        &:hover .icon-play {
          opacity: 1;
        }
               img {
            width: 80px;
            height: 80px;
          }
          }
        
        }
        .right-r {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
         padding-right: 250px;
         padding-left: 0;
          height: 80%;
          .song-name {
            font-size: 16px;
            margin-left: 10px;
          }
          .singer {
            font-size: 14px;
            color: #808080;
            margin-left: 10px;
          }
        }

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
  .mvs .mv {
    display: flex;
    justify-content: space-between;
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
}
.title {
  font-weight: 400;
  font-size: 18.72px;
  margin: 0 0 20px;
  padding: 0 0 0 0px;
}
// .el-backtop{
//   margin-bottom: 30px;
// }
</style>