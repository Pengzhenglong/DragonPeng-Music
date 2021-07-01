<template>
  <div class="playlist">
    <!-- header -->
    <div class="header">
      <div class="image">
        <img :src="topLists.coverImgUrl" alt="" />
      </div>
      <div class="header-right">
        <div class="best">精品歌单</div>
        <div class="center">{{ topLists.name }}</div>
        <div class="derection">
          {{ topLists.description }}
        </div>
      </div>
      <!-- 背景 -->
      <img :src="topLists.coverImgUrl" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <!-- flex -->

    <div class="recommend">
      <!-- 栏 -->
      <div class="tab">
        <span
          class="item"
          :class="{ active: selected == '全部' }"
          @click="selected = '全部'"
          >全部
        </span>
        <span
          class="item"
          :class="{ active: selected == '欧美' }"
          @click="selected = '欧美'"
          >欧美</span
        >
        <span
          class="item"
          :class="{ active: selected == '华语' }"
          @click="selected = '华语'"
          >华语</span
        >
        <span
          class="item"
          :class="{ active: selected == '流行' }"
          @click="selected = '流行'"
          >流行</span
        >
        <span
          class="item"
          :class="{ active: selected == '说唱' }"
          @click="selected = '说唱'"
          >说唱</span
        >
        <span
          class="item"
          :class="{ active: selected == '摇滚' }"
          @click="selected = '摇滚'"
          >摇滚</span
        >
        <span
          class="item"
          :class="{ active: selected == '民谣' }"
          @click="selected = '民谣'"
          >民谣</span
        >
        <span
          class="item"
          :class="{ active: selected == '电子' }"
          @click="selected = '电子'"
          >电子</span
        >
        <span
          class="item"
          :class="{ active: selected == '轻音乐' }"
          @click="selected = '轻音乐'"
          >轻音乐</span
        >
        <span
          class="item"
          :class="{ active: selected == '影视原生' }"
          @click="selected = '影视原生'"
          >影视原生</span
        >
        <span
          class="item"
          :class="{ active: selected == 'ACG' }"
          @click="selected = 'ACG'"
          >ACG</span
        >
        <span
          class="item"
          :class="{ active: selected == '怀旧' }"
          @click="selected = '怀旧'"
          >怀旧</span
        >
      </div>
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
     <!-- 分页器
      total 总条数
      current-page 当前页
      page-size 每页多少条数据
      current-change 页码改变事件
     -->
<el-pagination
  :page-size="50"
  :pager-count="8"
  layout="prev, pager, next"
  :current-page="page"
  :total="total"
  @current-change="handleCurrentchange">
</el-pagination>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 总条数
      total:0,
      // 当前页数
      page:1,
      // 歌单列表
      palylist: [],
      // 顶部推荐歌单列表
      topLists: {},
      selected:'全部'
    }
  },
  methods: {
    handleCurrentchange(val){
      // 字符串模板 变量名可以写在${}中
        // console.log(`当前页：${val}`)
        this.page=val
        this.getList()
        
    },
    async getTopList(limit, cat) {
      // 获取  顶部  歌单
      const { data: topList } = await this.$axios.get('/top/playlist/highquality', {
        params: {
          limit,
          // 分类数据
          cat: cat
        }
      })

      if (topList.code == 200) {
        this.topLists = topList.playlists[0]
        console.log(topList)
      }
    },
    async getList(limit,cat,offset=1) {
      const { data: play } = await this.$axios.get('/top/playlist', {
        params: {
          limit,
          cat,
          // 起始的值，( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
          offset:(this.page-1)*50
        }
      })

      if (play.code == 200) {
        this.palylist = play.playlists
        this.total=play.total
      }
    }
  },
  watch: {
    // 监听selected的  变化
    selected() {
      
      // 获取新的顶部精品歌单
      this.getTopList(1,this.selected),
      this.getList(50,this.selected)
      // this.page=1
    }
  },
  //获取歌单列表    /top/playlist/
  async created() {

    // 获取歌单列表
    this.getList(50,'全部')
    // 获取顶部歌单信息
    this.getTopList(1, '全部')

  }
}
</script>

<style  lang='scss'>
.playlist {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  .recommend {
    margin-top: 30px;
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
  // background-color: #b69292;
  padding: 20px;
}
.playlist .header .bg {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  filter: blur(20px);
}

.playlist .header .bg-mask {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.image {
  width: 160px;
  height: 160px;
  margin-right: 20px;
  z-index: 1000;
}
img {
  height: 100%;
}
.header-right {
  position: relative;
  width: 880px;
  height: 160px;
  z-index: 1000;
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
.tab {
  display: flex;
  justify-content: flex-end;
  margin: 10px auto;
}
.tab span {
  margin-right: 20px;
  font-size: 15px;
  color: gray;
  cursor: pointer;
}
.playlist .recommend .tab .item.active {
  color: #dd6d60;
}
.el-pagination{
  margin:30px  10px;
  text-align: right;
}
</style>