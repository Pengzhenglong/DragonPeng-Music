<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img class="banner-img" :src="item.image" alt="" />
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
              <span>{{ item.title }}</span>
            </div>
            <img class="imga" :src="item.img" alt="" />
          </div>
          <p>{{ item.words }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="songs">
        <!--v-for -->
        <div class="items" v-for="(item, index) in news" :key="index">
          <div class="num">
            <span>{{ item.id }}</span>
          </div>
          <div class="right">
            <div class="img-a">
              <img :src="item.image" alt="" />
            </div>
            <div class="right-r">
              <div>{{ item.name }}</div>
              <div>{{ item.songsname }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mvs -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="mv">
        <div class="items" v-for="(item, index) in mvs" :key="index">
          <div class="right">
            <div class="img-a">
              <img :src="item.image" alt="" />
            </div>
          </div>
          <div class="right-r">
            <div>{{ item.name }}</div>
            <div>{{ item.songername }}</div>
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
      list: [
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },
        {
          title: '热门推荐',
          img: "https://p2.music.126.net/IN30SRq1auUunDJpN2qw6Q==/109951166034869996.jpg",
          words: '有些话我听了会开心，但永远会开心的'
        },

      ],
      banner: [
        {
          url: 'http:www.baidu.com',
          image: 'http://p1.music.126.net/cxAKlTtOS3kzcqpL_KvfvQ==/109951166114869532.jpg'
        },
        {
          url: 'http:www.baidu.com',
          image: 'http://p1.music.126.net/cxAKlTtOS3kzcqpL_KvfvQ==/109951166114869532.jpg'
        },
        {
          url: 'http:www.baidu.com',
          image: 'http://p1.music.126.net/cxAKlTtOS3kzcqpL_KvfvQ==/109951166114869532.jpg'
        },
        {
          url: 'http:www.baidu.com',
          image: 'http://p1.music.126.net/cxAKlTtOS3kzcqpL_KvfvQ==/109951166114869532.jpg'
        },
      ],
      news: [
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
        {
          id: '01',
          image: 'http://p3.music.126.net/RwqmaJNBVr2PAccGWfMEVw==/109951166111591316.jpg?param=120y120',
          name: '买花的人',
          songsname: '魏如轩/鲜于钲二'
        },
      ],
      mvs: [
        {
          image: 'https://p2.music.126.net/e5FlRtdhRCA0PLat7dgDlQ==/109951166117884028.jpg',
          name: 'Need Some of That (Live)',
          songername: 'Weezer'
        },
        {
          image: 'https://p2.music.126.net/e5FlRtdhRCA0PLat7dgDlQ==/109951166117884028.jpg',
          name: 'Need Some of That (Live)',
          songername: 'Weezer'
        },
        {
          image: 'https://p2.music.126.net/e5FlRtdhRCA0PLat7dgDlQ==/109951166117884028.jpg',
          name: 'Need Some of That (Live)',
          songername: 'Weezer'
        },
        {
          image: 'https://p2.music.126.net/e5FlRtdhRCA0PLat7dgDlQ==/109951166117884028.jpg',
          name: 'Need Some of That (Live)',
          songername: 'Weezer'
        },
      ]
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
    .items {
      background-color: #f5fef5;
      color: #4a4a4a;
      display: flex;
      width: 50%;
      .right {
        display: flex;
        .right-r {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }}
  }
  .mvs .mv {
    display: flex;
    justify-content: space-between;
    .items {

      .right  {
        width:250px;
        height: 140.5px;
        .img-a  img{
          width:100%
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