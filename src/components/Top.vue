<template>
  <div class="all">
    <div class="fixed">
      <div class="top">
        <div class="peng">
          <span>Dragon'peng Music</span>
        </div>
        <div class="center">
          <el-input
            v-model="inputValue"
            autocomplete="off"
            placeholder="请输入歌曲"
            prefix-icon="el-icon-search"
            @keyup.enter.native="toResult"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'top',
  data () {
    return {
      // 输入的内容
      inputValue: ''
    };
  },
  methods: {
    toResult () {
      // 非空判断
      if (this.inputValue == '') {
        // 提示用户
        this.$message.warning('请输入内容')
      } else {
        // 去搜索页 携带数据
        this.$router.push('/result?q=' + this.inputValue)
      }
    }
  }
}

</script>

<style  >
.all .fixed {
  /* z-index: 10001; */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10000;
}
.top {
  display: flex;
  align-items: center;
  height: 46px;
  background-color: #f9f9f9;
  z-index: 10000;
}
.center {
  margin: 0 auto;
}
.el-input .el-input__inner {
  border-radius: 50px;
  width: 425px;
  height: 30px;
}
.peng {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>