import Vue from 'vue'
import Router from 'vue-router'
import TodayHistory from '../components/TodayHistory'
import index from '../pages/index'
import HeadTop from '../components/HeadTop'
import login from '../pages/login'
import signup from '../pages/signup'
import forgotKeyword from '../pages/forgotKeyword'
import history from '../pages/history'
import detail from '../pages/detail'
import home from '../pages/home'
import comment from '../components/comment'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/head',
      name: 'head',
      component: HeadTop
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/forget',
      name: 'forget',
      component: forgotKeyword
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/todayHistory',
      name: 'todayHistory',
      component: TodayHistory
    },
    {
    path: '/comment',
      name: 'comment',
      component: comment
    }


  ]
})
