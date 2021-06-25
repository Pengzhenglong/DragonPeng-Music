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
    .title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18.72px;
      margin: 0 0 20px;
      padding: 0 0 0 0px;
    }
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
}
</style>