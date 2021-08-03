<template>
  <div>
    这是个测试文件
  </div>
</template>

<script>
export default {
  dta(){
    return{

    }
  },
methods:{
  async   getsql(){
    const   {data:data}  =  await  this.$axios.get('http://localhost:8000/',{
      params:{

      }
    })
    console.log(data)
  }
},
created(){
  this.getsql()
}


}
</script>

<style>

</style>