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
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="songs">
        <!--v-for -->
        <div class="items" v-for="(item, index) in news" :key="index">
          <!-- <div class="num">
            <span>{{ index+1}}</span>
          </div> -->
          <div class="right">
            <div class="img-a">
              <img :src="item.picUrl" alt="" />
            </div>
            <div class="right-r">
              <div>{{ item.name }}</div>
              <div>{{ item.song.artists[0].name }}</div>
            </div>
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
            <div>{{ item.name }}</div>
            <div>{{ item.artistName }}</div>
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
      list: [],
      banner: [],
      news: [],
      
     
      mvs: []
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
    const { data: newsongs} = await this.$axios.get('/personalized/newsong')
    // console.log(newsongs)
    if (newsongs.code == 200) {
      this.news = newsongs.result
    }
//    // 4.最新MV  /personalized/mv
    const { data: mvs} = await this.$axios.get('/personalized/mv')
    console.log(mvs)
    if (mvs.code == 200) {
      this.mvs= mvs.result
    }

  }
}
</script>


<style lang='scss' >
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
      .items {
        background-color: #f5fef5;
        color: #4a4a4a;
        display: flex;
        width: 50%;
        height: 100px;
        .right {
          display: flex;
          .img-a  img{
           width: 80px;
           height: 80px;
          }
          .right-r {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }
      }
    }
  }
  .mvs .mv {
    display: flex;
    justify-content: space-between;
    .items {
      .right {
        width: 250px;
        height: 140.5px;
        .img-a img {
          width: 100%;
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
</style>