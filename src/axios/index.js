import Vue from 'vue'
import axios from 'axios'

// 接口地址https://autumnfish.cn/

axios.defaults.baseURL= 'https://autumnfish.cn/'


Vue.prototype.$axios=  axios