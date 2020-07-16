import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRouterMap  from './defaultRouter'

Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }), //对于所有路由导航，简单地让页面滚动到顶部。
  routes:constantRouterMap
})

export default router
