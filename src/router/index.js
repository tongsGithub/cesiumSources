import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/cesium/HelloWorld'

Vue.use(VueRouter)

const routes = [{
  path: '/reg',
  component: () => import('@/views/register')
},
{
  path: '/login',
  component: () => import('@/views/login')
},
{
  path: '/index',
  name: 'HelloWorld',
  component: HelloWorld
}
]

const router = new VueRouter({
  routes
})
export default router

