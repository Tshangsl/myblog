import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'origin',
    component: () => import('../views/origin.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/regist.vue')
  },
  {
    path: '/blog/detail/:blog_id',
    name: 'blogdetail',
    component: () => import('../views/blogDetail.vue')
  },
  {
    path: '/blog/post',
    name: 'postBlog',
    component: () => import('../views/postBlog.vue')
  },
  {
    path: '/blog/postComment/:blog_id',
    name: 'postComment',
    component: () => import('../views/postComment.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
