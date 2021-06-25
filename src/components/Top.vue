<template>
  <div class="all">
    <div  class="fixed">
      <div class="top">
        <div class="left">
          <img src="../assets/top.png" alt="" />
        </div>
        <div class="center">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入歌曲"
            prefix-icon="el-icon-search"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      restaurants: [],
      state: '',
      timeout: null
    };
  },
  methods: {
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}

</script>

<style  >
.fixed {
 z-index: 10001;
    position: fixed;
  width: 100%;
  top: 0;
  left: 0;
    background-color: #fff;
}
.top {
  display: flex;
  align-items: center;
  height: 46px;
}
.center {
  margin: 0 auto;
}
.el-input .el-input__inner {
  border-radius: 50px;
  width: 425px;
  height: 30px;
}
</style>