<template>
  <div class="mv">
    <div class="left">
      <div class="title">
        <p>mv详情</p>
      </div>
      <video class="video" autoplay controls :src="url"></video>
      <div class="author">
        <div class="author-img">
          <img
            :src="icon"
            alt=""
          />
        </div>
        <div class="author-name"><p>{{mvInfo.artistName}}</p></div>
      </div>
      <p class="mv-name">
        {{mvInfo.name }}
      </p>
      <div class="desc">
        <span class="data">发布：2020-02-11</span>
        <span class="count">播放：{{ mvInfo.playCount }}次</span>
      </div>
      <!-- 最新评论 -->
      <div class="description-all">
        <h4>最新评论({{ total }})</h4>
        <div class="users" v-for="(item, index) of comments" :key="index">
          <div class="image-a">
            <img class="image-b" :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="user-left">
            <div class="left-a">
              <div class="name">
                <span class="user-name">{{ item.user.nickname }}:</span>
                <span>{{ item.content }}</span>
                <!-- <span>{{ item.content }}</span> -->
              </div>
              <div class="date">
                <span>2018-10-04 17:00:45</span>
              </div>
            </div>
            <div class="icon">
              <span>{{ item.likedCount }}赞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-title">
        <p>相关推荐</p>
        <div class="right-mv" v-for="(item, index) of semimv" :key="index">
          <div class="right-img">
            <img class="image" :src="item.cover" alt="" />
          </div>
          <div class="right-name">
            <div class="name-top">{{ item.name }}</div>
            <div class="name-des">{{ item.artistName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mv',
  data() {
    return {
      // mv地址
      url: "",
      semimv: [],
      comments: [],
      total: '',
      mvInfo: {},
      icon: ''
    }

  },
  methods: {
    // mv播放地址    /mv/url
    async getUrl() {
      const { data: urls } = await this.$axios.get('/mv/url', {
        params: {
          id: this.$route.query.q
        }
      })
      // console.log(data)
      this.url = urls.data.url
      // console.log(this.url)
    },
    //右侧相关mv     /simi/mv

    async getSimiMV() {
      const { data: simi } = await this.$axios.get('/simi/mv', {
        params: {
          mvid: this.$route.query.q
        }
      })
      // console.log(simi)
      if (simi.code == 200) {
        this.semimv = simi.mvs
      }
      // console.log(this.semimv)
    },
    //获取评论数据     /comment/mv
    async getcomment() {
      const { data: comment } = await this.$axios.get('/comment/mv', {
        params: {
          id: this.$route.query.q,
          limit: 10,
          offset: 0
        }
      })
      // console.log(comment)
      if (comment.code == 200) {
        this.comments = comment.comments
        this.total = comment.total
      }
      // console.log(this.comments)
      // console.log(this.total)
    },
    // 获取 mv的信息
    async getmvInfo() {
      const { data: mvInfos } = await this.$axios.get('/mv/detail', {
        params: {
          mvid: this.$route.query.q
        }
      })
      //  console.log(mvInfo)
      this.mvInfo = mvInfos.data
      console.log(this.mvInfo)
      const { data: artists } = await this.$axios.get('/artists', {
        params: {
          id: this.mvInfo.artists[0].id
        }
      })
      console.log(artists)
      // 歌手的封面信息
      this.icon = artists.artist.picUrl
    }
  },
  created() {
    this.getUrl()
    this.getSimiMV()
    this.getcomment()
    this.getmvInfo()
  }
}
</script>

<style   lang='scss'  scoped>
.mv {
  position: relative;
  display: flex;
  .left {
    flex: 1;
    .title {
    }
    .video {
      width: 40rem;
      height: 22rem;
    }
    .author {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      margin-top: 15px;
      .author-img {
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .author-name {
        margin-left: 5px;
      }
    }
    .mv-name {
      color: #4a4a4a;
      font-family: Helvetica Neue;
      font-size: 25px;
      font-weight: 700;
      line-height: 28px;
      margin: 0 0 16px;
    }
    .desc {
      height: 14px;
      color: #bebebe;
      font-size: 12px;
      line-height: 14.4px;
      .data {
        margin: 0 24px 0 0;
      }
      .count {
      }
    }
    .description-all {
      width: 100%;

      .users {
        // height: 90px;
        width: 100%;
        display: flex;
        line-height: 16.8px;
        color: #4a4a4a;
        font-size: 14px;
        padding: 20px 0 0;
        // justify-content: flex-start;
        .image-a {
          // width: 100%;
          // height: 90px;
          width: 43px;
          .image-b {
            width: 43px;
            height: 43px;
            border-radius: 50%;
            line-height: 16.8px;
          }
        }
      }
      .user-left {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .left-a {
          display: flex;
          flex-direction: column;
          // justify-content: flex-start;
          justify-content: space-between;
          font-size: 12px;
          line-height: 14.4px;
          margin-left: 20px;
          .name {
            .user-name {
              color: #517eaf;
              display: inline-block;
              line-height: 14.4px;
              margin: 0 4px 0 0;
            }
          }
          .date {
            color: #bebebe;
            font-size: 12.8px;
            line-height: 16px;
          }
        }
      }
    }
  }
  .right {
    position: relative;
    width: 40%;

    // background-color: red;
    .right-title {
      position: relative;
      width: 100%;
      height: 100px;
      .right-mv {
        display: flex;
        // flex-wrap: wrap;
        margin-bottom: 10px;
        .right-img {
          width: 150px;
          height: 83px;
          .image {
            width: 150px;
            height: 83px;
            border-radius: 5px;
          }
        }
        .right-name {
          width: 190px;
          color: #4a4a4a;
          font-size: 15px;
          margin: 0 0 0 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name-top {
            color: #4a4a4a;
            font-size: 14px;
            line-height: 16px;
            margin: 0 0 4px;
            text-overflow: ellipsis;

            overflow: hidden;
            white-space: nowrap;
          }
        }
        .name-des {
          color: #bebebe;
          font-size: 13px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>