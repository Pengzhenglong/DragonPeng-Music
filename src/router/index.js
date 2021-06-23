import Vue from 'vue'
import VueRouter from 'vue-router'
import Discovery from '../views/Discovery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/discovery',
    name: 'Discovery',
    component: Discovery
  },
  {
    path: '/mvs',
    name: 'Mvs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mvs.vue')
  },
  {
    path: '/playlist',
    name: 'Playlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlist.vue')
  },
  {
    path: '/songs',
    name: 'Songs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Songs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
