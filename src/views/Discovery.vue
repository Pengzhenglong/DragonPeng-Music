<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" >
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img class="banner-img" :src="item.image" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
   .el-carousel__container{
          height: 230px;
          .banner-img {
            height: 100%;
            width: 100%;
      }
      }
  }



</style>