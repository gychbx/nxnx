import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MyHome from '@/components/MyHome'
export default new Router({
  routes: [
      {
        path:'/',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/home',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/cake',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/bread',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/gift',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/company',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/mynx',
        name:'MyHome',
        component:MyHome
      }
  ]
})
