import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../views/AppMain'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppMain,
    children: [
      {
        path: '', // 圈子首页 默认
        name: 'projectInfo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "index" */'../components/ProjectInfo.vue')
      },
      {
        path: 'diary', // 日记管理
        name: 'diaryManage',
        component: () => import('../components/DiaryManage.vue')
      },
      {
        path: 'theme', // 主题管理
        name: 'punchCardThemeManage',
        component: () => import('../components/PunchCardThemeManage.vue')
      },
      {
        path: 'member', // 成员管理
        name: 'memberManage',
        component: () => import('../components/MemberManage.vue')
      },
      {
        path: 'count', // 打卡统计
        name: 'punchCardCount',
        component: () => import('../components/PunchCardCount.vue')
      },
      {
        path: 'detail', // 圈子详情
        name: 'projectDetailIntr',
        component: () => import('../components/ProjectDetailIntr.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
