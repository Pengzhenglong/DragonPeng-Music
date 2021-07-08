<template>
  <div class="all">
    <div class="header">
      <div class="left">
        <img
          src="https://p1.music.126.net/wrnC0XHBA3rQIkDF7Y1JsA==/109951166045246631.jpg?param=400y400"
          alt=""
        />
      </div>
      <div class="right">
        <div class="description">
          <span>沿着梦想走，你不是孤身一人</span>
        </div>
        <div class="user">
          <div class="image">
            <img
              src="http://p1.music.126.net/OS2D0_VwB-i4FQBg7oLLBw==/109951165775596828.jpg"
              alt=""
            />
          </div>
          <div>
            <span class="name">围兜 </span>
          </div>
          <div><span class="create-name">2020-12-02 创建</span></div>
          <!-- <div>
            <span></span>
          </div> -->
        </div>
        <div class="paly">
              <button>播放全部</button>

        </div>
        <div class="paly-tag">
          <span>标签:</span>
          <span> 华语/流行/治愈</span>
        </div>
        <div class="desc">
          <span>简介</span>
          <span
            >从来都坚信爱和生命的长度一样，生命有多久，爱亦会缠绕多久。从来也以为爱和回忆的厚度一般，回忆有多深，爱亦会纠结多深。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss"  scoped>
.all {
  max-width: 1100px;
  .header {
    width: 100%;
    height: 290px;
    display: flex;
    .left {
      width: 230px;
      height: 100%;
      margin-right: 20px;
      img {
        width: 230px;
        height: 230px;
        border-radius: 10px;
        // display: inline;
      }
    }
    .right {
      flex: 1;
      width: 840px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .description {
        width: 840px;
        height: 20px;
        color: #333333;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
        line-height: 20px;
        margin:0 0 20px;
      }
      .user {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 840px;
        height: 35px;
        margin: 0 0 25px;

        .image {
          width: 30px;
          height: 30px;
          img {
            border-radius: 50%;
            margin: 0 10px 0 0;
          }
        }
        .name {
          width: 32px;
          height: 21px;
          margin: 0 10px 0 0;
        }
        .create-name {
          font-size: 14px;
        }
      }
      .play{

      }
      .paly-tag{

      }
      .desc{
        
      }
    }
  }
}
</style>