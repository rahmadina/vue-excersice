import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bitcoin from '@/components/Bitcoin'
import jsonUser from '@/components/jsonUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bitcoin',
      name: 'Bitcoin',
      component: Bitcoin
    },
    {
      path: '/jsonUser',
      name: 'jsonUser',
      component: jsonUser
    }
  ]
})
