<template>
  <div class="playlist">
    <!-- header -->
    <div class="header">
      <div class="image">
        <img
          src="http://p4.music.126.net/PZqH8c2ZZNwbR8S6ZcwaJw==/109951164807510929.jpg?param=280y280"
          alt=""
        />
      </div>
      <div class="header-right">
        <div class="best">精品歌单</div>
        <div class="center">岁月唱片机，好莱坞老电影经典原生</div>
        <div class="derection">
          封面：简介：封面：罗马假日 奥黛丽·赫本 Audrey Hepburn & 格利高里·派克
          Gregory Peck 经典永恒，岁月留声
          歌单收集的是1970年代以前美国部分经典电影的原声，大部分是好莱坞黄金时代的电影，类型有歌舞片、喜剧片、西部片和部分黑色电影。
          ☆部分参考美国电影学会（AFI）百年百大系列 1.百大电影歌曲 2.百大经典电影
          3.百大电影配乐 排序无先后 1.罗马假日(非原声，契合主题MV歌曲)
          2.蒂凡尼的早餐 3.雨中曲 4-5.毕业生 6.卡萨布兰卡 7.纽伦堡的审P
          8.控方证人 9.龙凤配 10.甜姐儿 11-12.绅士爱美人 13.大江东去 14.吉尔达
          15.乱世佳人 16.魂断蓝桥 17.亮眼睛 18.生 3.百大电影配乐 排序无先后
          1.罗马假日(非原声，契合主题MV歌曲) 2.蒂凡尼的早餐 3.雨中曲 4-5.毕业生
          6.卡萨布兰卡 7.纽伦堡的审P 8.控方证人 9.龙凤配 10.甜姐儿
          11-12.绅士爱美人 13.大江东去 14.吉尔达 15.乱世佳人 16.魂断蓝桥
          17.亮眼睛 18.生
        </div>
      </div>
      <div class="background-img"></div>
    </div>
    <!-- flex -->
    <div class="recommend">
      <div class="box">
        <div class="items" v-for="(item, index) in palylist" :key="index">
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
  </div>
</template>

<script>
export default {
  data() {
    return {

      palylist: [],
    }
  },
  methods: {

  },
  //获取歌单列表    /top/playlist/
  async created() {
    const { data: data } = await this.$axios.get('/top/playlist', {
      params: {
        limit: 50
      }
    })

    if (data.code == 200) {
      this.palylist = data.playlists
    }
    console.log(this.palylist)
  }
}
</script>

<style  lang='scss'>
.playlist {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  .recommend {
    margin-top:30px;
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
}
.playlist {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
.header {
  position: relative;
  width: 1100px;
  margin: 0 auto;

  display: flex;
  background-color: #b69292;
  padding: 20px;
}
.image {
  width: 160px;
  height: 160px;
  margin-right: 20px;
}
img {
  height: 100%;
}
.header-right {
  position: relative;
  width: 720px;
  height: 160px;
}
.background-img {
  background-image: url(http://p4.music.126.net/PZqH8c2ZZNwbR8S6ZcwaJw==/109951164807510929.jpg?param=280y280);
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}
.best {
  width: 100px;
  height: 30px;
  font-size: 18px;
  color: #dfac67;
  border: 1px solid #dfac67;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
}
.center {
  color: #f9f9f9;
  height: 31px;
  padding: 10px 0 0;
}
.derection {
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 12px;
  padding: 5px 0 0;
  overflow: hidden;
  /* white-space:nowrap; */
  text-overflow: ellipsis;
  height: 80px;
}
</style>